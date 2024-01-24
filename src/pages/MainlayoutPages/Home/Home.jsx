import FaqSection from "../../../components/Home/FaqSection/FaqSection";
import CustomerReview from "../../../components/Home/CustomerReview/CustomerReview";
import UpdatedBanner from "../../../components/Home/UpdatedBannner/UpdatedBanner";
import { useEffect } from "react";
import Statistics from "../../../components/About us/Statistics/Statistics";
import Service from "../../../components/Home/Service/Service";
import MoneyExchange from "../../../components/Home/Money Exchange/MoneyExchange";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Banner /> */}
      <UpdatedBanner />
      <Statistics />
      <Service />
      <MoneyExchange />
      <CustomerReview />
      <FaqSection />
    </>
  );
};

export default Home;
