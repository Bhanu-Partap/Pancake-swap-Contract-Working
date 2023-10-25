import React from "react";
import { Col, Row } from "react-bootstrap";
import { FcSettings } from "react-icons/fc";

export default function Homepage() {
  return (
    <>
      <section id="home">
        <Row className="row row-1">
          <Col className='col col-1' >
            <Row className='mainrow'>
              <h3>Swap</h3>
              <h3>Buy</h3>
              <p><FcSettings/></p>
            </Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
          </Col>
        </Row>
      </section>
    </>
  );
}
