import CustomerReview from "../../../components/Home/CustomerReview/CustomerReview";
import UpdatedBanner from "../../../components/Home/UpdatedBannner/UpdatedBanner";

import { useEffect } from "react";
import Statistics from "../../../components/About us/Statistics/Statistics";
import Service from "../../../components/Home/Service/Service";
import MoneyExchange from "../../../components/Home/Money Exchange/MoneyExchange";
import Feature from "../../../components/Home/Feature/Feature";
import News from "../../../components/Home/News/News";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UpdatedBanner />
      <Statistics />
      <Feature />
      <MoneyExchange />
      <Service />
      <CustomerReview />
      <News />
    </>
  );
};

export default Home;
