import React from "react";
import PropTypes from "prop-types";

import  ProjectTemplate from "../../templates/project";

const ProjectPreview = ({ entry }) => {
    const project = entry.getIn(["data"]).toJS();
    return <ProjectTemplate project = {{ ...project }} />;
}

ProjectPreview.propTypes = {
    entry: PropTypes.shape ({
        getIn: PropTypes.func,
    }),
};

export default ProjectPreview;