import { Bullseye, Spinner } from '@patternfly/react-core';
import { InvalidObject } from '@redhat-cloud-services/frontend-components/InvalidObject';
import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addNotification } from '@redhat-cloud-services/frontend-components-notifications/redux';
import useChrome from '@redhat-cloud-services/frontend-components/useChrome';
import { AuthenticatedUser } from './client/service';
import { ServiceContextProvider } from './Components/ServiceProvider';
import { UsersPage } from './Pages/UsersPage';
import { AddUsersPage } from './Pages/AddUsersPage';
import { RemoveUsersPage } from './Pages/RemoveUsersPage';

export const AppRoutes = () => {
  const [user, setUser] = useState<AuthenticatedUser>();
  const dispatch = useDispatch();
  const handleAlert = (
    message: string,
    type:
      | 'default'
      | 'success'
      | 'danger'
      | 'warning'
      | 'info'
      | undefined = 'success'
  ) => {
    dispatch(
      addNotification({
        variant: type,
        title: message,
      })
    );
  };
  const handleError = (message: string) => handleAlert(message, 'danger');

  const {
    auth: { getToken, getUser },
  } = useChrome();

  useEffect(() => {
    (async () => {
      const user = await getUser();
      if (user)
        setUser({
          orgId: user.identity.org_id,
          isOrgAdmin: user.identity.user?.is_org_admin,
          serviceId: 'smarts',
          token: getToken,
        } as AuthenticatedUser);
    })();
  }, []);

  if (!user) {
    return (
      <Bullseye>
        <Spinner />
      </Bullseye>
    );
  }

  return (
    <Suspense
      fallback={
        <Bullseye>
          <Spinner />
        </Bullseye>
      }
    >
      <ServiceContextProvider
        serviceName={process.env.SERVICE_KEY!}
        baseUrl={process.env.BASE_URL}
      >
        <Routes>
          <Route
            path="/"
            element={
              <UsersPage
                user={user}
                onSuccess={handleAlert}
                onError={handleError}
              />
            }
          >
            <Route
              path="add-users"
              element={
                <AddUsersPage
                  user={user}
                  onSuccess={handleAlert}
                  onError={handleError}
                />
              }
            />
            <Route
              path="remove-users"
              element={
                <RemoveUsersPage
                  user={user}
                  onSuccess={handleAlert}
                  onError={handleError}
                />
              }
            />
          </Route>
          {/* Finally, catch all unmatched routes */}
          <Route element={<InvalidObject />} />
        </Routes>
      </ServiceContextProvider>
    </Suspense>
  );
};
