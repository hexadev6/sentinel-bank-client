import { Suspense } from "react";
import AboutCompany from "../../../components/About us/AboutCompany/AboutCompany";
import ReadyToTalk from "../../../components/About us/ReadyToTalk.jsx/ReadyToTalk";
import Statistics from "../../../components/About us/Statistics/Statistics";
import Team from "../../../components/About us/Team/Team";

const AboutUs = () => {
  return (
    <div>
      <AboutCompany />
      <Team />
      <ReadyToTalk />
      <Statistics />
    </div>
  );
};

export default AboutUs;
