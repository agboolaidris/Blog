import { useRouter } from "next/router";
import React, { useState } from "react";
import PostForm from "../../components/Post/PostForm";
import { Sub } from "../../helper/types";
import { createPost } from "../../States/Api/post";

function CreatePost({ sub }: { sub: Sub }) {
  const router = useRouter();
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost({ title, body, sub: sub.name }, router);
  };

  return (
    <>
      <PostForm
        title={title}
        settitle={settitle}
        handleSubmit={handleSubmit}
        body={body}
        setbody={setbody}
        sub={sub}
      />
    </>
  );
}

export default CreatePost;
