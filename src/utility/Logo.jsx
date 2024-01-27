import { Link } from "react-router-dom";
import icon from "../assets/icons/bank.svg";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center">
      <img className="w-14 h-14" src={icon} />
      <div className="flex flex-col ml-3">
        <h2 className="font-bold text-xl">Sentinel</h2>
        <h4 className="font-medium tracking-widest -mt-2">Trust Bank</h4>
      </div>
    </Link>
  );
};

export default Logo;
