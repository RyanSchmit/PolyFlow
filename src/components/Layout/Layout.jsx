import { Fragment } from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex flex-col overflow-hidden h-screen">
        <Header />
        <main className="grow overflow-y-auto">{children}]</main>
      </div>
    </Fragment>
  );
};

export default Layout;
