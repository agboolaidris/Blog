import React from "react";
import Card from "../../components/shared/Card";
import CommentCard from "../../components/User/CommentCard";

function User({ submission, user }) {
  return (
    <>
      <div className="w-full sm:mx-2">
        {submission.map((e, index) => {
          if (e.type === "post") {
            return <Card post={e} key={index} />;
          } else {
            return <CommentCard comment={e} key={index} />;
          }
        })}
      </div>
    </>
  );
}

export default User;
