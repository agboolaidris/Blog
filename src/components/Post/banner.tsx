import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sub } from "../../helper/types";

function Banner({ sub }: { sub: Sub }) {
  return (
    <Link href={`/r/${sub.name}`}>
      {sub && (
        <a>
          <div className="h-20 bg-gray-500 sm:bg-blue-600 ">
            <div className="flex items-center h-full wrapper ">
              <Image
                src={sub.imageUrl}
                height={50}
                width={50}
                className="overflow-hidden rounded-full"
              />
              <span className="ml-2 text-white">r/{sub.name}</span>
            </div>
          </div>
        </a>
      )}
    </Link>
  );
}

export default Banner;
