import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaStar } from "react-icons/fa";
import "../assets/css/home.css";

const Service = (props) => {
  const { data } = props;
  // console.log(data, "data");
  return (
    <div id="services" className="sect-pt4 route">
      <Container>
        <Row>
          <Col sm={12}>
            <Row>
              {data.Service &&
                data.Service.map((s, index) => (
                  <Col md={6} xs={12} key={index} className="mb-4">
                    <div className="text-center">
                      <span className="text-6xl flex justify-center icon-color">
                        {s.icon == "fa FaStar" ? (
                          <FaStar />
                        ) : s.icon == "fa FaPlus" ? (
                          <FaPlus />
                        ) : null}

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

        <Row className="text-center">
          <Col md={12}>
            <div className="font-bold text-6xl sect-pt4 pb-3">Our Services</div>
          </Col>

          <Row md={5}>
            {data.ServiceBox &&
              data.ServiceBox.map((s, index) => (
                <Col sm={6} md={4} lg={3} key={index} className="mb-4">
                  <div className="box-container">
                    <img src={s.images} alt={s.images} />
                    <div className="overlay"></div>
                  </div>
                </Col>
              ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
