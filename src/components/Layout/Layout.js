import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Footer } from "../Footer"

const TemplateWrapper = ({footerData = null, children}) => (
    <div>
        <Helmet>
            <html lang="ru" />
            <meta name="keywords" content="architecture studio, architecture company, interior design, дизайн интерьера, архитектурное бюро, архитектурная студия, архитектурное бюро Санкт-Петербург, архитектурное бюро Москва, архитектурное бюро Милан" />
        </Helmet>
        <main>{children}</main>
        <Footer data = {footerData}/>
    </div>
  );

export default TemplateWrapper;