import {
  CalendarIcon,
  DocumentDuplicateIcon,
  UsersIcon,
  CogIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

import logo from "../assets/logo.jpg";
import { useState } from "react";
import LandingPage from "./LandingPage";
import Employee from "./Employee";
import Admin from "./Admin";
import Teams from "./Teams";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/landing", icon: HomeIcon, current: true },
  { name: "Edit Personel Info", href: "/Employee", icon: CogIcon, current: false },
  { name: "Manage Teams", href: "/Admin", icon: UsersIcon, current: false },
  {
    name: "Manage Joining Requests",
    href: "#",
    icon: DocumentDuplicateIcon,
    count: "12",
    current: false,
  },
  {
    name: "Request To Join Team",
    href: "/Teams",
    icon: CalendarIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ flag }) {
  const [selectedItem, setSelectedItem] = useState(navigation[0]);
  return (
    <div className="flex">
      <div className="flex grow flex-col gap-y-5  bg-indigo-600 px-6 w-[300px] h-screen sticky top-0 ">
        <div className="flex h-16 shrink-0 items-center gap-5">
          <img
            className="h-8 w-auto rounded-lg"
            src={logo}
            alt="Your Company"
          />
          <p className="text-gray-100 text-lg font-bold">RIF Estim</p>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href}>
                    <button
                      className={`w-full group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
                        selectedItem === item
                          ? "bg-indigo-700 text-white"
                          : "text-indigo-200 hover:text-white hover:bg-indigo-700"
                      }`}
                      onClick={() => setSelectedItem(item)}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-indigo-200 group-hover:text-white",
                          "h-6 w-6 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
              >
                <img
                  className="h-8 w-8 rounded-full bg-indigo-700"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Amine Laabidi</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full">
        {flag === "landing" ? (
          <LandingPage />
        ) : flag === "employee" ? (
          <Employee />
        ) : flag === "admin" ? (
          <Admin />
        ) : flag === "teams" ? (
          <Teams />
        ) : null}
      </div>
    </div>
  );
}
