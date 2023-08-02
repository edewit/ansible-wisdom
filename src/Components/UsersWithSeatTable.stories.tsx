import { Page } from '@patternfly/react-core';
import type { Meta, StoryFn } from '@storybook/react';
import { UsersWithSeatTable as UsersWithSeatTableComponent } from './UsersWithSeatTable';

export default {
  component: UsersWithSeatTableComponent,
  args: {
    availableSeats: 5,
    totalSeats: 10,
    canAddUser: true,
    isUserChecked: () => false,
  },
} as Meta<typeof UsersWithSeatTableComponent>;

const Template: StoryFn<typeof UsersWithSeatTableComponent> = (args) => {
  return (
    <Page>
      <UsersWithSeatTableComponent {...args} />
    </Page>
  );
};

export const FirstLoadShowsSpinner = Template.bind({});
FirstLoadShowsSpinner.args = {
  users: null,
};

export const LoadingDataAfterFilteringShowsASkeleton = Template.bind({});
LoadingDataAfterFilteringShowsASkeleton.args = {
  users: undefined,
};

export const NoInitialDataShowsTheRightEmptyState = Template.bind({});
NoInitialDataShowsTheRightEmptyState.args = {
  users: [],
};

export const NoDataWithAFilterShowsTheRightEmptyState = Template.bind({});
NoDataWithAFilterShowsTheRightEmptyState.args = {
  users: [],
};

export const SomeUsers = Template.bind({});
SomeUsers.args = {
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
      userName: 'foo.bar3',
      firstName: 'Foo4',
      lastName: 'Bar8',
      assigned: true,
    },
    {
      id: 'FooBar3',
      userName: 'foo.bar8',
      firstName: 'Foo3',
      lastName: 'Bar2',
      assigned: true,
    },
    {
      id: 'FooBar4',
      userName: 'foo.bar4',
      firstName: 'Foo4',
      lastName: 'Bar4',
      assigned: true,
    },
  ],
  page: 1,
  itemCount: 5,
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
      id: 'FooBar1',
      userName: 'foo.bar1',
      firstName: 'Foo1',
      lastName: 'Bar2',
      assigned: true,
    },
    {
      id: 'FooBar2',
      userName: 'foo.bar2',
      firstName: 'Foo2',
      lastName: 'Bar3',
      assigned: true,
    },
    {
      id: 'FooBar3',
      userName: 'foo.bar3',
      firstName: 'Foo3',
      lastName: 'Bar2',
      assigned: true,
    },
    {
      id: 'FooBar4',
      userName: 'foo.bar4',
      firstName: 'Foo4',
      lastName: 'Bar42',
      assigned: true,
    },
    {
      id: 'FooBar10',
      userName: 'foo.bar14',
      firstName: 'Foo14',
      lastName: 'Bar14',
      assigned: true,
    },
    {
      id: 'FooBar2',
      userName: 'foo.bar12',
      firstName: 'Foo12',
      lastName: 'Bar4',
      assigned: true,
    },
    {
      id: 'FooBar30',
      userName: 'foo.bar30',
      firstName: 'Foo30',
      lastName: 'Bar30',
      assigned: true,
    },
    {
      id: 'FooBar4',
      userName: 'foo.bar34',
      firstName: 'Foo34',
      lastName: 'Bar4',
      assigned: true,
    },
    {
      id: 'FooBar1',
      userName: 'foo.bar11',
      firstName: 'Foo41',
      lastName: 'Bar14',
      assigned: true,
    },
    {
      id: 'FooBar2',
      userName: 'foo.bar55',
      firstName: 'Foo45',
      lastName: 'Bar4',
      assigned: true,
    },
    {
      id: 'FooBar3',
      userName: 'foo.bar56',
      firstName: 'Foo4',
      lastName: 'Bar4',
      assigned: true,
    },
    {
      id: 'FooBar4',
      userName: 'foo.bar55',
      firstName: 'Foo4',
      lastName: 'Bar4',
      assigned: true,
    },
  ],
  page: 1,
  itemCount: 56,
};

export const CantAddUsers = Template.bind({});
CantAddUsers.args = {
  ...SomeUsersWithPagination.args,
  canAddUser: false,
};
