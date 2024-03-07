import { useState } from "react";
import SubHeading from "../Shared/Heading Title/SubHeading";
import Container from "../Shared/container/Container";
import SectionTowCard from "./SectionTowCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import bgContact from "../../assets/banner/contact-bg.png";
const Section2 = () => {
  const [activ, setActive] = useState("Employee");
  const data = [
    {
      label: "Branch Locator",
      value: "Branch Locator",
      desc: [
        {
          name: "Main Branch",
          title: "Branch Manager",
          email: "mainbranch@example.com",
          number: "+1 (123) 456-7890",
          description:
            "Our main branch is the headquarters and central hub for all banking operations.",
          location: "567 Waterfront Road, Waterfront City, State, ZIP",
          image: "https://i.ibb.co/q0PDdG9/images-10.jpg",
        },
        {
          name: "Waterfront Branch",
          title: "Customer Service Representative",
          email: "waterfrontbranch@example.com",
          number: "+1 (567) 890-1234",
          description:
            "Situated by the waterfront, our branch provides excellent service with a scenic view.",
          location: "123 Main Street, Cityville, State, ZIP",
          image: "https://i.ibb.co/M2ycZJr/images-8.jpg",
        },
        {
          name: "Downtown Branch",
          title: "Assistant Manager",
          email: "downtownbranch@example.com",
          number: "+1 (456) 789-0123",
          description:
            "Located in the heart of downtown, our branch serves the local business community.",
          location: "456 Business Avenue, Downtown City, State, ZIP",
          image: "https://i.ibb.co/ZVzJDmq/images-7.jpg",
        },
        {
          name: "Suburb Branch",
          title: "Branch Supervisor",
          email: "suburbbranch@example.com",
          number: "+1 (789) 012-3456",
          description:
            "Providing convenient banking services to our customers in the suburban area.",
          location: "789 Suburb Street, Suburbville, State, ZIP",
          image: "https://i.ibb.co/h8bz5zF/download-9.jpg",
        },
        {
          name: "Tech Park Branch",
          title: "Technology Specialist",
          email: "techparkbranch@example.com",
          number: "+1 (234) 567-8901",
          description:
            "Focused on serving the technology park community with specialized banking solutions.",
          location: "234 Tech Avenue, Tech Park City, State, ZIP",
          image: "https://i.ibb.co/1KWtdWT/download-8.jpg",
        },
        {
          name: "University Branch",
          title: "Student Accounts Specialist",
          email: "universitybranch@example.com",
          number: "+1 (890) 123-4567",
          description:
            "Tailored banking services for students and faculty in the university area.",
          location: "567 Waterfront Road, Waterfront City, State, ZIP",
          image: "https://i.ibb.co/6t2gk8k/download-7.jpg",
        },
      ],
    },
    {
      label: "Branch Manager",
      value: "Branch Manager",
      desc: [
        {
          name: "Grace Operations Manager",
          title: "Operations Manager",
          number: "+1 (555) 123-4567",
          email: "grace.manager@fakebank.com",

          description:
            "Oversees day-to-day operations, ensuring smooth and efficient processes.",
          location: "123 Main Street, Cityville, State, ZIP",
        },
        {
          name: "Liam Financial Analyst",
          title: "Financial Analyst",
          number: "+1 (555) 234-5678",
          email: "liam.analyst@fakebank.com",
          description:
            "Analyzes financial data, prepares reports, and provides insights for decision-making.",
        },
        {
          name: "Ava Customer Service Specialist",
          title: "Customer Service Specialist",
          number: "+1 (555) 345-6789",
          email: "ava.service@fakebank.com",
          description:
            "Assists customers with inquiries, resolves issues, and ensures satisfaction.",
        },
        {
          name: "Noah Investment Advisor",
          title: "Investment Advisor",
          number: "+1 (555) 456-7890",
          email: "noah.advisor@fakebank.com",
          description:
            "Provides investment advice, portfolio management, and financial planning services.",
        },
        {
          name: "Emma IT Support Specialist",
          title: "IT Support Specialist",
          number: "+1 (555) 567-8901",
          email: "emma.it@fakebank.com",
          description:
            "Handles IT support, troubleshoots technical issues, and maintains technology systems.",
        },
        {
          name: "Mason CEO",
          title: "Chief Executive Officer",
          number: "+1 (555) 678-9012",
          email: "mason.ceo@fakebank.com",
          description:
            "Provides strategic leadership, oversees operations, and guides the organization's direction.",
        },
      ],
    },
    {
      label: "Loan Officer",
      value: "Loan Officer",
      desc: [
        {
          name: "Emily Branch Manager",
          title: "Branch Manager",
          number: "+1 (555) 111-2233",
          email: "emily.manager@fakebank.com",
          description:
            "Manages daily operations, customer service, and staff at the branch.",
        },
        {
          name: "Michael Customer Relations",
          title: "Customer Relations Specialist",
          number: "+1 (555) 333-4455",
          email: "michael.relations@fakebank.com",
          description:
            "Builds and maintains customer relationships, handles feedback, and resolves issues.",
        },
        {
          name: "Sophia Finance Director",
          title: "Finance Director",
          number: "+1 (555) 555-6677",
          email: "sophia.finance@fakebank.com",
          description:
            "Directs financial planning, budgeting, and reporting for the organization.",
        },
        {
          name: "Daniel Investment Advisor",
          title: "Investment Advisor",
          number: "+1 (555) 777-8899",
          email: "daniel.advisor@fakebank.com",
          description:
            "Provides investment advice, portfolio management, and financial planning services.",
        },
        {
          name: "Olivia Operations Coordinator",
          title: "Operations Coordinator",
          number: "+1 (555) 999-0011",
          email: "olivia.operations@fakebank.com",
          description:
            "Coordinates and optimizes daily operations to ensure efficiency and effectiveness.",
        },
        {
          name: "Ethan IT Manager",
          title: "IT Manager",
          number: "+1 (555) 112-2233",
          email: "ethan.it@fakebank.com",
          description:
            "Manages the bank's IT infrastructure, security, and technology solutions.",
        },
      ],
    },
  ];

  const info1 = data.find((info) => info.value === "Branch Locator") || {};
  const info2 = data.find((info) => info.value === "Branch Manager") || {};
  const info3 = data.find((info) => info.value === "Loan Officer") || {};

  return (
    <div
      id="information"
      className="object-contain bg-cover bg-center bg-no-repeat py-10 container mx-auto px-4"
      style={{ backgroundImage: `url("${bgContact}")` }}
    >
      <Container>
        {/* <Heading title="All employee information of our office" /> */}
        <SubHeading title=" Your Global Banking Partner" />

        <Tabs>
          <TabList className="flex flex-col md:flex-row md:w-[700px] mx-auto  justify-center gap-5 my-10">
            <Tab
              className={` px-6 py-2 border rounded-full cursor-pointer font-bold focus:bg-nevy-blue ease-linear duration-500 outline-none ${
                activ === "Employee" ? "bg-nevy-blue text-white" : "bg-white"
              } `}
              onClick={() => setActive("Employee")}
            >
              Branch Locator
            </Tab>
            <Tab
              className={` px-6 py-2 border rounded-full cursor-pointer font-bold focus:bg-nevy-blue ease-linear duration-500 outline-none  ${
                activ === "Branch Manager" ? "bg-nevy-blue text-white" : "bg-white"
              } `}
              onClick={() => setActive("Branch Manager")}
            >
              Branch Manager
            </Tab>
            <Tab
              className={` px-6 py-2 border rounded-full cursor-pointer font-bold focus:bg-nevy-blue ease-linear duration-500 outline-none ${
                activ === "Loan Officer" ? "bg-nevy-blue text-white" : "bg-white"
              } `}
              onClick={() => setActive("Loan Officer")}
            >
              Loan Officer
            </Tab>
          </TabList>

          <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10  ">
            {info1?.desc?.map((info, i) => (
              <SectionTowCard key={i} info={info}></SectionTowCard>
            ))}
          </TabPanel>
          <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10  ">
            {info2?.desc?.map((info, i) => (
              <SectionTowCard key={i} info={info}></SectionTowCard>
            ))}
          </TabPanel>
          <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10  ">
            {info3?.desc?.map((info, i) => (
              <SectionTowCard key={i} info={info}></SectionTowCard>
            ))}
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
};

export default Section2;
