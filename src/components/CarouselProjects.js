import React from "react";

import Project from "../components/Project";

import lyricube from "../assets/images/lyricube.png";
import employeetracker from "../assets/images/employeetracker.png";
import mealjoy from "../assets/images/mealjoy.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class CarouselProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,

          title: "Lyricube",
          subTitle: "An app for searching info and music off lyrics",
          imgSrc: lyricube,
          link: "https://github.com/Nuelthesupreme/lyricworks",
          link1: "https://nuelthesupreme.github.io/lyricworks/index.html",

          selected: false,
        },
        {
          id: 1,
          title: "Employee tracker",
          subTitle:
            "An app for tracking various forms employee category information",
          imgSrc: employeetracker,
          link: "https://github.com/hyperkarmic/w12-employee-tracker",
          link1:
            "https://drive.google.com/file/d/1reJwQhyHKoL9fYYeTQeiI0EFS_utcQds/view?usp=sharing",

          selected: false,
        },
        {
          id: 2,
          title: "Meal Joy",
          subTitle: "An application for finding and storing recipes",
          imgSrc: mealjoy,
          link: "https://github.com/hyperkarmic/Meal-Joy",
          link1: "https://immense-hamlet-67056.herokuapp.com/",

          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Project
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default CarouselProjects;
