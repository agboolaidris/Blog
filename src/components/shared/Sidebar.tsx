import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Sub } from "../../helper/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Sidebar({
  sub,
  isAuthenticated,
}: {
  sub: Sub;
  isAuthenticated: boolean;
}) {
  dayjs.extend(relativeTime);
  return (
    <div className="overflow-hidden bg-gray-200 rounded-t">
      <div className="w-full">
        <p className="p-2 text-white">About Community</p>
      </div>
      {sub && (
        <div className="pt-3 pb-2 bg-gray-100">
          <div className="p-1 text-sm text-gray-600">r/{sub.name}</div>
          <div className="flex p-2">
            <p className="text-sm text-gray-400">
              33.2M
              <br />
              Members
            </p>
            <p className="ml-4 text-sm text-gray-400">
              77.6K
              <br />
              Online
            </p>
          </div>
          <p className="mx-1 border-t">
            <span className="text-sm font-bold text-gray-500">
              <span className="mr-1">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Created
            </span>
            <span className="text-sm text-gray-500">
              {" "}
              {dayjs(sub.createdAt).format("DD MM YYYY")}
            </span>
          </p>
          {isAuthenticated && (
            <Link href={`/r/${sub.name}/submit`}>
              <a className="block py-1 m-2 text-sm text-center text-white bg-blue-600 rounded cursor-pointer hover:bg-red-500">
                Post
              </a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
