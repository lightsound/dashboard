/* eslint-disable @next/next/no-img-element */
import { Nav } from "./Nav";
import { AsideProfile } from "./AsideProfile";
import { FC } from "react";

export const MenuBar: FC = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-gray-800">
      <div className="flex h-0 flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <div className="mt-5 flex-1">
          <Nav />
        </div>
      </div>

      <div className="flex flex-shrink-0 bg-gray-700 p-4">
        <a href="#" className="group block w-full flex-shrink-0">
          <AsideProfile />
        </a>
      </div>
    </div>
  );
};
