import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/newsBlock.scss";

class NewsBlockTemplate extends Component {
    render () {
        return (
            <div className="news-block">
                <a href={this.props.newsBlock.url}>
                    <div className = "news-block__hover">
                        <h3 className="news-block__title">{this.props.newsBlock.title}</h3>
                    </div>
                    <img className="news-block__photo"
                    src={this.props.newsBlock.imageUrl} 
                    alt={this.props.newsBlock.imageAlt} 
                    />
                </a>
            </div>
        )
    }
}

NewsBlockTemplate.propTypes = {
    newsBlock: PropTypes.shape ({
        url: PropTypes.string,
        title: PropTypes.string,
        imageUrl: PropTypes.string,
        imageAlt: PropTypes.string,
    }),
};

export default NewsBlockTemplate;