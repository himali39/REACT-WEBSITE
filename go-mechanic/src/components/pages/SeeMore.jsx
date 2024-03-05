import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SeeMore = (props) => {
  const { data } = props;
  console.log(data, "data");
  return (
    <>
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <div className="font-bold text-6xl sect-pt4 pb-5">See More</div>
          </Col>
        </Row>
        <Row sm={12} className="pt-5">
          {data &&
            data.map((s, index) => (
              <Col xs={4} key={index} className="mb-4">
                <div className="box-container">
                  <img src={s.images} alt={s.images} />
                  <div className="overlay"></div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default SeeMore;
