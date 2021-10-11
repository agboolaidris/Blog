import React from "react";
import classNames from "classnames";
import { Sub } from "../../helper/types";

function PostForm({
  title,
  settitle,
  handleSubmit,
  sub,
  setbody,
  body,
}: {
  title: string;
  settitle: any;
  setbody: any;
  body: string;
  sub: Sub;
  handleSubmit: (e: any) => void;
}) {
  return (
    <form className="w-full px-3 text-sm" onSubmit={handleSubmit}>
      <div className="my-1 text-gray-500">
        Submit a post to{" "}
        <span className="text-blue-600"> r/{sub && sub.name}</span>{" "}
      </div>
      <div className="relative flex w-full h-10 ">
        <input
          placeholder="Text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          multiple
          maxLength={300}
          className="w-full h-full p-2 font-light border border-gray-300 rounded outline-none focus:ring-1 focus:ring-gray-500"
        />
        <span className="absolute bottom-0 text-xs text-gray-500 right-1">
          {title.trim().length}/300
        </span>
      </div>
      <div className="">
        <textarea
          rows={4}
          value={body}
          onChange={(e) => setbody(e.target.value)}
          className="w-full h-32 p-2 mt-2 border border-gray-300 rounded outline-none focus:border-none focus:ring-1 focus:ring-gray-500"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          disabled={title.trim() === ""}
          className={classNames(
            "w-20 py-2 text-sm font-extrabold text-white  rounded cursor-pointer ",
            {
              "bg-blue-400 text-blue-200": title.trim() === "",
              "hover:bg-blue-700 bg-blue-600": !(title.trim() === ""),
            }
          )}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default PostForm;
