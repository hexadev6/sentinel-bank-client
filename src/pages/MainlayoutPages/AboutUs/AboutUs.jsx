import { useEffect } from "react";
import AboutCompany from "../../../components/About us/AboutCompany/AboutCompany";

import Team from "../../../components/About us/Team/Team";
import Sponsor from "../../../components/About us/Sponsor/Sponsor";
import Mission from "../../../components/About us/Mission/Mission";
import Awards from "../../../components/About us/Awards/Awards";
import WhatOffer from "../../../components/About us/WhatOffer/WhatOffer";
import CommonBanner from "../../../components/Shared/CommonBanner/CommonBanner";
import b1 from "../../../assets/banner/b1.jpg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
