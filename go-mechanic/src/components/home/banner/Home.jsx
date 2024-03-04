import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { Service } from "../../pages/Service";
import JsonData from "../../../data/data.json";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState([]);

  console.log(landingPageData, "landingPageData");

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Banner />
      <Service data={landingPageData.Service} />
    </>
  );
};

export default Home;
