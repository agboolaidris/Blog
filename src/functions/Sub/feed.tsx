import React from "react";

import SidebarComp from "../../components/shared/Sidebar";
import { Sub } from "../../helper/types";
import { useAuthState } from "../../States/Context/Auth";
import Card from "../../components/shared/Card";

function Feed({ sub, revalidate }: { sub: Sub; revalidate: Function }) {
  const { isAuthenticated } = useAuthState();
  return (
    <div className="flex flex-col-reverse px-3 sm:flex-row md:px-5 wrapper ">
      <div className="w-full px-1 sm:px-5">
        {sub.posts.map((post, index) => (
          <Card post={post} key={index} revalidate={revalidate} sub={sub} />
        ))}
      </div>

      <div className="hidden mt-3 w-72 sm:block min-h-screen-10">
        <SidebarComp sub={sub} isAuthenticated={isAuthenticated} />
      </div>
    </div>
  );
}

export default Feed;
