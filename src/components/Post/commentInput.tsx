import React from "react";
import { User } from "../../helper/types";
import classNames from "classnames";

function CommentInput({
  user,
  comment,
  setcomment,
  handleSubmit,
}: {
  user: User;
  comment: string;
  setcomment: any;
  handleSubmit: (e: any) => void;
}) {
  return (
    <div className="mx-4 my-3">
      <p className="mb-1 text-xs text-gray-500">Comment as {user.username}</p>
      <form onSubmit={handleSubmit}>
        <div className="border border-gray-300 rounded focus-within:border-gray-700">
          <textarea
            onChange={(e) => setcomment(e.target.value)}
            value={comment}
            className="block w-full p-1 bg-transparent border-none outline-none focus:text-gray-800 min-h-screen-10"
          ></textarea>
          <div className="flex justify-end p-1 text-xs bg-gray-200">
            <button
              className={classNames(
                "px-3 py-1 text-xs text-white  border-none outline-none cursor-pointer rounded-3xl",
                {
                  "bg-blue-200": comment.trim() === "",
                  "bg-blue-500": !(comment.trim() === ""),
                }
              )}
              disabled={comment.trim() === ""}
            >
              comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentInput;
