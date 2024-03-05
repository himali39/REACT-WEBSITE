import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Service from "../../pages/Service";
import JsonData from "../../../data/data.json";
import SeeMore from "../../pages/SeeMore";
import CustomServices from "../../pages/CustomServices";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState([]);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Banner />
      <Service data={landingPageData} />
      <SeeMore data={landingPageData.seeMore} />
      <CustomServices />
    </>
  );
};

export default Home;
