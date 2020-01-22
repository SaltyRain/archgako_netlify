import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout"
import HTMLContent from "../components/Content";
import "../styles/home.scss"

import NewsBlockTemplate from "../templates/newsBlock"
import MapTemplate from "../templates/map"


export const HomePageTemplate = ({ home, news = null, maps = null }) => {
    return (
        <>
            <section className="banner section">
                <h1>{home.archgakoLogo}<span className="banner__sign">{home.archgakoSign}</span></h1>
                <button className="banner__button-scrolldown" type="button"></button>
            </section>
            
            <section className="about section">
                <div className="about__description">
                    <p className="about__p">{home.about.paragraph1}</p>
                    <p className="about__p">{home.about.paragraph2}</p>
                    <p className="about__p_uppercase">{home.about.paragraph3}</p>
                    <span className="about-us__sign">{home.about.sign}</span> 
                </div>
                <div className="about__photo">
                    <img
                        src={home.about.ourPhoto}
                        alt={home.about.ourPhotoAlt}
                    />
                </div>
            </section>

            <section className="news section">
                <h2 className="news__title section__title">{home.newsHeading}</h2>
                {
                    news && news.map((newsBlock, index) => (
                        <NewsBlockTemplate
                            key = {index}
                            className = "news__newsBlock"
                            newsBlock = {newsBlock.node.frontmatter}
                        />
                    ))
                }
            </section>

            <section className="maps section">
                {
                    maps && maps.map((map, index) => (
                        <MapTemplate
                            key = {index}
                            className = "maps__Map"
                            map = {map.node.frontmatter}
                        />
                    ))
                }
            </section>
        </>
    );
};

class HomePage extends React.Component {
    render() {
        const { data } = this.props;
        // const {
        //     data: { footerData, headerData },
        // } = this.props;
        const { frontmatter: home } = data.homePageData.edges[0].node;
        const {
            seo: { title: seoTitle, description: seoDescription, browserTitle },
          } = home;

        let news = data.allMarkdownRemark.edges;
        let maps = data.allMarkdownRemark.edges;

        // news = news.node.frontmatter;
        // maps = maps.node.frontmatter;

        news = news.filter(newsBlock => {
            return newsBlock;
        });

        maps = maps.filter(map => {
            return map;
        })



    return (
        <Layout>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate 
        home={home} 
        news = {news}
        maps = {maps}
        />
        </Layout>

    )
    };
};

export default HomePage;