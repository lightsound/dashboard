/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

export const AsideProfile: FC = () => {
  return (
    <div className="flex items-center">
      <div>
        <img
          className="inline-block h-10 w-10 rounded-full sm:h-9 sm:w-9"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="ml-3">
        <p className="text-base font-medium text-white sm:text-sm">Tom Cook</p>
        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300 sm:text-xs">
          View profile
        </p>
      </div>
    </div>
  );
};
