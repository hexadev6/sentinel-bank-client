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
    <Container>
      <div id="sponsors">
        <SubHeading title={"Our Sponsors & Partners"} />
        <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-16">
          {sponsor.map((item) => (
            <h2 key={item.id}>
              <img
                className="text-xl  shadow-md  p-2 mx-6 rounded-lg w-32 h-20"
                src={item.image}
                alt=""
              />
            </h2>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Sponsor;
