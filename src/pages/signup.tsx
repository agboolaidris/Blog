import React from "react";
import Head from "next/head";

import Link from "../components/shared/Link";
import SignupForm from "../functions/Auth/Signup";
import { publicRoute } from "../helper/route";

function Register() {
  publicRoute();
  return (
    <>
      <Head>
        <title>Reddit:Register page</title>
        <meta name="description" content="this is the home age" />
      </Head>
      <div className="flex items-center justify-center min-h-screen-90 ">
        <div className="w-full p-4 mx-3 bg-gray-200 rounded-md sm:w-1/2 lg:w-1/3">
          <span className="block text-xl text-center text-blue-600">
            Signup as a redditor
          </span>
          <span className="block text-center text-red-600">
            By continuing, you agree to our User Agreement and Privacy Policy.
          </span>

          <SignupForm />

          <Link
            path="/signin"
            name="Already a redditor? LOG IN"
            style="text-blue-600 mt-3"
            onClick={null}
            icon=""
          />
        </div>
      </div>
    </>
  );
}

export default Register;
