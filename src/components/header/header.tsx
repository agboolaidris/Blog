import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Guest from "./Guest";
import Client from "./Client";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";
import { useAuthState } from "../../States/Context/Auth";

function Nav() {
  const { pathname } = useRouter();
  const notIncludeRoute = ["/signin", "/signup"];
  const routeNotIncluded = notIncludeRoute.includes(pathname);

  const [state, setstate] = useState(false);
  const { isAuthenticated } = useAuthState();

  const handleClick = () => {
    if (state) {
      setstate(false);
    } else {
      setstate(true);
    }
  };

  return (
    <header
      className={classNames(
        "sm:bg-gray-200  bg-gray-700 sticky top-0 z-50 min-h-screen-10  px-1"
      )}
    >
      <nav className="container relative flex items-center justify-between px-2 mx-auto h-screen-10 ">
        {/* logo */}
        <Link href="/">
          <a className="flex items-center">
            <img
              src="data:image/png;base64,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"
              alt=""
              className="w-8 h-8 rounded-full sm:w-10 sm:h-10"
            />
            <span className="ml-1 font-extrabold text-white sm:text-lg sm:text-black">
              Reddit
            </span>
          </a>
        </Link>

        {!routeNotIncluded && <Search />}

        {/* harmburger */}
        <div
          className="z-10 text-3xl text-white harmburger sm:hidden"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={!state ? faBars : faTimes} />
        </div>

        {/* navlink */}
        <ul
          className={classNames(
            "fixed sm:relative w-screen sm:w-auto min-h-screen-40  sm:min-h-0 top-10vh sm:top-0 transition duration-1000 left-0  right-0 transform  sm:transform-none translate-x-0 bg-gray-700 sm:bg-transparent flex flex-col sm:flex-row justify-center ",
            { "-translate-x-full": !state }
          )}
        >
          {isAuthenticated ? (
            <>
              <Client setstate={setstate} />
            </>
          ) : (
            <Guest setstate={setstate} />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
