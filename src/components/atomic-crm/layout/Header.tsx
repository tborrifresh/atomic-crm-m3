import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Settings, User } from "lucide-react";
import { CanAccess } from "ra-core";
import { Link, matchPath, useLocation } from "react-router";
import { RefreshButton } from "@/components/admin/refresh-button";
import { ThemeModeToggle } from "@/components/admin/theme-mode-toggle";
import { UserMenu } from "@/components/admin/user-menu";
import { useUserMenu } from "@/hooks/user-menu-context";

import { useConfigurationContext } from "../root/ConfigurationContext";

const Header = () => {
  const { darkModeLogo, lightModeLogo, title } = useConfigurationContext();
  const location = useLocation();

  let currentPath: string | boolean = "/";
  if (matchPath("/", location.pathname)) {
    currentPath = "/";
  } else if (matchPath("/contacts/*", location.pathname)) {
    currentPath = "/contacts";
  } else if (matchPath("/companies/*", location.pathname)) {
    currentPath = "/companies";
  } else if (matchPath("/deals/*", location.pathname)) {
    currentPath = "/deals";
  } else {
    currentPath = false;
  }

  const actionIcons = (
    <>
      <nav className="hidden md:flex items-center gap-1 mr-4">
        <NavigationTab
          label="Dashboard"
          to="/"
          isActive={currentPath === "/"}
        />
        <NavigationTab
          label="Contacts"
          to="/contacts"
          isActive={currentPath === "/contacts"}
        />
        <NavigationTab
          label="Companies"
          to="/companies"
          isActive={currentPath === "/companies"}
        />
        <NavigationTab
          label="Deals"
          to="/deals"
          isActive={currentPath === "/deals"}
        />
      </nav>
      <div className="flex items-center gap-1">
        <ThemeModeToggle />
        <RefreshButton />
        <UserMenu>
          <ConfigurationMenu />
          <CanAccess resource="sales" action="list">
            <UsersMenu />
          </CanAccess>
        </UserMenu>
      </div>
    </>
  );

  const navigationIcon = (
    <Link to="/" className="flex items-center gap-2 text-on-surface no-underline">
      <img className="[.light_&]:hidden h-6" src={darkModeLogo} alt={title} />
      <img className="[.dark_&]:hidden h-6" src={lightModeLogo} alt={title} />
    </Link>
  );

  return (
    <div className="flex-grow">
      <TopAppBar
        variant="small"
        title={title}
        navigationIcon={navigationIcon}
        actionIcons={actionIcons}
        className="bg-surface sticky top-0 z-50"
      />
    </div>
  );
};

import { TopAppBar } from "@/components/ui/top-app-bar";

const NavigationTab = ({
  label,
  to,
  isActive,
}: {
  label: string;
  to: string;
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${isActive
        ? "bg-secondary-container text-on-secondary-container"
        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
      }`}
  >
    {label}
  </Link>
);

const UsersMenu = () => {
  const { onClose } = useUserMenu() ?? {};
  return (
    <DropdownMenuItem asChild onClick={onClose}>
      <Link to="/sales" className="flex items-center gap-2">
        <User className="size-4" /> Users
      </Link>
    </DropdownMenuItem>
  );
};

const ConfigurationMenu = () => {
  const { onClose } = useUserMenu() ?? {};
  return (
    <DropdownMenuItem asChild onClick={onClose}>
      <Link to="/settings" className="flex items-center gap-2">
        <Settings className="size-4" />
        My info
      </Link>
    </DropdownMenuItem>
  );
};
export default Header;
