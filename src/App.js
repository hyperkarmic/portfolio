import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Simon Myers",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "Changing my life - one concept...",
        subTitle: "One line of code...",
        text: "One day at a time...",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Want to know more...?",
        subTitle: "Just click on the images below",
      },
      projects: {
        title: "Some Projects",
        subTitle: "Just click on the images below",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Simon Myers</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => (
              <ContactPage
                title={this.state.contact.title}
                subTitle={this.state.projects.subTitle}
              />
            )}
          />
          <Route
            path="/projects"
            render={() => (
              <ProjectPage
                title={this.state.projects.title}
                subTitle={this.state.projects.subTitle}
              />
            )}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
