import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { User } from "../models/user";
import { NavBarLogInView } from "./navbarloginview";
import { NavBarLogOutView } from "./navbarlogoutview";

interface NavBarProps {
  loggedInUser: User | null;
  onSignUpClicked: () => void;
  onLoginClicked: () => void;
  onLogoutSuccessful: () => void;
}

export const NavBar = ({
  loggedInUser,
  onSignUpClicked,
  onLoginClicked,
  onLogoutSuccessful,
}: NavBarProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-green-600 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="/"
          >
            Customer Service Portal
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={"lg:flex flex-grow" + (navbarOpen ? " flex" : " hidden")}
        >
          {loggedInUser ? (
            <NavBarLogInView
              user={loggedInUser}
              onLogoutSuccessful={onLogoutSuccessful}
            />
          ) : (
            <NavBarLogOutView
              onLoginClicked={onLoginClicked}
              onSignUpClicked={onSignUpClicked}
            />
          )}
        </div>
      </div>
    </nav>
  );
};
