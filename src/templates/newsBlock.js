import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/newsBlock.scss";

class NewsBlockTemplate extends Component {
    render () {
        return (
            <div className="col-12 col-md-6 news-block">
                <div className="news-block__container">
                    <a href={this.props.newsBlock.link}>
                        <div className = "news-block__hover">
                            <h3 className="news-block__title">{this.props.newsBlock.title}</h3>
                        </div>
                        <img className="news-block__photo"
                        src={this.props.newsBlock.image} 
                        alt={this.props.newsBlock.imageAlt} 
                        />
                    </a>
                </div>
            </div>
        )
    }
}

NewsBlockTemplate.propTypes = {
    newsBlock: PropTypes.shape ({
        url: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        imageAlt: PropTypes.string,
    }),
};

export default NewsBlockTemplate;