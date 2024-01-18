import Banner from "../../../components/Home/Banner/Banner";
import FaqSection from "../../../components/Home/FaqSection/FaqSection";
import CustomerReview from "../../../components/Home/CustomerReview/CustomerReview";
import Footer from "../../../components/Shared/Footer/Footer";
import Navbar from "../../../components/Shared/Navbar/Navbar";


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CustomerReview />
      <FaqSection/>
      <Footer />
    </>
  );
};

export default Home;
