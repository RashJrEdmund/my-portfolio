import { Roles } from "@/features/auth/api/types";
import { useCurrentUserStore } from "@/features/auth/stores";

type RoleType = keyof typeof Roles;

interface Props {
  children: React.ReactNode;
  include?: RoleType[];
  exclude?: RoleType[];
}

/**
 * @param children ReactNode
 * @param include An optional array of roles to include
 * @param exclude An optional array of roles to exclude. Weather
 * @returns Functional component || null
 * If no array (include nor exclude) is provided, no guarding is made.
 * Also, if a role is added to both exclude and include, it will be excluded
 */
export function ComponentRoleGuard({
  children,
  include = [],
  exclude = [],
}: Props) {
  const [state] = useCurrentUserStore();

  if (
    exclude.length &&
    exclude.includes((state.currentUser?.role || "") as Roles)
  ) {
    return null;
  }

  if (
    include.length &&
    !include.includes((state.currentUser?.role || "") as Roles)
  ) {
    return null;
  }

  return <>{children}</>;
}

/**
 * @param roles array of allowed roles
 * @param shouldIncludeRoles whether the provided roles should be included (allowed access), or excluded (denied access). It is true by default (meaning "include" for "allow access")
 * @returns {boolean} // use to check wether or not a user has permissions
 */
export function useCanAccess(
  roles: (keyof typeof Roles)[] = [],
  shouldIncludeRoles: boolean = true,
): boolean {
  const [state] = useCurrentUserStore();

  if (roles.length) {
    if (shouldIncludeRoles) {
      return roles.includes((state.currentUser?.role || "") as Roles);
    } else {
      return !roles.includes((state.currentUser?.role || "") as Roles);
    }
  }

  return true;
}
