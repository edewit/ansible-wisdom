import { MockService } from "./api/mock-service";
import { CiamAuthz } from "./api/ciam-service";

export type License = {
  available: number;
  total: number;
};

export type User = {
  id: string;
  name: string;
  assigned: boolean;
};

export type AuthenticatedUser = {
  orgId: string;
  serviceId: string;
  token: () => Promise<string>;
}

export interface LicenseService {
  get(user: AuthenticatedUser): Promise<License>;

  seats(user: AuthenticatedUser, assigned?: boolean): Promise<User[]>;

  assign(user: AuthenticatedUser, userIds: string[]): Promise<void>;

  unAssign(user: AuthenticatedUser, userIds: string[]): Promise<void>;
}

export function getService(serviceKey: string, baseUrl?: string): LicenseService {
  switch (serviceKey) {
    case "CIAM_Authz":
      return new CiamAuthz(baseUrl);
    case "mock":
      return new MockService();
    default:
      throw new Error("no implementation found for " + serviceKey);
  }
}
