import React, { useEffect } from "react";
import bannerImage from "../../assets/images/banner/banner.svg";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../assets/css/home.css";
import Button from "../comman/Button";
import { Navigate } from "react-router-dom";

const Home = () => {
  const handleLogin = () => {
    <Navigate to="/login" />;
    console.log("okay");
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        id="banner"
        className="banner route bg-image relative h-100vh"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="overlay-itro"></div>
        <div className="banner-content">
          <Container>
            <Row>
              <Col md={6}>
                <div className=""></div>
              </Col>
              <Col md={6} data-aos="zoom-in">
                <h1 className="text-6xl font-bold text-white ">
                  <p> BEST CAR</p> <p className="pt-4">ENGINEERING</p>
                  <p className="pt-4">COMPANY</p>
                </h1>
                <h6 className="banner-title font-bold text-white pt-4">
                  Because they are not vehicles they are a Emotions
                </h6>

                <Button
                  onClick={handleLogin}
                  label="Explore Services"
                  className="pt-4"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Home;
