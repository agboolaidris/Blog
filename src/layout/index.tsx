import React from "react";
import Header from "../components/header/header";
function Layout({ children }) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
