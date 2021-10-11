import React from "react";
import Link from "../shared/Link";

function Guest({ setstate }) {
  return (
    <>
      <Link
        icon={null}
        path="/signin"
        name="Sign In"
        style="bg-blue-400 hover:bg-blue-500  mt-4 mx-3 sm:mt-0 flex justify-center  sm:ml-4 text-white py-2 rounded-md px-3"
        onClick={() => setstate(false)}
      />
      <Link
        icon={null}
        path="/signup"
        name="Sign Up"
        style="bg-gray-400 hover:bg-gray-500 mt-4 mx-3 sm:mt-0 flex justify-center  sm:ml-4 text-white py-2 rounded-md px-3"
        onClick={() => setstate(false)}
      />
    </>
  );
}

export default Guest;
