import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Links from "../shared/Link";

function Sidebar({ topSub }) {
  dayjs.extend(relativeTime);
  return (
    <div className="w-full overflow-hidden bg-gray-200 rounded-t-md">
      <div className="w-full text-center">
        <p className="pt-6 pb-1 text-gray-800">Top Community</p>
      </div>
      <div className="pt-3 pb-2 bg-gray-100">
        {topSub &&
          topSub.map((sub, index) => (
            <div
              className="relative flex items-center pt-1 bg-gray-100 border-b border-gray-500 last:border-0"
              key={index}
            >
              <Link href={`/r/${sub.name}`}>
                <a>
                  <Image
                    src={sub.imageUrl}
                    width={30}
                    height={30}
                    className="overflow-hidden rounded-full cursor-pointer"
                  />
                </a>
              </Link>
              <Link href={`/r/${sub.name}`}>
                <a className="ml-2 text-sm cursor-pointer hover:text-red-500">
                  {sub.name}
                </a>
              </Link>
              <span className="absolute text-xs text-gray-400 right-1">
                {dayjs(sub.createdAt).fromNow()}
              </span>
            </div>
          ))}
        <Links
          name="Create Community"
          path="/sub/create"
          style="bg-blue-500 mx-2 text-center hover:bg-blue-600 cursor-pointer text-white py-2 rounded mt-2"
        />
      </div>
    </div>
  );
}

export default Sidebar;
