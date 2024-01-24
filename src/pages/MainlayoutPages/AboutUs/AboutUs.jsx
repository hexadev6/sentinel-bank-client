import { useEffect } from "react";
import AboutCompany from "../../../components/About us/AboutCompany/AboutCompany";

import Team from "../../../components/About us/Team/Team";
import Sponsor from "../../../components/About us/Sponsor/Sponsor";
import Mission from "../../../components/About us/Mission/Mission";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutCompany />
      <Mission></Mission>
      <Team />
      <Sponsor/>
    </div>
  );
};

export default AboutUs;
