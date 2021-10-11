import React, { useEffect } from "react";
import Head from "next/head";
import SigninForm from "../functions/Auth/Signin";
import Link from "../components/shared/Link";
import { publicRoute } from "../helper/route";

function Signin() {
  publicRoute();
  return (
    <>
      <Head>
        <title>Reddit:signin page</title>
        <meta name="description" content="this is the home age" />
      </Head>
      <div className="flex items-center justify-center min-h-screen-90">
        <div className="w-full p-4 mx-3 bg-gray-200 rounded-md sm:w-1/2 lg:w-1/3">
          <span className="block text-xl text-center text-blue-600">
            Sign In
          </span>
          <span className="block text-center text-red-600">
            By continuing, you agree to our User Agreement and Privacy Policy.
          </span>
          <SigninForm />
          <div className="flex justify-between mt-3">
            <Link
              path="/signin"
              name="forget password"
              style="text-blue-600"
              onClick={null}
              icon=""
            />
            <Link
              path="/signup"
              name="New to reddit? Sign Up"
              style="text-blue-600"
              onClick={null}
              icon=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
