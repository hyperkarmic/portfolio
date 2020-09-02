import React from "react";

import ProjectCarousel from "../components/ProjectCarousel";

import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import email from "../assets/images/email.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class CarouselContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Github",
          subTitle: "My GitHub Account",
          imgSrc: github,
          link: "https://github.com/hyperkarmic",
          selected: false,
        },
        {
          id: 1,
          title: "LinkedIn",
          subTitle: "My Linked In Account",
          imgSrc: linkedin,
          link: "https://www.linkedin.com/in/simon-myers-8b43bb1a4/",
        },
        {
          id: 2,
          title: "My E-mail and Phone",
          subTitle: "07513703245",
          imgSrc: email,
          link: "mailto:randy_pan@yahoo.com",
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
        <ProjectCarousel
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

export default CarouselContact;
