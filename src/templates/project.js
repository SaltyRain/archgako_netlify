import React from "react";
import PropTypes from "prop-types";
import "../styles/project.scss";

const numbers = [1, 2, 3, 4, 5];

function ProjectTemplate(props) {
        // const emplication = props.emplication;
        return (
            <section className="project">
                <div className="row no-gutters">
                    <div className="col">
                        <img className="project__render"
                            src={props.project.render.renderImage}
                            alt= {props.project.render.renderAlt}
                        />
                    </div>
                </div>

                <div className="row justify-content-around align-items-center">
                    <div className="col-12 col-md-5">
                        <div className="project__description">
                            <h2 className="project__title">{props.project.title}</h2>
                            <span className="project__year">{props.project.year} год</span>
                            <p className="project__p">{props.project.description}</p>
                        </div>
                    </div>


                    <div className="col-12 col-md-4">
                        <img className="project__scheme"
                            src={props.project.scheme.schemeImage}
                            alt= {props.project.scheme.schemeAlt}
                        />
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="project__emplication">
                            <span>{props.project.emplicationHeading}</span>
                            {
                                    <ol>
                                        {
                                            props.project.emplication.map(emplicationItem => (
                                                <li key={emplicationItem.emplicationText}>
                                                    <span>{emplicationItem.emplicationText}</span>
                                                </li>
                                            ))
                                        }
                                    </ol>
                            }
                        </div>
                    </div>

                </div>
                
            </section>
        )
    
}



ProjectTemplate.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string,
        year: PropTypes.string,
    }),
};

export default ProjectTemplate;