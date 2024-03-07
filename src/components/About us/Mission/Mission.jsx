import SubHeading from "../../Shared/Heading Title/SubHeading";
import Container from "../../Shared/container/Container";
import { FaCheckCircle } from "react-icons/fa";

const Mission = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div id="mission" className="md:mt-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10  justify-between items-center">
          <div>
          <p className="text-nevy-blue mb-10 font-semibold text-3xl">Our Mission</p>
            <p>
              At Sentinel Trust Bank, our mission is to empower individuals and
              businesses to achieve financial success by providing innovative,
              reliable, and personalized banking solutions. We are committed to
              building lasting relationships with our clients, fostering a
              culture of trust, integrity, and transparency. Through responsible
              banking practices, community engagement, and a dedication to
              excellence, we strive to be a trusted financial partner,
              contributing to the prosperity and well-being of the communities
              we serve
              <a href="#" className="border-b">
                What for?
              </a>
            </p>
          </div>
          <div className="relative lg:col-span-2 flex mt-14 md:mt-0">
            <div className="w-5/6 right-0 h-full  bg-nevy-blue absolute -top-20 -z-10 opacity-25">
           
            </div>
            <img
              src="https://media.istockphoto.com/id/625736338/photo/stack-of-hands-showing-unity.jpg?s=612x612&w=0&k=20&c=20mAQjGRQ5XVKqHe2qFguqGZ4dwto6lxxinciCfnVI0="
              alt="" className="w-5/6"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-10 justify-between items-center">
        <div className="relative lg:col-span-2 flex mt-14 md:mt-0 justify-end">
            <div className="w-5/6 left-0 h-full  bg-nevy-blue absolute -top-20 -z-10 opacity-25">
           
            </div>
            <img
              src="https://img.freepik.com/premium-photo/businessman-holding-arrow-up-with-graph-business-analysis-business-development-financial-plan-strategy_117255-1887.jpg"
              alt="" className="w-5/6 "
            />
     
          </div>
          <div>
          <p className="text-nevy-blue mb-10 font-semibold text-3xl">Our Vision</p>
            <div>
            <h2 className="">
            At Sentinel Trust Bank, we envision a future where financial
            empowerment is accessible to all. Our commitment is to be a beacon
            of innovation and excellence in the banking industry, leveraging
            technology to simplify financial transactions, enhance customer
            experiences, and foster economic growth.
          </h2>
          <div className="flex gap-2 mt-5">
            <p className="text-2xl font-extrabold">
              <FaCheckCircle  className="text-nevy-blue"/>
            </p>
            Envisioning a future where financial empowerment is accessible to
            all.
          </div>
          <div className="flex gap-2">
            <p className="text-2xl font-extrabold">
              <FaCheckCircle className="text-nevy-blue"/>
            </p>
            Striving to be a beacon of innovation and excellence in the banking
            industry.
          </div>
          <div className="flex gap-2">
            <p className="text-2xl font-extrabold">
              <FaCheckCircle className="text-nevy-blue"/>
            </p>
            Aiming to be the preferred financial partner for individuals and
            businesses.
          </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mission;
