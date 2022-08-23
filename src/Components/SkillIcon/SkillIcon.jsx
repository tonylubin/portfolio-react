import React from "react";

const SkillIcon = (props) => {

    let {width, height, viewBox, svgInfo} = props;

    return (
        <svg viewBox={viewBox} width={width} height={height}>
            {svgInfo}
        </svg>
    )
};

export default SkillIcon;