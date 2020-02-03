import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/service.scss";

class ServiceTemplate extends Component {
    render () {
        return (
            <section className="project">
                <div className="row no-gutters">
                    <div className="col">
                        <img className="project__render"
                            src={this.props.project.render.renderImage}
                            alt= {this.props.project.render.renderAlt}
                        />
                    </div>
                </div>

                <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="project__description">
                            <h2 className="project__title">{this.props.project.title}</h2>
                            <span className="project__year">{this.props.project.year} год</span>
                            <p className="project__p">{this.props.project.description}</p>
                        </div>
                    </div>


                    <div className="col-12 col-md-6">
                        <img className="project__scheme"
                            src={this.props.project.scheme.schemeImage}
                            alt= {this.props.project.scheme.schemeAlt}
                        />
                    </div>

                </div>
                
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

export default ServiceTemplate;