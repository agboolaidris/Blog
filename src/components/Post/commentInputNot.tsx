import React from "react";
import Links from "../../components/shared/Link";
function CommentInputNot() {
  return (
    <div className="flex items-center justify-between h-20 px-2 mx-3 my-4 text-sm text-gray-600 border border-gray-400 rounded">
      <p>Log in or sign up to leave a comment</p>
      <div className="flex ">
        <Links
          name="sign in"
          path="/signin"
          style="border border-blue-600 px-4 py-1 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white cursor-white "
        />
        <Links
          name="sign up"
          path="/signup"
          style=" ml-2 px-4 py-1 rounded-full hover:bg-blue-700 bg-blue-500 text-white cursor-white "
        />
      </div>
    </div>
  );
}

export default CommentInputNot;
