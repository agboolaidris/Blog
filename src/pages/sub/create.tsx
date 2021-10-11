import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";
import SubForm from "../../functions/Sub/SubForm";

function CreateSub() {
  return (
    <div className="px-2 mt-2 wrapper">
      <div className="w-full p-1 mx-auto bg-gray-100 lg:w-2/3">
        <div>
          <p className="mb-2 text-gray-500">Create a Community</p>
          <hr />
        </div>
        <SubForm />
      </div>
    </div>
  );
}

export default CreateSub;

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
