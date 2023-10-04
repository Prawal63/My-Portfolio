import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataaars.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <p className="home-about-body">
              I am a <b className="purple">Developer </b> who
              specializes in <b className="purple">frontend</b> development, who
              likes to craft solid and scalable frontend products with great
              user experience.
              <br />
              <br />
               I have skills on {" "}
              <b className="purple">
                Javascript, React.js , Html , Css , C++ , DSA
              </b>{" "}
              and more with ease. I approach my work with a relaxed and natural
              style, always striving for excellence.
              <br />
              <br />
              When I'm not coding, you can find me at the beach&nbsp;
              <i>
                <b className="purple">surfing, Playing videogames or traveling </b> the
                world search of new adventures. Or, if the weather isn't
                cooperating, you might find me curled up on the couch with a
                good book or<b className="purple"> videogame</b> .
              </i>
              <br />
             
              <br />
            
              <a
                href="https://www.npmjs.com/package/tiger-router"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black", textDecoration: "none" }}
                className="purple"
              >
                
              </a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Prawal63"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prawal-singh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
