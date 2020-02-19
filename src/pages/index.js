import React from "react";
// import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Link } from "gatsby";
// import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
// import HTMLContent from "../components/Content";
import "../styles/home.scss";
import { Footer } from "../components/Footer/"

import NewsBlockTemplate from "../templates/news-block"


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
                    <div className="col-12 col-lg-8 order-lg-first">
                    <h2 className="about__title section__title">{home.about.aboutHeading}</h2>
                        <div className="about__description">
                            
                            <p className="about__p">{home.about.paragraph1}</p>
                            {/* <span className="about__founders">{home.about.founders}</span> */}
                            <h3 className="about__founders">Основатели студии</h3>
                            <ul >
                                <li className="about__founder-text">
                                Ксения - окончила Санкт-Петербургский Государственный Архитектурно-строительный университет по специальности АРХИТЕКТОР. Повышала квалификацию в Школе Дизайна "ДЕТАЛИ" по специальности КОЛОРИСТ-ДЕКОРАТОР. Профессионально работает с цветом и прекрасно подбирает самые интересные сочетания, подходящие именно для Вас. Вы можете быть уверены, что Ваши объекты в надежных руках и под чутким руководством, так как еще в студенческие годы Ксения запустила проект студенческих воркшопов, объединяющих молодых специалистов со всей России, который сейчас активно развивается в коллаборациях с различными градостроительными проектами в городах России. А затем прошла профессиональное обучение в SETTERS как руководитель проектов.
                                </li>
                                <li className="about__founder-text">
                                Ангелина - окончила Санкт-Петербургский Государственный Архитектурно-строительный университет по специальности АРХИТЕКТОР. Получила образование ДИЗАЙНЕРА ИНТЕРЬЕРА в Международной школе дизайна в Санкт-Петербурге. Обучалась в Миланском Политехническом университете на специальности АРХИТЕКТОР-УРБАНИСТ. Отлично владеет инженерией и объёмностей-пространственной композицией. Разбирается в технических и физических свойства материалов и всегда подбирает качественные и долгосрочные материалы для проектов. В данный момент активно работает над развитием европейских проектов. Совместно с Ксенией повышала квалификацию в лондонской Архитектурной Ассоциации в области параметрического дизайна, современных технологий и робототехники, которые так активно используются во всех отраслях проектирования и строительства, в том числе в дизайне внутренних пространств.
                                </li>
                            </ul>

                            {/* <p className="about__p">{home.about.paragraph2}</p> */}
                            <p className="about__p">{home.about.paragraph3}</p>
                            
                        </div>
                    </div>
                    <div className="col-12 order-first col-lg-4 align-self-center">
                        <div className="about__photo">
                            <img
                                src={home.about.ourPhoto}
                                alt={home.about.ourPhotoAlt}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col">
                        <span className="about__sign">{home.about.sign}</span> 
                        </div>
                    </div>
            </section>

            <section className="news" id="news">
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

            <section className="cities" id="contacts">
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
        const {
            data: { headerData, footerData },
        } = this.props;
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
        <Layout headerData = {headerData} footerData = {footerData}>
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

          ...LayoutFragment
          
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


// import React from "react";
// import "../styles/temporary-index.scss";

// export default () => (
//     <div className="container">
//       <h1>Home</h1>
//       <p>Page is not ready yet!</p>

//     </div>


//   )





// import React from "react";
// import "../styles/temporary-index.scss";

// export default () => (
//     <div className="container">
//       <h1>ARCHGAKO</h1>
//       <span className= "container__sign">architectural and design company</span>
      
//       <h2>Contact</h2>
//       <div className="block">
//         <span>ARCHGAKO</span>
//         <span> Moscow | St. Petersburg | Milan </span>
//       </div>

//       <div className="block">
//         <a href="mailto:archgako@gmail.com">archgako@gmail.com</a>
//         <a href="tel:+79111620482">+7 (911) 162 04 82</a>
//         <a href="tel:+79216361451">+7 (921) 636 14 51</a>
//         <a href="tel:+393668202223">+39 366 8202 223</a>
//       </div>

//         <div className="block">
//             <a href="https://www.instagram.com/archgako/">Instagram</a>
//             <a href="https://www.facebook.com/archgako/">Facebook</a>
//         </div>


//       <h2>Coming soon</h2>

//     </div>


//   )