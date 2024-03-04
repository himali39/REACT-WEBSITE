import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaStar } from "react-icons/fa";

const Service = (props) => {
  const { data } = props;
  console.log(data, "data");
  return (
    <div id="services" className="sect-pt4 route">
      <Container>
        <Row>
          <Col sm={12}>
            <Row>
              {data.map((s, index) => (
                <Col md={6} key={index}>
                  <div className="text-center">
                    <span className="text-6xl flex justify-center icon-color">
                      {/* {service.icon == "fa FaStar" ? (
                        <FaStar />
                      ) : service.icon == "fa FaPlus" ? (
                        <FaPlus />
                      ) : null} */}
                      <i className="">{s.icon}</i>
                      <span className="text-black font-bold ms-3">
                        {s.numbers}
                      </span>
                    </span>
                    <p className="pt-4 font-bold">{s.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
