import React from "react";

import ProjectInfo from "../components/ProjectInfo";

function Project(props) {
  return (
    <div
      className="d-inline-block g-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="g-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <ProjectInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
          link1={props.item.link1}
        />
      )}
    </div>
  );
}

export default Project;
