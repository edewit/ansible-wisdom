import { Page } from '@patternfly/react-core';
import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { UsersPickerTable as UsersPickerTableComponent } from './UsersPickerTable';
import { Columns, labels } from './UsersWithSeatTable';

export default {
  component: UsersPickerTableComponent,
  args: {
    usernames: [],
  },
} as Meta<typeof UsersPickerTableComponent>;

const Template: StoryFn<typeof UsersPickerTableComponent> = (args) => {
  // const [isColumnSortable] = useSortableSearchParams(
  //   Columns,
  //   labels,
  //   'userName'
  // );
  const [checkedUsers, setCheckedUsers] = useState<string[]>([]);
  return (
    <Page>
      <UsersPickerTableComponent
        // isColumnSortable={isColumnSortable}
        {...args}
        isUserChecked={(user) => checkedUsers.includes(user.id)}
        onCheckUser={(user, isChecked) => {
          setCheckedUsers(
            isChecked
              ? [...checkedUsers, user.id]
              : checkedUsers.filter((u) => u !== user.id)
          );
        }}
      />
    </Page>
  );
};

export const SomeUsersWithPagination = Template.bind({});
SomeUsersWithPagination.args = {
  users: [
    {
      id: 'FooBar1',
      userName: 'foo.bar1',
      firstName: 'Foo1',
      lastName: 'Bar1',
      assigned: true,
    },
    {
      id: 'FooBar2',
      userName: 'foo.bar2',
      firstName: 'Foo2',
      lastName: 'Bar2',
      assigned: true,
    },
    {
      id: 'FooBar3',
      userName: 'foo.bar3',
      firstName: 'Foo3',
      lastName: 'Bar3',
      assigned: true,
    },
    {
      id: 'FooBar4',
      userName: 'foo.bar4',
      firstName: 'Foo4',
      lastName: 'Bar4',
      assigned: true,
    },
    {
      id: 'FooBar5',
      userName: 'foo.bar5',
      firstName: 'Foo5',
      lastName: 'Bar5',
      assigned: true,
    },
    {
      id: 'FooBar6',
      userName: 'foo.bar6',
      firstName: 'Foo6',
      lastName: 'Bar6',
      assigned: true,
    },
    {
      id: 'FooBar7',
      userName: 'foo.bar7',
      firstName: 'Foo7',
      lastName: 'Bar7',
      assigned: true,
    },
  ],
  page: 1,
  itemCount: 56,
  usernames: ['foo'],
};
