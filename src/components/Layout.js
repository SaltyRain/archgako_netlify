import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import "../styles";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const TemplateWrapper = ({ footerData = null, headerData = null, children }) => (
  <div>
    <Helmet>
      <html lang="ru" />
      <meta name="keywords" content="montreal, javascript, programming, meetup" />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);


export default TemplateWrapper;
