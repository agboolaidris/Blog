import {
  faArrowLeft,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Sub } from "../../helper/types";

function Search() {
  const [show, setshow] = useState<boolean>(false);
  const [input, setinput] = useState<string>("");
  const [sub, setsub] = useState<Sub[]>([]);
  const [timer, settimer] = useState(null);
  const router = useRouter();

  const goToSub = (subName: string) => {
    router.push(`/r/${subName}`);
    setsub([]);
    setinput("");
    setshow(false);
  };

  const handleSearch = async () => {
    clearTimeout(timer);
    settimer(
      setTimeout(async () => {
        try {
          const { data }: { data: Sub[] } = await axios.get(
            `/sub/search/${input}`
          );
          setsub(data);
        } catch (error) {
          setsub([]);
        }
      }, 500)
    );
  };

  useEffect(() => {
    if (input.trim() === "") {
      setsub([]);
      return;
    }
    handleSearch();
  }, [input]);

  const handleLabel = () => {
    setshow(false);
    setsub([]);
    setinput("");
  };

  return (
    <div className="text-sm ">
      {/* //mobile view design */}
      <span
        className="flex items-center justify-center w-8 h-8 overflow-hidden text-gray-700 bg-white rounded-full sm:hidden"
        onClick={() => setshow(true)}
      >
        <FontAwesomeIcon icon={faSearch} />
      </span>
      {show && (
        <div className="fixed left-0 z-50 w-screen px-1 sm:hidden top-4">
          <div className="flex items-center w-full h-12 text-white bg-gray-500 rounded focus-within:ring-2 focus-within:ring-gray-300">
            <input
              className="w-full h-full px-1 bg-transparent border-none outline-none focus:placeholder-gray-400"
              placeholder="search"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
            <label
              className="px-1 cursor-pointer hover:text-red-500 "
              onClick={handleLabel}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </label>
          </div>
          {sub.length > 0 && (
            <div className="relative w-full mt-1">
              <div className="absolute w-full bg-gray-500 ">
                {sub.map((s, index) => (
                  <div
                    key={index}
                    className="flex p-1 cursor-pointer hover:bg-gray-300"
                    onClick={() => goToSub(s.name)}
                  >
                    <div>
                      <Image
                        src={s.imageUrl}
                        height="35"
                        width="35"
                        className="rounded-full"
                      />
                    </div>

                    <div className="ml-2 text-sm text-gray-200 ">
                      <p className="font-bold ">{s.name}</p>
                      <p className="text-xs ">{s.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* //desktop view */}
      <div className="relative hidden sm:block">
        <div className="flex items-center h-12 min-w-0 bg-gray-100 rounded focus-within:ring-blue-600 focus-within:ring-2 sm:w-80 lg:w-96">
          <input
            className="w-full h-full px-2 placeholder-gray-500 bg-transparent border-none outline-none"
            placeholder="search"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <span
            className="px-2 cursor-pointer hover:text-red-500"
            onClick={handleLabel}
          >
            <FontAwesomeIcon
              icon={!(input.trim() === "") ? faTimes : faSearch}
            />
          </span>
        </div>
        {sub.length > 0 && (
          <div className="absolute w-full py-1 mt-2 bg-gray-100">
            {sub.map((s, index) => (
              <div
                key={index}
                className="flex p-1 cursor-pointer hover:bg-gray-200"
                onClick={() => goToSub(s.name)}
              >
                <div>
                  <Image
                    src={s.imageUrl}
                    height="35"
                    width="35"
                    className="rounded-full"
                  />
                </div>

                <div className="ml-2 text-sm ">
                  <p className="font-bold text-gray-600 ">{s.name}</p>
                  <p className="text-xs text-gray-300 ">{s.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
