import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.push("/");
      router.back();
    }, 3000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen-90">
      <div className="flex flex-col items-center justify-center bg-gray-300 w-96 h-60">
        <p className="text-xl font-bold text-red-700">Page not found</p>
        <Link href="/">
          <a className="px-1 py-2 mt-2 text-sm text-white bg-red-700 rounded">
            go back to Home Page
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
