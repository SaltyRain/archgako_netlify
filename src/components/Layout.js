import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import "../styles";
// import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// import { render } from "node-sass";

const Layout = ({ children, headerData = null, footerData = null }) => (
  <div>
    <Helmet>
      <html lang="ru" />
      <meta name="keywords" content="architecture, design, архитектурное бюро" />
    </Helmet>
    {/* <Header data = {headerData}/> */}
    <main className="container-fluid">{children}</main>
    {/* <Footer data = {footerData}/> */}
  </div>
);


export default Layout;

// export const pageQuery = graphql `
// query HeaderAndFooterData {
//   headerData: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "header"}}}) {
//     edges {
//       node {
//         frontmatter {
//           menuItems {
//             label
//             linkURL
//           }
//         }
//       }
//     }
//   }

//   footerData: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "footer"}}}) {
//       edges {
//         node {
//           frontmatter {
//             menuItems {
//               label
//               linkURL
//             }
//             socialLinks {
//               label
//               linkURL
//             }
//           }
//         }
//       }
//     }


// }
// `
