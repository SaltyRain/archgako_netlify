import React, { Component } from "react";
// import PropTypes from "prop-types";
import "../styles/service.scss";

class ServiceTemplate extends Component {
    render () {
        return (
            <div className="col">
                <section className="service">
                    <div className="service__wrapper">
                        <h2 className="service__price">{this.props.service.price} ₽ / м<sup>2</sup> </h2>
                        <span className="service__item">{this.props.service.deadline}</span>
                        <span className="service__item">{this.props.service.row1}</span>
                        <span className="service__item">{this.props.service.row2}</span>
                        <span className="service__item">{this.props.service.row3}</span>
                        <span className="service__item">{this.props.service.row4}</span>
                        <button className="service__button">{this.props.service.buttontext}</button>
                    </div>
                </section>
            </div>

        )
    }
}

// ProjectTemplate.propTypes = {
//     project: PropTypes.shape({
//         title: PropTypes.string,
//         year: PropTypes.string,
//     }),
// };

export default ServiceTemplate;