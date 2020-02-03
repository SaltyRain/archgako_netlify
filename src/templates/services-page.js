// import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import Helmet from "react-helmet";

// import ServiceTemplate from "./Service";
// import Layout from "../components/Layout";
// // import "../styles/projects-page.scss"

// export const ServicesPageTemplate = ({
//     title
// }) => {
//     return (
//         <article className="services">
//             <h1 className="visually-hidden">{title}</h1>
//             {
//                 services && services.map((service, index) => (
//                     <ServiceTemplate
//                     key = {index}
//                     className=""
//                     service = {service.node.frontmatter}
//                     />
//                 ))
//             }
//         </article>


//     )
// };

// const ServicesPage = ({ data }) => {
//     // ...
//     const {
//         frontmatter: {
//             seo: { title: seoTitle, description: seoDescription, browserTitle },
//         },
//     } = page;
//     let services = data.allMarkdownRemark.edges;
//     return (
//         <Layout headerData = {data.headerData} footerData = {data.footerData}>
//             <Helmet>
//                 <meta name="title" content={seoTitle} />
//                 <meta name="description" content={seoDescription} />
//                 <title>{browserTitle}</title>
//             </Helmet>
//             <ServicesPageTemplate
//                 title={pageXOffset.frontmatter.title}
//                 services = {services}
//             />
//         </Layout>
//     );
// };

// export default ServicesPage;