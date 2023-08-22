import { Page, PageSection } from '@patternfly/react-core';
import { Meta, StoryFn } from '@storybook/react';
import { ConfirmRemoveDialog as ConfirmRemoveDialogComponent } from './ConfirmRemoveDialog';

export default {
  component: ConfirmRemoveDialogComponent,
  args: {},
} as Meta<typeof ConfirmRemoveDialogComponent>;

const Template: StoryFn<typeof ConfirmRemoveDialogComponent> = (args) => (
  <Page>
    <ConfirmRemoveDialogComponent {...args} />
    <PageSection>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, animi
      at doloremque eius eum facere illum iste labore laboriosam, minima
      molestias nisi quam quibusdam quos repellendus, sint vero vitae
      voluptatum!
    </PageSection>
  </Page>
);

export const ConfirmRemove1Users = Template.bind({});
ConfirmRemove1Users.args = {
  users: [
    {
      id: `bob`,
      userName: `bob.robert1`,
      firstName: `Bob`,
      lastName: `Robert`,
      assigned: true,
    },
  ],
};

export const ConfirmRemoveNoNameUsers = Template.bind({});
ConfirmRemoveNoNameUsers.args = {
  users: Array(2)
    .fill(0)
    .map((_, i) => ({
      id: `${i}`,
      userName: `cork.captain${i}`,
      firstName: ``,
      lastName: ``,
      assigned: true,
    })),
};

export const ConfirmRemoveMoreUsers = Template.bind({});
ConfirmRemoveMoreUsers.args = {
  users: Array(23)
    .fill(0)
    .map((_, i) => ({
      id: `${i}`,
      userName: `cork.captain${i}`,
      firstName: `Cork ${i}`,
      lastName: `Captain ${i}`,
      assigned: true,
    })),
};
