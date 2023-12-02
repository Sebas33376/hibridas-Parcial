import React from "react";
import { SessionProvider } from "../context/SessionContext.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./footer";

const Layout = ({ children, url, ...rest }) => {
  return (
    <SessionProvider>
      <div {...rest}>
        <NavBar url={url} />
        {children}
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default Layout;
