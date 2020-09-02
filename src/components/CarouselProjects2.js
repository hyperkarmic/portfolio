import React from "react";

import Project from "../components/Project";

import employeedirectory from "../assets/images/employeedirectory.png";
import refactor from "../assets/images/refactor.png";
import covid from "../assets/images/covid.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class CarouselProjects2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Employee directory",
          subTitle:
            "An appliation for finding employees and sorting them by criteria",
          imgSrc: employeedirectory,
          link: "https://github.com/hyperkarmic/react-employee-directory",
          link1: "https://stark-temple-63683.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "Code Refactor",
          subTitle: "An analysis of some authentication code",
          imgSrc: refactor,
          link:
            "https://app.gitbook.com/@randy-pan/s/refactoring-code-homework-week-14/",
          link1:
            "https://app.gitbook.com/@randy-pan/s/refactoring-code-homework-week-14/",

          selected: true,
        },
        {
          id: 2,
          title: "Covid Comaprison",
          subTitle: "Comparing Covid Cases By District",
          imgSrc: covid,
          link: "https://github.com/hyperkarmic/project3",
          link1: "https://github.com/hyperkarmic/project3",

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

export default CarouselProjects2;
