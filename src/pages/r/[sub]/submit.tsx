import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

import CreatePostForm from "../../../functions/Post/CreatePost";
import Sidebar from "../../../components/shared/Sidebar";
import { Sub } from "../../../helper/types";
import { useAuthState } from "../../../States/Context/Auth";
import { GetServerSideProps } from "next";
import axios from "axios";

function CreatePost() {
  const router = useRouter();
  const query = router.query.sub;
  const { isAuthenticated } = useAuthState();

  const { data: sub, error } = useSWR<Sub>(query ? `/sub/${query}` : null);
  if (error) router.push("/");

  return (
    <>
      <Head>
        <title>{sub && sub.name}</title>
      </Head>
      <div className="flex p-3 bg-gray-200 rounded sm:mt-2 wrapper">
        <div className="w-full">
          <CreatePostForm sub={sub} />
        </div>
        <div className="hidden sm:w-64 sm:block">
          <Sidebar sub={sub} isAuthenticated={isAuthenticated} />
        </div>
      </div>
    </>
  );
}

export default CreatePost;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const cookie = req.headers.cookie;
    console.log(cookie);
    if (!cookie) throw new Error("redirect");
    await axios.get("/auth/me", { headers: { cookie } });

    return { props: {} };
  } catch (error) {
    res.writeHead(307, { location: "/signin" }).end();
  }
};
