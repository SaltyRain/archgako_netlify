import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/project.scss";

class ProjectTemplate extends Component {
    render () {
        return (
            <section className="project">
                <img className="project__render"
                    src={this.props.project.renderUrl}
                    src= {this.props.project.renderAlt}
                />
                <div className="project__description">
                    <h2 className="project__title">{this.props.project.title}</h2>
                    <span className="project__year">{this.props.project.year}</span>
                    <p className="project__p">{this.props.project.description}</p>
                </div>
                <img className="project__scheme"
                    src={this.props.project.schemeUrl}
                    src= {this.props.project.schemeAlt}
                />
            </section>
        )
    }
}

ProjectTemplate.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string,
        year: PropTypes.string,
    }),
};

export default ProjectTemplate;