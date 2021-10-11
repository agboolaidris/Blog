import React, { useEffect } from "react";
import useSWR from "swr";

import SideBarComp from "../../components/Home/Sidebar";

function Sidebar() {
  const { data: topSub } = useSWR("/sub/");

  return <>{topSub && <SideBarComp topSub={topSub} />}</>;
}

export default Sidebar;
