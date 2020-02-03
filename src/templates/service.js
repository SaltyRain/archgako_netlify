import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/service.scss";

class ServiceTemplate extends Component {
    render () {
        return (
            <section className="service">
                <div className="row">
                    <div className="col-12 col-6">
                        <h3 className="service__title">{this.props.service.title}</h3>
                        <button className="service__mail-button" type="button"></button>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="service__smalltext">
                        <span className="service__smalltext_black">сроки выполнения</span>
                        <span className="service__smalltext_white">{this.props.service.deadlines}</span>
                        <span className="service__smalltext_black">что включает</span>


                    </div>
                    <div className="service__bigtext">
                        <span 
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