import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { rest } from 'msw';
import { UsersPage } from './UsersPage';

export default {
  component: UsersPage,
  args: {},
} as ComponentMeta<typeof UsersPage>;

const Template: ComponentStory<typeof UsersPage> = (args) => (
  <UsersPage {...args} />
);

export const NoSubscription = Template.bind({});
NoSubscription.parameters = {
  msw: {
    handlers: [
      rest.get('/aw-api/subscriptions', (req, res, ctx) => {
        return res(
          ctx.delay(150),
          ctx.json({
            totalSeats: 0,
            availableSeats: 0,
            assignedSeats: 0,
          })
        );
      }),
      rest.get('/aw-api/users', (req, res, ctx) => {
        return res(
          ctx.delay(450),
          ctx.json({
            total: 0,
            users: [],
          })
        );
      }),
    ],
  },
};

export const SeatsAvailable = Template.bind({});
SeatsAvailable.parameters = {
  msw: {
    handlers: [
      rest.get('/aw-api/subscriptions', (req, res, ctx) => {
        return res(
          ctx.delay(150),
          ctx.json({
            totalSeats: 10,
            availableSeats: 5,
            assignedSeats: 5,
          })
        );
      }),
      rest.get('/aw-api/users', (req, res, ctx) => {
        return res(
          ctx.delay(450),
          ctx.json({
            total: 5,
            users: Array(5)
              .fill(0)
              .map((_, i) => ({
                username: `user${i}`,
                firstName: `John ${i}`,
                lastName: `Woo ${i}`,
              })),
          })
        );
      }),
    ],
  },
};

export const ZeroSeatsAvailable = Template.bind({});
ZeroSeatsAvailable.parameters = {
  msw: {
    handlers: [
      rest.get('/aw-api/subscriptions', (req, res, ctx) => {
        return res(
          ctx.delay(150),
          ctx.json({
            totalSeats: 30,
            availableSeats: 0,
            assignedSeats: 30,
          })
        );
      }),
      rest.get('/aw-api/users', (req, res, ctx) => {
        return res(
          ctx.delay(450),
          ctx.json({
            total: 30,
            users: Array(30)
              .fill(0)
              .map((_, i) => ({
                username: `user${i}`,
                firstName: `John ${i}`,
                lastName: `Woo ${i}`,
              })),
          })
        );
      }),
    ],
  },
};

export const NegativeSeats = Template.bind({});
NegativeSeats.parameters = {
  msw: {
    handlers: [
      rest.get('/aw-api/subscriptions', (req, res, ctx) => {
        return res(
          ctx.delay(150),
          ctx.json({
            totalSeats: 5,
            availableSeats: 0,
            assignedSeats: 10,
          })
        );
      }),
      rest.get('/aw-api/users', (req, res, ctx) => {
        return res(
          ctx.delay(450),
          ctx.json({
            total: 10,
            users: Array(10)
              .fill(0)
              .map((_, i) => ({
                username: `user${i}`,
                firstName: `John ${i}`,
                lastName: `Woo ${i}`,
              })),
          })
        );
      }),
    ],
  },
};
