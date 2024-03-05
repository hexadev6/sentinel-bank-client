import { useEffect, useState } from "react";
import AboutCompany from "../../../components/About us/AboutCompany/AboutCompany";

import Team from "../../../components/About us/Team/Team";
import Sponsor from "../../../components/About us/Sponsor/Sponsor";
import Mission from "../../../components/About us/Mission/Mission";
import Awards from "../../../components/About us/Awards/Awards";
import WhatOffer from "../../../components/About us/WhatOffer/WhatOffer";
import CommonBanner from "../../../components/Shared/CommonBanner/CommonBanner";
import b1 from "../../../assets/banner/b1.jpg";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();
  const [position, setPosition] = useState(0);
  useEffect(() => {
    if (location.pathname === "/aboutus/aboutCompany") {
      setPosition(400);
    } 
    else if (location.pathname === "/aboutus/mission") {
      setPosition(1100);
    } 
    else if (location.pathname === "/aboutus/awards") {
      setPosition(1700);
    } 
    else if (location.pathname === "/aboutus/team") {
      setPosition(2800);
    } 
    else if (location.pathname === "/aboutus/branch") {
      setPosition(2100);
    }
    else if (location.pathname === "/aboutus/sponsors") {
      setPosition(3200);
    }
    window.AnimationEffect;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }, [position, location.pathname]);
  return (
    <div>
      <CommonBanner
        title="About us"
        img={b1}
        subtitle={"Committed to Your Financial Success"}
      />
      <AboutCompany />
      <Mission />
      <Awards />
      <WhatOffer />
      <Team />
      <Sponsor />
    </div>
  );
};

export default AboutUs;
