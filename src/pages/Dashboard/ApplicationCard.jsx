import { Link } from "react-router-dom";
import debit from "../../assets/image/debit.png";
const ApplicationCard = () => {
  return (
    <>
      <div className="p-5  w-full flex flex-col-reverse xl:flex-row  justify-center items-center  ">
        <div className="flex-1 text-center ">
          <h1 className="text-3xl xl:text-6xl font-bold mb-10">
            Apply for Your Card-Carrying Adventures!
          </h1>
          <p className="">
            Welcome to the realm of effortless spending and infinite
            possibilities! Dive into our application page and embark on a
            journey to unlock the magic of plastic paradise. Whether you're a
            seasoned spender or a first-time swiper, we've got the perfect card
            waiting just for you.
          </p>
          <div className="mt-10">
            <p className=" font-bold">Apply now</p>
            <div className="flex sm:flex-nowrap flex-wrap  justify-center gap-4 mt-5 items-center">
              <Link to={"/dashboard/applicationCard/debit"}>
                <button className="px-10 py-2 border hover:bg-nevy-blue hover:text-white font-bold ease-linear duration-200  border-nevy-blue">
                  Debit Card
                </button>
              </Link>
              <Link to={"/dashboard/applicationCard/cedit"}>
                <button className="px-10 py-2 border hover:bg-nevy-blue hover:text-white font-bold ease-linear duration-200  border-nevy-blue">
                  Cedit Card{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[600px] ">
          <img className="h-full w-full  mt-20  xl:mt-0 " src={debit} alt="" />
        </div>
      </div>
    </>
  );
};

export default ApplicationCard;
