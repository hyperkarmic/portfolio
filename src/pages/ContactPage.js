import React from "react";

import Hero from "../components/Hero";

import CarouselContact from "../components/CarouselContact";

function ContactPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <CarouselContact />
    </div>
  );
}

export default ContactPage;
