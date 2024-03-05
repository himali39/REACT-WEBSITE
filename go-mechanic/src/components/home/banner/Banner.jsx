import React, { useEffect } from "react";
import bannerImage from "../../assets/images/banner/banner.svg";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../assets/css/home.css";
import Button from "../../comman/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/service");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="banner"
      className="banner bg-image"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="overlay-itro"></div>
      <div className="banner-content flex justify-center align-center">
        <Container>
          <Row>
            <Col sm={12}>
              <Row>
                {/* left side */}
                <Col md={6} xs={12} className="order-md-1 order-1">
                  <form>
                    <div className="banner-form p-5">
                      <p className="text-center font-bold left-heading">
                        Experience The Best Car Services In Surat
                      </p>
                      <p className="pt-4 text-center">
                        Get instant quotes for your car service
                      </p>

                      <div className="mt-4">
                        <select
                          id="car-brand"
                          name="car-brand"
                          autoComplete="car-brand"
                          className="block w-full rounded-md border-1 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Honda City, Diesel</option>
                          <option>Hyundai Motor Company</option>
                          <option>Honda Motor Company</option>
                          <option>Kia</option>
                          <option>Tata Motors</option>
                          <option>Mahindra & Mahindra</option>
                          <option>Nissan</option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <input
                          type="text"
                          name="number"
                          id="number"
                          autoComplete="number"
                          className="block w-full py-3 flex-1 border-1 rounded-md bg-transparent pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ps-2"
                          defaultValue="123456789"
                        />
                      </div>
                      <Col md={12} className="pt-4 left-btn">
                        <Button label="Check Price For Free" />
                      </Col>
                    </div>
                  </form>
                  {/* </Col> */}
                  {/* </Row> */}
                </Col>
                {/* right side  */}
                <Col
                  md={6}
                  xs={12}
                  data-aos="zoom-in"
                  className="order-md-2 order-2"
                >
                  <div className="banner-main">
                    <div className="text-6xl font-bold text-white banner-heading">
                      <p> BEST CAR</p> <p className="pt-5">ENGINEERING</p>
                      <p className="pt-5">COMPANY</p>
                    </div>
                    <h6 className="banner-title text-sm font-bold text-white pt-4">
                      Because they are not vehicles they are a Emotions
                    </h6>

                    <div className="pt-5 explore-btn">
                      <Button onClick={handleLogin} label="Explore Services" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
