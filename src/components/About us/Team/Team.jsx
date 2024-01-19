import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Heading from "../../Shared/Heading Title/Heading";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const Team = () => {
  const teams = [
    {
      "name": "Diana Patel",
      "position": "Security Officer",
      "img": 'https://img-b.udemycdn.com/user/200_H/119018536_f1df.jpg'
    },
    {
      "name": "Charlie Rodriguez",
      "position": "Financial Officer",
      "img": 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Charlie_Sheen_March_2009.JPG/1200px-Charlie_Sheen_March_2009.JPG'
    },
    {
      "name": "Eva Williams",
      "position": "UX Designer",
      "img": 'https://resize.elle.fr/square/var/plain_site/storage/images/beaute/cheveux/stars/eva-longoria-change-radicalement-de-tete-et-adopte-l-une-des-coiffures-les-plus-populaires-de-la-saison-4146918/100212514-1-fre-FR/Eva-Longoria-change-radicalement-de-tete-et-adopte-l-une-des-coiffures-les-plus-populaires-de-la-saison.jpg'
    },
    {
      "name": "Alice Smith",
      "position": "Product Manager",
      "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsS0fYx5QaeXlcgCkTYSx_2Bb6M0W-OkmYWQ&usqp=CAU'
    },
    {
      "name": "John Doe",
      "position": "Software Engineer",
      "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&usqp=CAU'
    },
  ];

  return (
    <div className="container mx-auto px-2 py-20">
      <SubHeading title="Meet Our Team" />
      <Heading title="Discover the Faces Behind Our Success" />

     <div className=" flex flex-wrap md:grid-cols-3 md:grid lg:grid-cols-5 gap-5 justify-center mt-10 items-center">
     {teams.map((member) => (
        <Card
          shadow={false}
          className="relative  grid h-96 w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded group"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0  h-full w-full rounded-none "
            style={{ backgroundImage: `url(${member?.img})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}
           
          >
            <div className="absolute h-full w-full bg-gradient-to-t from-dark-green via-medium-green opacity-60" />
          
          <CardBody className="">
          
          <FaFacebookF className="absolute -right-10 group-hover:right-3 top-3  transition-all duration-700   bg-white p-2 rounded text-4xl  text-medium-green"/>
          <FaInstagram className="absolute -right-20 group-hover:right-3  top-14 transition-all duration-700   bg-white p-2 rounded text-4xl text-medium-green"/>
          <FaTwitter className="absolute -right-32 group-hover:right-3 transition-all duration-700   bg-white p-2 rounded text-4xl top-[100px] text-medium-green"/>
          <FaPinterestP className="absolute -right-40 group-hover:right-3 transition-all duration-700 bg-white p-2 rounded text-4xl top-36  text-medium-green"/>

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
  );
};

export default Team;
