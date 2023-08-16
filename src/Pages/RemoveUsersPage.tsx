import { Button, ButtonVariant, Modal } from '@patternfly/react-core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { License, UserResult } from '../client/service';
import { useState } from 'react';
import { useAppNavigate } from '../Components/AppLink';
import { useService } from '../Components/ServiceProvider';
import { PageParams } from './AddUsersPage';
import { UsersWithSeatTable } from '../Components/UsersWithSeatTable';
import { usePagination } from './usePagination';

export const RemoveUsersPage = ({ user, onSuccess, onError }: PageParams) => {
  const navigate = useAppNavigate();
  const service = useService();

  const subscriptions = useQuery<License>({
    queryKey: ['subscriptions'],
    queryFn: () => service.get(user, { page, perPage }),
  });

  const [page, perPage, setPagination] = usePagination();

  const queryClient = useQueryClient();
  const users = useQuery<UserResult>({
    queryKey: ['assignedUsers', { page, perPage, usernames: [] }],
    queryFn: () => service.seats(user, { page, perPage }),
  });

  const [checkedUsers, setCheckedUsers] = useState<string[]>([]);

  const assignedSeats =
    (subscriptions.data?.total || 0) - (subscriptions.data?.available || 0);

  const { mutate, isLoading } = useMutation(
    () => {
      setCheckedUsers([]);
      return service.unAssign(user, checkedUsers);
    },
    {
      onSuccess: () => {
        onSuccess('Successfully removed users');
        queryClient.invalidateQueries({
          queryKey: ['users', 'assignedUsers', 'subscriptions'],
        });
      },
      onError: (error) => {
        onError('there was an error: ' + error);
      },
    }
  );

  const close = () => navigate('/');

  return (
    <Modal
      isOpen
      title={`Remove ${assignedSeats} users from their assigned seats`}
      variant="medium"
      onClose={close}
      actions={[
        <Button
          key="remove"
          onClick={() => mutate()}
          isDisabled={checkedUsers.length > assignedSeats}
          isLoading={isLoading}
        >
          Remove
        </Button>,
        <Button
          key="cancel"
          onClick={close}
          variant={ButtonVariant.link}
          isDisabled={isLoading}
        >
          Cancel
        </Button>,
      ]}
    >
      <UsersWithSeatTable
        isPicker
        totalSeats={subscriptions.data?.total}
        users={users.data?.users}
        itemCount={users.data?.count}
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
