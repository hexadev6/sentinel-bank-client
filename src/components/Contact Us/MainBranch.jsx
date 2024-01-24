import { MdAddLocationAlt, MdOutlinePermPhoneMsg } from "react-icons/md";
import Logo from "../../utility/Logo";
import Container from "../Shared/container/Container";
import { SiMinutemailer } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import Heading from "../Shared/Heading Title/Heading";
import SubHeading from "../Shared/Heading Title/SubHeading";
const MainBranch = () => {
  return (
    <Container>
      <Heading title="Main Branch" />
      <div className="max-w-[500px] mx-auto mb-20">
        <SubHeading title="Our experienced team ensures personalized financial guidance, fostering trust and building lasting relationships. " />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-32 items-center font-bold px-5">
        <div className="">
          <Logo />
          <p className="max-w-[500px] font-normal mt-5">
            Sentinel Trust Bank is a leading financial institution committed to
            providing comprehensive banking services.
          </p>
        </div>
        <div className="flex  flex-col gap-3">
          <div className="flex items-center gap-5 ">
            <MdAddLocationAlt className="text-3xl" />

            <p>123 Main Street, Cityville</p>
          </div>
          <div className="flex items-center gap-5 ">
            <MdOutlinePermPhoneMsg className="text-3xl" />

            <p>+1 (800) 123-4567 </p>
          </div>
          <div className="flex items-center gap-5 ">
            <SiMinutemailer className="text-3xl" />

            <p>info@sentinel.com</p>
          </div>
          <div className="flex items-center gap-5 ">
            <CgWebsite className="text-2xl ml-1" />

            <p> www.sentinel.com</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainBranch;
