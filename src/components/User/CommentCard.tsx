import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Comment } from "../../helper/types";
import Links from "../shared/Link";

function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="flex mt-2 bg-gray-100 rounded">
      <div className="px-2 pt-2 text-gray-600 bg-gray-200 ">
        <FontAwesomeIcon icon={faCommentAlt} />
      </div>
      <div className="w-full p-2 ">
        <p className="flex flex-wrap text-xs text-gray-500 ">
          <span className="text-blue-500 cursor-pointer">
            {comment.username}{" "}
          </span>
          <span className="mx-1">commented on </span>
          <Links
            name={comment.post.title}
            path={comment.post.url}
            style="text-red-300 text-semibold"
          />

          <Links
            name={`.r/${comment.post.subName}`}
            path={`/r/${comment.post.subName}`}
            style="ml-2"
          />
        </p>
        <hr className="my-1" />
        <p className="text-sm text-gray-600">{comment.body}</p>
      </div>
    </div>
  );
}

export default CommentCard;
