import SubHeading from "../../Shared/Heading Title/SubHeading";
import Container from "../../Shared/container/Container";
import { FaCheckCircle } from "react-icons/fa";


const Mission = () => {
    return (
        <Container>
            <div id="mission" className="grid grid-cols-1 lg:grid-cols-2 h-auto gap-6 mx-6">
            <div className=" p-2 ">
                <SubHeading title={'Our Mission'} ></SubHeading>
                <h2 className="my-4 text-[#073871] text-left p-2 text-lg font-medium">At Sentinel Trust Bank, our mission is to empower individuals and businesses to achieve financial success by providing innovative, reliable, and personalized banking solutions. We are committed to building lasting relationships with our clients, fostering a culture of trust, integrity, and transparency. Through responsible banking practices, community engagement, and a dedication to excellence, we strive to be a trusted financial partner, contributing to the prosperity and well-being of the communities we serve</h2>
            </div>
            <div className="h-auto text-white  rounded-md shadow-md shadow-[#073871] p-2 bg-nevy-blue">
            <div className="container mx-auto px-4">
      <div className="flex gap-2 justify-center items-center ">
        <div className="bg-white h-[1px] w-full"></div>
        <p className="text-center text-white text-xl lg:text-4xl w-full font-light">
         Our Vision
        </p>
        <div className="bg-white h-[1px] w-full"></div>
      </div>
    </div>
                <h2 className="my-4 p-2">At Sentinel Trust Bank, we envision a future where financial empowerment is accessible to all. Our commitment is to be a beacon of innovation and excellence in the banking industry, leveraging technology to simplify financial transactions, enhance customer experiences, and foster economic growth.</h2>
                <p className="flex gap-2"><p className="text-2xl font-extrabold"><FaCheckCircle/></p>Envisioning a future where financial empowerment is accessible to all.</p>
                <p className="flex gap-2"><p className="text-2xl font-extrabold"><FaCheckCircle/></p>Striving to be a beacon of innovation and excellence in the banking industry.</p>
                <p className="flex gap-2"><p className="text-2xl font-extrabold"><FaCheckCircle/></p>Aiming to be the preferred financial partner for individuals and businesses.</p>
            </div>
        </div>
            
        </Container>
    );
};

export default Mission;