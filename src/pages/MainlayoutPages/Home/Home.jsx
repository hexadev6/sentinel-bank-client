
import FaqSection from "../../../components/Home/FaqSection/FaqSection";
import CustomerReview from "../../../components/Home/CustomerReview/CustomerReview";
import UpdatedBanner from "../../../components/Home/UpdatedBannner/UpdatedBanner";

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <UpdatedBanner/>
      <CustomerReview />
      <FaqSection />
    </>
  );
};

export default Home;
