import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";


import ServiceTemplate from "./service";
import Layout from "../components/Layout";
import "../styles/services-page.scss"

export const ServicesPageTemplate = ({
    title,
    services = null,
}) => {
    return (
        <article className="services">
            <h1 className="services__title">{title}</h1>
            <div className="row">
            {
                services && services.map((service, index) => (
                    <ServiceTemplate
                    key = {index}
                    service = {service.node.frontmatter}
                    />
                ))
            }
            </div>


        </article>



    )
};

const ServicesPage = ({ data }) => {
    const { markdownRemark: page } = data;
    const {
        frontmatter: {
            seo: { title: seoTitle, description: seoDescription, browserTitle },
        },
    } = page;
    let services = data.allMarkdownRemark.edges;
    return (
        <Layout headerData = {data.headerData} footerData = {data.footerData}>
            <Helmet>
                <meta name="title" content={seoTitle} />
                <meta name="description" content={seoDescription} />
                <title>{browserTitle}</title>
            </Helmet>
            <ServicesPageTemplate
                title={page.frontmatter.title}
                services = {services}
            />
        </Layout>
    );
};

export default ServicesPage;


export const ServicesQuery = graphql `
query ServicesPage {
  markdownRemark(frontmatter: {templateKey: {eq: "services-page"}}) {
    frontmatter {
        title
        seo {
        browserTitle
        description
        title
        }
    }
  }

  ...LayoutFragment

  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "service"}}}) {
    edges {
      node {
        frontmatter {
          title
          price
          row1
          row2
          row3
          row4
          buttontext
          
        }
      }
    }
  }

}
`

// import React from "react";
// import "../styles/temporary-index.scss";

// export default () => (
//     <div className="container">
//       <h1>Services</h1>
//       <p>Page is not ready yet!</p>

//     </div>


//   )