import { SessionProvider } from "../context/SessionContext.jsx";
import NavBar from "./NavBar.jsx";

const Layout = ({ children, url , ...rest }) => {
  return (
    <SessionProvider>
      <div {...rest}>
        <NavBar url={url}/>
        {children}
      </div>
    </SessionProvider>
  );
};

export default Layout;