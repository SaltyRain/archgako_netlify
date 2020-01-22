import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/map.scss";

class MapTemplate extends Component {
    render () {
        return (
            <div class="maps__block">
                <h4>{this.props.map.city}</h4>
                <img
                 src={this.props.map.imageUrl} 
                 alt={this.props.map.imageAlt} 
                />
            </div>
        )
    }
}

MapTemplate.propTypes = {
    newsBlock: PropTypes.shape ({
        city: PropTypes.string,
        imageUrl: PropTypes.string,
        imageAlt: PropTypes.string,
    }),
};

export default MapTemplate;