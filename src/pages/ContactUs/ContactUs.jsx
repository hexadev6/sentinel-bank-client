import { useEffect, useState } from "react";
import ContactInfo from "../../components/Contact Us/ContactInfo";
import Section2 from "../../components/Contact Us/Section2";
import { useLocation } from "react-router-dom";
import MainBranch from "../../components/Contact Us/MainBranch";

const ContactUs = () => {
  const location = useLocation();
  const [position, setPosition] = useState(0);
  useEffect(() => {
    if (location.pathname === "/contact/information") {
      setPosition(150);
    } else if (location.pathname === "/contact/livechat") {
      setPosition(1320);
    } else if (location.pathname === "/contact/contactfrom") {
      setPosition(1700);
    }
    window.AnimationEffect;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }, [position, location.pathname]);
  return (
    <div>
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
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Form</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <MainBranch />
    </div>
  );
};

export default ContactUs;
