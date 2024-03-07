import { useEffect, useState } from "react";
import ContactInfo from "../../components/Contact Us/ContactInfo";
import Section2 from "../../components/Contact Us/Section2";
import { useLocation } from "react-router-dom";
import MainBranch from "../../components/Contact Us/MainBranch";
import CommonBanner from "../../components/Shared/CommonBanner/CommonBanner";
import bg2 from "../../assets/banner/bg2.jpg";

const ContactUs = () => {
  const location = useLocation();
  const [position, setPosition] = useState(0);
  useEffect(() => {
    if (location.pathname === "/contact/information") {
      setPosition(150);
    } else if (location.pathname === "/contact/livechat") {
      setPosition(2020);
    } else if (location.pathname === "/contact/contactfrom") {
      setPosition(2500);
    } else if (location.pathname === "/contact/mainbranch") {
      setPosition(3000);
    }
    window.AnimationEffect;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }, [position, location.pathname]);
  return (
    <div>
      <CommonBanner
        title="Contact Us"
        img={bg2}
        subtitle={"Let's Connect to Serve You Better"}
        orientation={"right"}
      />
      <Section2 />
      <ContactInfo />
      <div id="contactfrom" className="container mx-auto mt-10 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Part 1: GET IN TOUCH */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">GET IN TOUCH</h2>
            <div className="flex flex-col space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Let's talk</h3>
                <p>+1 (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Timing</h3>
                <p>Mon-Fri: 9am - 5pm</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p>123 Main Street, Cityville</p>
              </div>
            </div>
          </div>

          {/* Part 2: Form */}
          <div className="rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.45970074155!2d90.34742493812453!3d23.80561909032643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0de6f4efc59%3A0x3e55d7eb9a03385d!2sMirpur%202%20Water%20Tank!5e0!3m2!1sen!2sbd!4v1709800319376!5m2!1sen!2sbd"
              allowfullscreen=""
              width='100%'
              height='100%'
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <MainBranch />
    </div>
  );
};

export default ContactUs;
