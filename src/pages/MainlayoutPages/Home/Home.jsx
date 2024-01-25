import FaqSection from "../../../components/Home/FaqSection/FaqSection";
import CustomerReview from "../../../components/Home/CustomerReview/CustomerReview";
import UpdatedBanner from "../../../components/Home/UpdatedBannner/UpdatedBanner";

import { useEffect } from "react";
import Statistics from "../../../components/About us/Statistics/Statistics";
import Service from "../../../components/Home/Service/Service";
import MoneyExchange from "../../../components/Home/Money Exchange/MoneyExchange";
import Feature from "../../../components/Home/Feature/Feature";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UpdatedBanner />
      <Statistics />
      <Service />
      <MoneyExchange />
      <Feature />
      <CustomerReview />
      <FaqSection />
    </>
  );
};

export default Home;
