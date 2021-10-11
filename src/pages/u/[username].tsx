import dayjs from "dayjs";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import UserFunc from "../../functions/User";

function User() {
  const router = useRouter();
  const query = router.query.username;
  const { data: user, error } = useSWR(query ? `/user/${query}` : null);
  if (error) router.push("/");

  return (
    <>
      <Head>{user && user.user && <title>{user.user.username}</title>}</Head>
      <div className="flex flex-col-reverse p-2 wrapper sm:flex-row ">
        {user && user.user && user.submission && (
          <UserFunc user={user.user} submission={user.submission} />
        )}
        {user && user.user && (
          <div>
            <div className="w-full mt-2 overflow-hidden bg-gray-100 rounded sm:w-72">
              <div className="flex justify-center w-full py-1 bg-blue-800">
                <img
                  src="data:image/png;base64,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"
                  width="30"
                  height="30"
                  className="rounded-full cursor-pointer "
                />
              </div>
              <div className="px-2 my-2 text-sm text-center text-gray-500">
                <h2 className="my-1 font-extrabold">{user.user.username}</h2>
                <hr />
                <p className="mt-1">
                  joined at{"  "}{" "}
                  {dayjs(user.user.createdAt).format("MMM YYYY")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default User;
