/**
 * CIAM Authz
 * version not set
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from 'oazapfts/lib/runtime';
import * as QS from 'oazapfts/lib/runtime/query';
export const defaults: Oazapfts.RequestOpts = {
  baseUrl: '/',
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type V1AlphaCheckPermissionRequest = {
  subject?: string;
  operation?: string;
  resourcetype?: string;
  resourceid?: string;
};
export type V1AlphaCheckPermissionResponse = {
  result?: boolean;
  description?: string;
};
export type ProtobufAny = {
  '@type'?: string;
  [key: string]: any;
};
export type RpcStatus = {
  code?: number;
  message?: string;
  details?: ProtobufAny[];
};
export type V1AlphaEmpty = object;
export type EntitleOrgResponseIsTheResponseWhenEntitlingAnOrg = object;
export type ImportOrgResponse = {
  importedUsersCount?: string;
  notImportedUsersCount?: string;
};
export type V1AlphaGetLicenseResponse = {
  seatsTotal?: string;
  seatsAvailable?: string;
};
export type V1AlphaModifySeatsResponse = object;
export type V1AlphaGetSeatsUserRepresentation = {
  displayName?: string;
  id?: string;
  assigned?: boolean;
  firstName?: string;
  lastName?: string;
  username?: string;
};
export type V1AlphaGetSeatsResponse = {
  users?: V1AlphaGetSeatsUserRepresentation[];
};
/**
 * Checks the permission and returns allowed (true) or not allowed (false)
 */
export function checkPermissionCheckPermission(
  v1AlphaCheckPermissionRequest: V1AlphaCheckPermissionRequest,
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: V1AlphaCheckPermissionResponse;
        }
      | {
          status: 401;
          data: any;
        }
      | {
          status: 403;
          data: any;
        }
      | {
          status: 500;
          data: any;
        }
      | {
          status: number;
          data: RpcStatus;
        }
    >(
      '/v1alpha/check',
      oazapfts.json({
        ...opts,
        method: 'POST',
        body: v1AlphaCheckPermissionRequest,
      })
    )
  );
}
/**
 * Health check for the AuthZ service.
 */
export function healthCheckServiceHealthCheck(opts?: Oazapfts.RequestOpts) {
  return oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: V1AlphaEmpty;
        }
      | {
          status: 401;
          data: any;
        }
      | {
          status: 403;
          data: any;
        }
      | {
          status: 500;
          data: any;
        }
      | {
          status: number;
          data: RpcStatus;
        }
    >('/v1alpha/healthcheck', {
      ...opts,
    })
  );
}
/**
 * Entitle an Org access through a seat based license for a service.
 */
export function licenseServiceEntitleOrg(
  orgId: string,
  serviceId: string,
  body: {
    maxSeats?: string;
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: EntitleOrgResponseIsTheResponseWhenEntitlingAnOrg;
        }
      | {
          status: 401;
          data: any;
        }
      | {
          status: 403;
          data: any;
        }
      | {
          status: 500;
          data: any;
        }
      | {
          status: number;
          data: RpcStatus;
        }
    >(
      `/v1alpha/orgs/${encodeURIComponent(
        orgId
      )}/entitlements/${encodeURIComponent(serviceId)}`,
      oazapfts.json({
        ...opts,
        method: 'POST',
        body,
      })
    )
  );
}
export function importServiceImportOrg(
  orgId: string,
  body: object,
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: ImportOrgResponse;
        }
      | {
          status: 401;
          data: any;
        }
      | {
          status: 403;
          data: any;
        }
      | {
          status: 500;
          data: any;
        }
      | {
          status: number;
          data: RpcStatus;
        }
    >(
      `/v1alpha/orgs/${encodeURIComponent(orgId)}/import`,
      oazapfts.json({
        ...opts,
        method: 'POST',
        body,
      })
    )
  );
}
/**
 * Summarize a license.
 */
export function licenseServiceGetLicense(
  orgId: string,
  serviceId: string,
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: V1AlphaGetLicenseResponse;
        }
      | {
          status: 401;
          data: any;
        }
      | {
          status: 403;
          data: any;
        }
      | {
          status: 500;
          data: any;
        }
      | {
          status: number;
          data: RpcStatus;
        }
    >(
      `/v1alpha/orgs/${encodeURIComponent(orgId)}/licenses/${encodeURIComponent(
        serviceId
      )}`,
      {
        ...opts,
      }
    )
  );
}
/**
 * Assign or unassign users to/from the license.
 */
export function licenseServiceModifySeats(
  orgId: string,
  serviceId: string,
  body: {
    assign?: string[];
    unassign?: string[];
  },
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: V1AlphaModifySeatsResponse;
        }
      | {
          status: 401;
          data: any;
        }
      | {
          status: 403;
          data: any;
        }
      | {
          status: 500;
          data: any;
        }
      | {
          status: number;
          data: RpcStatus;
        }
    >(
      `/v1alpha/orgs/${encodeURIComponent(orgId)}/licenses/${encodeURIComponent(
        serviceId
      )}`,
      oazapfts.json({
        ...opts,
        method: 'POST',
        body,
      })
    )
  );
}
/**
 * Gets user details with filters.
 */
export function licenseServiceGetSeats(
  orgId: string,
  serviceId: string,
  {
    includeUsers,
    filter,
  }: {
    includeUsers?: boolean;
    filter?: 'assigned' | 'assignable';
  } = {},
  opts?: Oazapfts.RequestOpts
) {
  return oazapfts.ok(
    oazapfts.fetchJson<
      | {
          status: 200;
          data: V1AlphaGetSeatsResponse;
        }
      | {
          status: 401;
          data: any;
        }
      | {
          status: 403;
          data: any;
        }
      | {
          status: 500;
          data: any;
        }
      | {
          status: number;
          data: RpcStatus;
        }
    >(
      `/v1alpha/orgs/${encodeURIComponent(orgId)}/licenses/${encodeURIComponent(
        serviceId
      )}/seats${QS.query(
        QS.explode({
          includeUsers,
          filter,
        })
      )}`,
      {
        ...opts,
      }
    )
  );
}
