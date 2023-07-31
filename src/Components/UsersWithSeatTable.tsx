import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuToggle,
  MenuToggleCheckbox,
  Popper,
  Skeleton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';
import {
  TableComposable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@patternfly/react-table';
import type { TableViewProps } from '@rhoas/app-services-ui-components';
import {
  Loading,
  Pagination,
  useTranslation,
} from '@rhoas/app-services-ui-components';
import orderBy from 'lodash.orderBy';
import { VoidFunctionComponent, useMemo, useState } from 'react';
import { User } from '../client/service';
import { EmptyStateNoAssignedSeat } from './EmptyStateNoAssignedSeat';
import {
  EmptyStateNoResults,
  EmptyStateNoResultsProps,
} from './EmptyStateNoResults';

export const Columns = ['userName', 'firstName', 'lastName'] as const;

export const labels: { [key in (typeof Columns)[number]]: string } = {
  userName: 'Username',
  firstName: 'First name',
  lastName: 'Last name',
};

export type UsersWithSeatTableProps = {
  users: Array<User> | undefined | null;
  getUrlForUser: (row: User) => string;
  totalSeats: number | undefined;
  usernames: string[];
  canAddUser: boolean;
  onAddUser: () => void;
  isUserChecked: (user: User) => boolean;
  onCheckUser: (user: User, isChecked: boolean) => void;
  setSelectedUser: (users: User[]) => void;
  onSearchUsername: (value: string) => void;
  onRemoveUsernameChip: (value: string) => void;
  onRemoveUsernameChips: () => void;
  onRemoveSeat: (row?: User) => void;
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

const TableSkeleton: VoidFunctionComponent<{
  columns: number;
  rows: number;
}> = ({ columns, rows }) => {
  const { t } = useTranslation();
  const skeletonCells = new Array(columns).fill(0).map((_, index) => {
    return (
      <Td key={`cell_${index}`}>
        <Skeleton
          screenreaderText={
            index === 0
              ? t('common:skeleton_loader_screenreader_text')
              : undefined
          }
        />
      </Td>
    );
  });
  const skeletonRows = new Array(rows)
    .fill(0)
    .map((_, index) => <Tr key={`row_${index}`}>{skeletonCells}</Tr>);
  return <>{skeletonRows}</>;
};

type SelectOption = 'all' | 'none' | 'page';

type BulkSelectToolbarProps = {
  perPage: number;
  itemCount: number;
  select: (option: SelectOption) => void;
};

const BulkSelectToolbar = ({
  perPage,
  itemCount,
  select,
}: BulkSelectToolbarProps) => {
  const [isBulkSelectOpen, setIsBulkSelectOpen] = useState(false);
  const [menuToggleCheckmark, setMenuToggleCheckmark] = useState(false);

  return (
    <Popper
      trigger={
        <MenuToggle
          onClick={() => setIsBulkSelectOpen(!isBulkSelectOpen)}
          isExpanded={isBulkSelectOpen}
          splitButtonOptions={{
            items: [
              <MenuToggleCheckbox
                id="select-all"
                key="select-all"
                aria-label="Select all"
                isChecked={menuToggleCheckmark}
                onChange={(checked) => {
                  setMenuToggleCheckmark(checked);
                  select(checked ? 'all' : 'none');
                }}
              />,
            ],
          }}
          aria-label="Full table selection checkbox"
        />
      }
      popper={
        <Menu
          id="select"
          onSelect={(_ev, itemId) => {
            setMenuToggleCheckmark(itemId === 1 || itemId === 2);
            select(itemId === 1 ? 'page' : itemId === 2 ? 'all' : 'none');
            setIsBulkSelectOpen(!isBulkSelectOpen);
          }}
        >
          <MenuContent>
            <MenuList>
              <MenuItem itemId={0}>Select none (0 items)</MenuItem>
              <MenuItem itemId={1}>
                Select page ({perPage > itemCount ? itemCount : perPage} items)
              </MenuItem>
              <MenuItem itemId={2}>Select all ({itemCount} items)</MenuItem>
            </MenuList>
          </MenuContent>
        </Menu>
      }
      isVisible={isBulkSelectOpen}
      popperMatchesTriggerWidth={false}
    />
  );
};

export const UsersWithSeatTable = ({
  users,
  itemCount,
  page,
  perPage,
  usernames,
  totalSeats,
  getUrlForUser,
  isColumnSortable,
  canAddUser,
  isUserChecked,
  onCheckUser,
  setSelectedUser,
  onPageChange,
  onRemoveSeat,
  onAddUser,
  // onSearchUsername,
  // onRemoveUsernameChip,
  // onRemoveUsernameChips,
  onClearAllFilters,
}: UsersWithSeatTableProps) => {
  const [activeSortIndex, setActiveSortIndex] = useState<number | undefined>();
  const [activeSortDirection, setActiveSortDirection] = useState<'asc' | 'desc' | undefined>();

  const startIndex = (page - 1) * (perPage || 20);
  const isFiltered = usernames.length > 0;

  const data = useMemo<User[]>(() => {
    const page = users?.slice(startIndex, startIndex + (perPage || 20));
    if (activeSortIndex !== undefined) {
      return orderBy(page, Columns[activeSortIndex], activeSortDirection);
    }
    return page;
  }, [startIndex, perPage, activeSortIndex, activeSortDirection]);

  if (users === null) {
    return <Loading />;
  }
  if (users?.length === 0 && !isFiltered) {
    return (
      <EmptyStateNoAssignedSeat
        totalSeats={totalSeats || 0}
        onAddUsers={onAddUser}
      />
    );
  }

  return (
    <>
      <Toolbar>
        <ToolbarContent>
          <ToolbarItem>
            <BulkSelectToolbar
              perPage={perPage || 20}
              itemCount={itemCount || 0}
              select={(option) => {
                switch(option) {
                  case 'all' : 
                    setSelectedUser(users || []);
                    break;
                  case 'page':
                    setSelectedUser(data || []);
                    break;
                  default:
                    setSelectedUser([]);
                }
              }}
            />
          </ToolbarItem>
          {canAddUser && (
            <ToolbarItem>
              <Button onClick={onAddUser}>Assign user(s)</Button>
            </ToolbarItem>
          )}
          <ToolbarItem>
            <Button onClick={() => onRemoveSeat()} variant="secondary">
              Remove user(s)
            </Button>
          </ToolbarItem>
        </ToolbarContent>
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
            {Columns.map((column, index) => (
              <Th key={column} sort={{sortBy: {
                index: activeSortIndex,
                direction: activeSortDirection,
                defaultDirection: 'asc'
                
              },
              onSort: (_event, index, direction) => {
                setActiveSortIndex(index);
                setActiveSortDirection(direction);
              }
              , columnIndex: index}}>{labels[column]}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {users === undefined && (
            <TableSkeleton columns={Columns.length + 1} rows={3} />
          )}
          {data?.map((row, rowIndex) => (
            <Tr key={row.id}>
              <Td
                select={{
                  rowIndex,
                  onSelect: (_event, isChecked) => onCheckUser(row, isChecked),
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
          {data?.length === 0 && (
            <Tr>
              <Td colSpan={Columns.length}>
                <EmptyStateNoResults onClearAllFilters={onClearAllFilters} />
              </Td>
            </Tr>
          )}
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

const hackZIndex = {
  actionProps: {
    style: { zIndex: 9999 },
  },
};
