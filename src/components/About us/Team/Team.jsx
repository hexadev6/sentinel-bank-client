import {
  Card,
  CardHeader,
  CardBody,
  Typography,
 
} from "@material-tailwind/react";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import Container from "../../Shared/container/Container";

const Team = () => {
  const teams = [
    {
      name: "Diana Patel",
      position: "CEO",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsS0fYx5QaeXlcgCkTYSx_2Bb6M0W-OkmYWQ&usqp=CAU",
    },
    {
      name: "Charlie Rodriguez",
      position: "CMO",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Charlie_Sheen_March_2009.JPG/1200px-Charlie_Sheen_March_2009.JPG",
    },
    {
      name: "Eva Williams",
      position: "Manager",
      img: "https://resize.elle.fr/square/var/plain_site/storage/images/beaute/cheveux/stars/eva-longoria-change-radicalement-de-tete-et-adopte-l-une-des-coiffures-les-plus-populaires-de-la-saison-4146918/100212514-1-fre-FR/Eva-Longoria-change-radicalement-de-tete-et-adopte-l-une-des-coiffures-les-plus-populaires-de-la-saison.jpg",
    },
    {
      name: "John Doe",
      position: "Manager",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&usqp=CAU",
    },
  ];

  return (
    <Container>
    <div className=" px-2 py-20">
      <SubHeading title="Meet Our Team" />

      <div id="team" className=" flex flex-wrap md:grid-cols-2 md:grid lg:grid-cols-4 gap-5 justify-center mt-10 items-center">
        {teams.map((member, indx) => (
          <Card
            key={indx}
            shadow={false}
            className="team-card  relative  grid h-96 w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded group"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0  h-full w-full rounded-none "
              style={{
                backgroundImage: `url(${member?.img})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}
            >
              <div className="absolute h-full w-full bg-nevy-blue opacity-60" />

              <CardBody className="">
                <FaFacebookF className="absolute -right-10 group-hover:right-3 top-3  transition-all duration-700   bg-white p-2 rounded text-4xl  text-nevy-blue" />
                <FaInstagram className="absolute -right-20 group-hover:right-3  top-14 transition-all duration-700   bg-white p-2 rounded text-4xl text-nevy-blue" />
                <FaTwitter className="absolute -right-32 group-hover:right-3 transition-all duration-700   bg-white p-2 rounded text-4xl top-[100px] text-nevy-blue" />
                <FaPinterestP className="absolute -right-40 group-hover:right-3 transition-all duration-700 bg-white p-2 rounded text-4xl top-36  text-nevy-blue" />
              </CardBody>
              <CardBody className="absolute bottom-0 left-0 right-0 mx-auto">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-1 font-medium leading-[1.5] "
                >
                  {member?.name}
                </Typography>
                <Typography
                  variant="h6"
                  color="white"
                  className="font-light leading-[1.5] "
                >
                  {member?.position}
                </Typography>
              </CardBody>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default Team;
