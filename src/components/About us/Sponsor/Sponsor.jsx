import Container from "../../Shared/container/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import SubHeading from "../../Shared/Heading Title/SubHeading";

const Sponsor = () => {
  const [sponsor, setSponsor] = useState([]);
  useEffect(() => {
    axios
      .get("/Sponsors.json")
      .then((res) => {
        setSponsor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container mx-auto px-4">
      <SubHeading title={"Trusted by"} />
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
          {sponsor.map((item) => (
             <img key={item?.id}
             className="text-xl  shadow-md  p-2 rounded-lg w-full h-44 filter grayscale"
             src={item.image}
             alt=""
           />
          ))}
        </div>
    </div>
  );
};

export default Sponsor;
