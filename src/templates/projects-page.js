import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";

import ProjectTemplate from "./project";
import Layout from "../components/Layout";
import "../styles/projects-page.scss"

export const ProjectsPageTemplate = ({
    title,
    projects = null,
}) => {
    return (
        <article className="projects">
            <div className="container projects__container">
                <h1 className="projects__title visually-hidden">{title}</h1>
                {
                    projects && projects.map((project, index) => (
                        <ProjectTemplate
                        key={index}
                        className="projects__project"
                        project = {project.node.frontmatter}
                        />
                    ))
                }
            </div>
        </article>
    )
}

ProjectsPageTemplate.PropTypes = {
    title: PropTypes.string.isRequired,
    projects: PropTypes.array,
};

const ProjectsPage = ({ data }) => {
    const { markdownRemark: page } = data;
    const {
        frontmatter: {
            seo: { title: seoTitle, description: seoDescription, browserTitle },
        },
    } = page;
    let projects = data.allMarkdownRemark.edges;

    return (
        <Layout footerData = {data.footerData} headerData = {data.headerData}>
            <Helmet>
                <meta name="title" content={seoTitle} />
                <meta name="description" content={seoDescription} />
                <title>{browserTitle}</title>
            </Helmet>
            <ProjectsPageTemplate
                title={page.frontmatter.title}
                projects={projects}
            />
        </Layout>
    );
};

ProjectsPage.PropTypes = {
    data: PropTypes.object.isRequired,
};

export default ProjectsPage;