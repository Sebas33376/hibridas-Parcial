import { SessionProvider } from "../context/SessionContext.jsx";
import NavBar from "./NavBar.jsx";

const Layout = ({ children, ...rest }) => {
  return (
    <SessionProvider>
      <div {...rest}>
        <NavBar/>
        {children}
      </div>
    </SessionProvider>
  );
};

export default Layout;
