import React from "react";

import Hero from "../components/Hero";
import CarouselProjects from "../components/CarouselProjects";
import CarouselProjects2 from "../components/CarouselProjects2";

function ProjectPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <CarouselProjects />
      <CarouselProjects2 />
    </div>
  );
}

export default ProjectPage;
