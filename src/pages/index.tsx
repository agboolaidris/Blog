import React from "react";
import Head from "next/head";
import Feed from "../functions/Home/Feed";
import Sidebar from "../functions/Home/Sidebar";

export default function Home() {
  const content =
    "Reddit is a network of communities based on people's interests. Find communities you're interested in, and become part of an online community!";
  const title = "Reddit:Font page of the Internet";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={content} />
        <meta property="og:description" content={content} />
        <meta property="og:title" content={title} />
        <meta property="twitter:description" content={content} />
        <meta property="twitter:title" content={title} />
      </Head>
      <div className="flex p-3 mx-auto sm:mt-5 sm:p-0 wrapper  ">
        <div className="w-full min-h-150px ">
          <Feed />
        </div>
        <div className="hidden mt-4 ml-3 sm:block sm:w-96 ">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
