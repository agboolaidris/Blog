import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter, NextRouter } from "next/router";
import useSWR from "swr";

import Banner from "../../../../components/Post/banner";
import PostPage from "../../../../functions/Post/Post";

import { PostComment } from "../../../../helper/types";

function Post() {
  const router: NextRouter = useRouter();
  const [description, setdescription] = useState("");

  const { slug, identifier, sub } = router.query;

  const { data: postComment, error, revalidate } = useSWR<PostComment>(
    slug && identifier ? `/post/${identifier}/${slug}` : null
  );

  useEffect(() => {
    if (!postComment) return;
    let desc = postComment.post.title || postComment.post.body;
    desc = desc.substring(0, 157).concat("...");
    setdescription(desc);
  }, [postComment]);

  if (error) return router.push("/");

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta
          property="twitter:title"
          content={postComment && postComment.post && postComment.post.title}
        />
        <meta property="twitter:description" content={description} />
        <meta
          property="og:title"
          content={postComment && postComment.post && postComment.post.title}
        />
        <meta property="og:description" content={description} />
        <title>
          {postComment && postComment.post && postComment.post.title}
        </title>
      </Head>
      <div>
        {postComment && <Banner sub={postComment.post.sub} />}

        {postComment && (
          <PostPage
            comments={postComment.comments}
            post={postComment.post}
            revalidate={revalidate}
          />
        )}
      </div>
    </>
  );
}

export default Post;
