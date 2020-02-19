import React from "react";
import "./prez.scss";
import Prez  from "../../static/img/RUS_VERSION.pdf"

export default () => (
    <div>
        <object>
            <embed src={Prez} type="application/pdf" internalid="CF20F58DBA8DF072DEA84B61ED1EA252">
            </embed>
        </object>
    </div>
)