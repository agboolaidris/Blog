import Image from "next/image";
import React from "react";
import classNames from "classnames";
import { Sub } from "../../helper/types";
import Links from "../shared/Link";
import { useAuthState } from "../../States/Context/Auth";

interface subProps {
  sub: Sub;
  isSubOwner: boolean;
  refInput: any;
  openInput: any;
  handleUpload: any;
}

const BannerComp: React.FC<subProps> = ({
  sub,
  isSubOwner,
  refInput,
  openInput,
  handleUpload,
}) => {
  const { isAuthenticated } = useAuthState();

  return (
    <div className="relative">
      <input type="file" hidden={true} ref={refInput} onChange={handleUpload} />

      <div
        className={classNames("h-16 bg-gray-500 sm:bg-blue-700 sm:h-24", {
          "cursor-pointer": isSubOwner,
        })}
        onClick={() => openInput("banner")}
      >
        {sub.bannerUrl && <img src={sub.bannerUrl} className="w-full h-full" />}
      </div>

      <div className="relative bg-gray-200 ">
        <div className="flex items-center px-3 py-1 sm:h-16 wrapper md:px5">
          {sub.imageUrl && (
            <div
              className={classNames(
                "absolute rounded-full  -top-6 w-14 h-14 bg-gray-700 overflow-hidden",
                {
                  "cursor-pointer   ": isSubOwner,
                }
              )}
              onClick={() => openInput("image")}
            >
              <img src={sub.imageUrl} className="w-full h-full" />
            </div>
          )}
          <div className="ml-20">
            <p className="font-bold text-gray-800 text-md sm:text-xl ">
              {sub.title}
            </p>
            <p className="text-xs text-gray-500">r/{sub.name}</p>
            {isAuthenticated && (
              <Links
                path={`/r/${sub.name}/submit`}
                name="Post"
                style=" sm:hidden block py-1 my-2 text-sm text-center text-white bg-blue-600 rounded cursor-pointer hover:bg-red-500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComp;
