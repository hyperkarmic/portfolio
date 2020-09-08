import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <h1>Je me présente...</h1>
        <p>
          I’m originally from Stockport, and reside in North Manchester a mile
          from the city, because I love urban spaces, and the suburbs bore me!
        </p>

        <p>
          I will be shortly completing a ‘Full Stack Development Coding
          Bootcamp” at Manchester University. This is a ‘full immersion’
          learning environment. In the first phase I gained a practical
          understanding of Javascript, HTML 5, CSS and ‘Bootstrap. In the second
          phase I’ve been learning about the nodeJS eco-system, Express,
          templating engines, relational databases (SQL) and the technologies
          used to manipulate them (Sequelize).
        </p>

        <p>
          I have consolidated my knowledge, in the form of practical projects,
          and am now using my knowledge to build full stack applications. I am
          presently learning about non-relational databases (MongoDB) and REACT
          and will be using them, along with other core technologies, during the
          completion of my final bootcamp project.
        </p>

        <p>
          I am looking forward to using my coding skills in a professional
          environment in the near future. I am presently engaging in the job
          search to allow me to do this as soon as possible!
        </p>
        <p>
          My{" "}
          <a href="https://docs.google.com/document/d/1cwLg6QSnAdyWBL6xD1JkrPwEk77v7cA9eA_vtb9xyEk/edit">
            resume
          </a>{" "}
          is available for anyone who wants to know more!
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
