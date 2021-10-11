import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Vote from "../../functions/Home/Vote";
import { Comment as CommentType, Post } from "../../helper/types";
import ActionBution from "../shared/ActionButton";
import {
  faCommentDots,
  faSave,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
dayjs.extend(relativeTime);

function Comment({
  post,
  comment,
  revalidate,
}: {
  post: Post;
  comment: CommentType;
  revalidate?: Function;
}) {
  return (
    <div className="flex p-2 mt-2">
      <div className="mr-2">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/avatar.png"
          width="15"
          height="15"
          className="cursor-pointer "
        />
      </div>
      <div className="">
        <div className="flex text-xs text-opacity-50">
          <p>{comment.username}</p>
          <p className="ml-3 text-gray-500">
            {" "}
            {dayjs(comment?.createdAt).fromNow()}
          </p>
        </div>
        <p className="mt-2 text-xs text-gray-600">{comment.body}</p>
        <div className="flex mt-2 text-sm text-gray-600">
          <div className="flex justify-between w-10">
            <Vote
              Uservote={comment.UserVote}
              identifier={post.identifier}
              slug={post.slug}
              voteScore={comment.voteScore}
              commentIdentifier={comment.identifier}
              revalidate={revalidate && revalidate}
            />
          </div>
          <ActionBution
            icon={faCommentDots}
            name="reply"
            href={post.url}
            style="px-2 mx-1 "
          />
          <ActionBution
            icon={faShareAlt}
            name="share"
            href={post.url}
            style="px-2 mx-1 "
          />
          <ActionBution
            icon={faSave}
            name="reply"
            href={post.url}
            style="px-2 mx-1 "
          />
        </div>
      </div>
    </div>
  );
}

export default Comment;
