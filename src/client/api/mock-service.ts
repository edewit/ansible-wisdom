import { AuthenticatedUser, License, LicenseService, User } from "../service";

type MockLicense = {
  totalSeats: number;
  availableSeats: number;
  assignedSeats: number;
};

export class MockService implements LicenseService {
  async get(_user: AuthenticatedUser): Promise<License> {
    const { totalSeats, availableSeats }: MockLicense = await (
      await fetch("/aw-api/subscriptions")
    ).json();
    return {
      total: totalSeats,
      available: availableSeats,
    };
  }

  async seats(
    _user: AuthenticatedUser,
    _assigned?: boolean | undefined
  ): Promise<User[]> {
    return (await (await fetch("/aw-api/users")).json());
  }

  assign(_user: AuthenticatedUser, _userIds: string[]): Promise<void> {
    return Promise.resolve();
  }

  unAssign(_user: AuthenticatedUser, _userIds: string[]): Promise<void> {
    return Promise.resolve();
  }
}
