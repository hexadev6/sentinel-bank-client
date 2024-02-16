import CustomerReview from "../../../components/Home/CustomerReview/CustomerReview";
import UpdatedBanner from "../../../components/Home/UpdatedBannner/UpdatedBanner";

import { useEffect, useState } from "react";
import Statistics from "../../../components/About us/Statistics/Statistics";
import Service from "../../../components/Home/Service/Service";
import MoneyExchange from "../../../components/Home/Money Exchange/MoneyExchange";
import Feature from "../../../components/Home/Feature/Feature";
import News from "../../../components/Home/News/News";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);
  const [position, setPosition] = useState(0);
  useEffect(() => {
    if (location?.search === "?rates=ExchangeRates") {
      setPosition(1750);
    } else if (location?.search === "") {
      setPosition(0);
    }
    window.AnimationEffect;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }, [position, location.search]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <PopupLogin /> */}
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
