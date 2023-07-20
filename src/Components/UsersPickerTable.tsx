import { Toolbar } from '@patternfly/react-core';
import {
  TableComposable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@patternfly/react-table';
import type { TableViewProps } from '@rhoas/app-services-ui-components';
import { Pagination } from '@rhoas/app-services-ui-components';
import { User } from '../client/service';
import { EmptyStateNoResultsProps } from './EmptyStateNoResults';
import { Columns, labels } from './UsersWithSeatTable';

export type UsersPickerTableProps = {
  users: Array<User> | undefined | null;
  isUserChecked: (row: User) => boolean;
  usernames: string[];
  onSearchUsername: (value: string) => void;
  onRemoveUsernameChip: (value: string) => void;
  onRemoveUsernameChips: () => void;
  onCheckUser: (row: User, isChecked: boolean) => void;
} & Pick<
  TableViewProps<User, (typeof Columns)[number]>,
  | 'itemCount'
  | 'page'
  | 'perPage'
  | 'onPageChange'
  | 'isColumnSortable'
  | 'onClearAllFilters'
> &
  EmptyStateNoResultsProps;

export const UsersPickerTable = ({
  users,
  itemCount,
  page,
  perPage,
  isUserChecked,
  onPageChange,
  onCheckUser,
}: UsersPickerTableProps) => {
  const startIndex = (page - 1) * (perPage || 20);

  return (
    <>
      <Toolbar>
        <Pagination
          itemCount={itemCount || 0}
          page={page}
          perPage={perPage || 20}
          onChange={onPageChange}
          isCompact
          variant="top"
        />
      </Toolbar>
      <TableComposable aria-label="Seats Administration users">
        <Thead>
          <Tr>
            <Th />
            {Columns.map((column) => (
              <Th key={column}>{labels[column]}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {users
            ?.slice(startIndex, startIndex + (perPage || 20))
            .map((row, rowIndex) => (
              <Tr key={row.id}>
                <Td
                  select={{
                    rowIndex,
                    onSelect: (_event, isChecked) =>
                      onCheckUser(row, isChecked),
                    isSelected: isUserChecked(row),
                  }}
                />
                {Columns.map((column) => (
                  <Td key={`${row.id}-${column}`} dataLabel={labels[column]}>
                    {row[column]}
                  </Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </TableComposable>
      <Toolbar>
        <Pagination
          itemCount={itemCount || 0}
          page={page}
          perPage={perPage || 20}
          onChange={onPageChange}
          isCompact
          variant="bottom"
        />
      </Toolbar>
    </>
  );
};
