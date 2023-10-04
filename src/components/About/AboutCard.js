import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Prawal Singh Baghel </span>
            originally from 
            <span className="purple"> Ghaziabad, </span>

            <span className="purple"> uttar pradesh </span>.
            <br />
            <br />
            When I'm not busy scribbling code, I like to keep things interesting
            by Travelling, gaming like there's no tomorrow and love to listen music and watch netflix.
          
          </p>
          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            More about <strong className="purple">me </strong> 👀
          </h3>
          <p style={{ textAlign: "justify" }}>
            My
            <span className="purple"> educational</span> background is 
            <span className="purple"> B.Tech</span>  in computer science engineering at Rajiv Gandhi University of Knowledge Technologies-Andhra Pradesh.
            I found myself drawn to technology and coding.
            <span className="purple"></span>.
            After graduate, I have gained half an year of experience in 
            <span className="purple"> front end developer. </span>
            
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
