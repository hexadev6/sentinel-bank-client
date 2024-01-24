import { Suspense } from "react";
import AboutCompany from "../../../components/About us/AboutCompany/AboutCompany";
import ReadyToTalk from "../../../components/About us/ReadyToTalk.jsx/ReadyToTalk";
import Statistics from "../../../components/About us/Statistics/Statistics";
import Team from "../../../components/About us/Team/Team";
import Sponsor from "../../../components/About us/Sponsor/Sponsor";
import Mission from "../../../components/About us/Mission/Mission";

const AboutUs = () => {
  return (
    <div>
      <AboutCompany />
      <Mission></Mission>
      <Team />
      <Sponsor/>
      {/* <ReadyToTalk /> */}
      {/* <Statistics /> */}
    </div>
  );
};

export default AboutUs;
