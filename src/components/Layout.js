import React from "react";
import Helmet from "react-helmet";
// import { graphql } from "gatsby";

import "../styles";
// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
// import { render } from "node-sass";

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <html lang="ru" />
      <meta name="keywords" content="architecture, design, архитектурное бюро" />
    </Helmet>
    {/* <Header data = {headerData}/> */}
    <main className="container-fluid">{children}</main>
    {/* <Footer/> */}
  </div>
);


export default Layout;

// export default ({ children }) => (
//     <div>
//     <Helmet>
//       <html lang="ru" />
//       <meta name="keywords" content="architecture, design, архитектурное бюро" />
//     </Helmet>
//     {/* <Header data = {headerData}/> */}
//     <main>{children}</main>
//     <Footer/>
//   </div>
// );
