import { FC } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

export const Nav: FC = () => {
  const items = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    { name: "Projects", href: "#", icon: FolderIcon, current: false },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    { name: "Documents", href: "#", icon: InboxIcon, current: false },
    { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
  ];

  return (
    <nav className="space-y-1 px-2">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={clsx(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "group flex items-center rounded-md px-2 py-2 text-sm font-medium sm:text-base"
          )}
        >
          <item.icon
            className={clsx(
              item.current
                ? "text-gray-300"
                : "text-gray-400 group-hover:text-gray-300",
              "mr-3 h-6 w-6 flex-shrink-0 sm:mr-4"
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      ))}
    </nav>
  );
};
