import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Link } from "gatsby";
// import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
// import HTMLContent from "../components/Content";
import "../styles/home.scss";

import NewsBlockTemplate from "../templates/newsBlock"


export const HomePageTemplate = ({ home, news = null}) => {
    const { cities } = home;
    return (
        <>
            <section className="banner">
                <h1>{home.archgakoLogo}<span className="banner__sign">{home.archgakoSign}</span></h1>
                <Link to="/#about"><button className="banner__button-scrolldown button-reset" type="button"></button></Link>
                
            </section>
            
            <section className="about" id="about">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-first">
                    <h2 className="about__title section__title">{home.about.aboutHeading}</h2>
                        <div className="about__description">
                            
                            <p className="about__p">{home.about.paragraph1}</p>
                            <p className="about__p">{home.about.paragraph2}</p>
                            <p className="about__p about__p_uppercase">{home.about.paragraph3}</p>
                            <span className="about__sign">{home.about.sign}</span> 
                        </div>
                    </div>
                    <div className="col-12 order-first col-md-6 align-self-center">
                        <div className="about__photo">
                            <img
                                src={home.about.ourPhoto}
                                alt={home.about.ourPhotoAlt}
                            />
                        </div>
                    </div>


                </div>
            </section>

            <section className="news">
                <h2 className="news__title section__title">{home.newsHeading}</h2>
                <div className="row">
                {
                    news && news.map((newsBlock, index) => (
                        <NewsBlockTemplate
                            key = {index}
                            className = "news__newsBlock"
                            newsBlock = {newsBlock.node.frontmatter}
                        />
                    ))
                }
                </div>

            </section>

            <section className="cities">
            <h2 className="visually-hidden">Города, в которых мы работаем</h2>
                {
                    cities.length > 0 && (
                        <ul className="row justify-content-center align-items-center">
                            {cities.map(city => (
                                <li key={city.cityName} className="col align-self-center"> 
                                    <img
                                    className="cities__cityMapImage"
                                    src={city.cityMapImage}
                                    alt={city.cityMapAlt}
                                    />
                                    <h4 className="cities__cityName">{city.cityName}</h4>
                                </li>
                            ))}
                        </ul>
                    )
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
        
        // news = news.node.frontmatter;

        news = news.filter(newsBlock => {
            return newsBlock;
        });

        // maps = maps.filter(map => {
        //     return map;
        // })



    return (
        <Layout>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate 
        home= {home} 
        news = {news}
        />
        </Layout>

    )
    };
};

export default HomePage;

export const pageQuery = graphql `
    query homePageQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "news-block"}}}) {
            edges {
              node {
                frontmatter {
                  title
                  image
                  imageAlt
                  link
                }
              }
            }
          }
          
          homePageData: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "home-page"}}}) {
            edges {
              node {
                frontmatter {
                  archgakoLogo
                  archgakoSign
                  about {
                    aboutHeading
                    ourPhoto
                    ourPhotoAlt
                    paragraph1
                    paragraph2
                    paragraph3
                    sign
                  }
                  newsHeading
                  cities {
                    cityName
                    cityMapImage
                    cityMapImageAlt
                  }
                  seo {
                    browserTitle
                    title
                    description
                  }
                }
              }
            }
          }
        }
      
  
  `