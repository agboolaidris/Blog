import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import Card from "../../components/Post/Card";
import { Post as PostType, Comment } from "../../helper/types";
import CommentComp from "../../components/Post/Comment";
import { useAuthState } from "../../States/Context/Auth";
import PostComment from "./PostComment";

function Post({
  post,
  comments,
  revalidate,
}: {
  post: PostType;
  comments: Comment[];
  revalidate?: Function;
}) {
  const { isAuthenticated } = useAuthState();
  return (
    <div className="flex flex-col-reverse px-2 sm:flex-row wrapper ">
      <div className="w-full mt-2 bg-gray-100 min-h-screen-20">
        {post && <Card post={post} revalidate={revalidate && revalidate} />}

        <PostComment post={post} revalidate={revalidate && revalidate} />
        <hr />

        {post &&
          comments &&
          comments.map((comment, index) => (
            <CommentComp
              comment={comment}
              key={index}
              post={post}
              revalidate={revalidate && revalidate}
            />
          ))}
      </div>
      <div className="hidden mt-2 ml-2 sm:block w-72">
        {post && <Sidebar sub={post.sub} isAuthenticated={isAuthenticated} />}
      </div>
    </div>
  );
}

export default Post;
