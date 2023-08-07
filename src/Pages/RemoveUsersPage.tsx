import { Button, ButtonVariant, Modal } from '@patternfly/react-core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { License, User } from '../client/service';
import { useState } from 'react';
import { useService } from '../Components/ServiceProvider';
import { useHistory } from 'react-router-dom';
import { PageParams } from './AddUsersPage';
import { UsersWithSeatTable } from '../Components/UsersWithSeatTable';
import { usePagination } from './usePagination';

export const RemoveUsersPage = ({ user, onSuccess, onError }: PageParams) => {
  const history = useHistory();
  const service = useService();

  const subscriptions = useQuery<License>({
    queryKey: ['subscriptions'],
    queryFn: () => service.get(user),
  });

  const [page, perPage, setPagination] = usePagination();

  const queryClient = useQueryClient();
  const users = useQuery<User[]>({
    queryKey: ['assignedUsers', { page, perPage, usernames: [] }],
    queryFn: () => service.seats(user),
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

  const close = () => history.push('/');

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
