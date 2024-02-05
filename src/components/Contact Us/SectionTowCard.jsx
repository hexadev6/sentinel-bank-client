import { FaPhoneAlt } from "react-icons/fa";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "../../lib/materialClass";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
const SectionTowCard = ({ info }) => {
  const { name, title, email, number, description, location, image } =
    info || {};

  return (
    <Card className="mt-6 relative pt-5 hover:bg-nevy-blue hover:text-white ease-linear duration-300 overflow-hidden">
      <CardBody>
        <div className="absolute top-0 left-0 h-[100px] w-full">
          <img src={image} className="h-full w-full" alt="" />
        </div>
        <Typography variant="h5" className="mb-2 mt-20">
          {name}
        </Typography>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
        <div className="flex items-center gap-3 mt-5  text-sm font-bold">
          <MdOutlineAlternateEmail className="text-2xl" />
          <p>{email}</p>
        </div>
        <div className="flex items-center gap-3 text-sm font-bold my-2">
          <FaPhoneAlt className="text-xl" />
          <p>{number}</p>
        </div>
        <div className="flex items-center gap-3 text-sm font-bold">
          <FaMapLocation className="text-2xl" />

          <p>{location}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default SectionTowCard;
