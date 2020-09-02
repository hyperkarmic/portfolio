import React from "react";
import { useSpring, animated } from "react-spring";

function ProjectHomeInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return <animated.div className="g-card-info" style={style}></animated.div>;
}

export default ProjectHomeInfo;
