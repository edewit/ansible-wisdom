import { Alert, Button, ButtonVariant, Modal } from '@patternfly/react-core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthenticatedUser, License, User } from '../client/service';
import { useState } from 'react';
import { useAppNavigate } from '../Components/AppLink';
import { useService } from '../Components/ServiceProvider';
import { UsersWithSeatTable } from '../Components/UsersWithSeatTable';
import { usePagination } from './usePagination';

export type PageParams = {
  user: AuthenticatedUser;
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
};

export const AddUsersPage = ({ user, onSuccess, onError }: PageParams) => {
  const navigate = useAppNavigate();
  const service = useService();

  const close = () => navigate('/');

  const subscriptions = useQuery<License>({
    queryKey: ['subscriptions'],
    queryFn: () => service.get(user),
  });
  const [page, perPage, setPagination] = usePagination();

  const queryClient = useQueryClient();
  const users = useQuery<User[]>({
    queryKey: ['availableUsers', { page, perPage, usernames: [] }],
    queryFn: () => service.seats(user, false),
  });

  const { mutate, isLoading } = useMutation(
    () => service.assign(user, checkedUsers),
    {
      onSuccess: () => {
        close();
        onSuccess('Successfully assigned users');
        queryClient.invalidateQueries({
          queryKey: ['users', 'availableUsers', 'subscriptions'],
        });
      },
      onError: (error) => {
        onError('there was an error: ' + error);
      },
    }
  );

  const [checkedUsers, setCheckedUsers] = useState<string[]>([]);
  const assignedSeats =
    (subscriptions.data?.total || 0) - (subscriptions.data?.available || 0);
  const isAddDisabled =
    subscriptions.data?.total === undefined
      ? true
      : checkedUsers.length > 0
      ? checkedUsers.length + assignedSeats > subscriptions.data.total
      : true;

  return (
    <Modal
      isOpen
      title="Assign users"
      variant="medium"
      onClose={close}
      actions={[
        <Button
          key="assign"
          onClick={() => mutate()}
          isDisabled={isAddDisabled}
          isLoading={isLoading}
        >
          Assign
        </Button>,
        <Button key="cancel" onClick={close} variant={ButtonVariant.link}>
          Cancel
        </Button>,
      ]}
    >
      {checkedUsers.length + assignedSeats >
        (subscriptions.data?.total || 0) && (
        <Alert
          variant="warning"
          isInline
          title="Your organization does not have enough Ansible Lightspeed with Watson Code Assistant seats available for the assignments below"
        />
      )}
      <UsersWithSeatTable
        isPicker
        totalSeats={subscriptions.data?.total}
        users={users.data}
        itemCount={users.data?.length}
        page={page}
        perPage={perPage}
        onPageChange={setPagination}
        isUserChecked={(user) => checkedUsers.includes(user.id)}
        onCheckUser={(user, isChecked) => {
          setCheckedUsers(
            isChecked
              ? [...checkedUsers, user.id]
              : checkedUsers.filter((u) => u !== user.id)
          );
        }}
      />
    </Modal>
  );
};
