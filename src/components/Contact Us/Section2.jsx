import { useState } from "react";
import Heading from "../Shared/Heading Title/Heading";
import SubHeading from "../Shared/Heading Title/SubHeading";
import Container from "../Shared/container/Container";

import SectionTowCard from "./SectionTowCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Section2 = () => {
  const [activ, setActive] = useState("Employee");
  const data = [
    {
      label: "Employee",
      value: "Employee",
      desc: [
        {
          name: "John Manager",
          title: "Branch Manager",
          number: "+1 (555) 123-4567",
          email: "john.manager@fakebank.com",
          description:
            "Responsible for overseeing day-to-day operations at the branch.",
        },
        {
          name: "Jane Employee",
          title: "Customer Service Representative",
          number: "+1 (555) 234-5678",
          email: "jane.employee@fakebank.com",
          description:
            "Assists customers with account inquiries and resolves issues.",
        },
        {
          name: "Alex CEO",
          title: "Chief Executive Officer",
          number: "+1 (555) 345-6789",
          email: "alex.ceo@fakebank.com",
          description:
            "Provides strategic leadership and direction for the entire organization.",
        },
        {
          name: "Mark Senior Analyst",
          title: "Senior Financial Analyst",
          number: "+1 (555) 456-7890",
          email: "mark.analyst@fakebank.com",
          description:
            "Analyzes financial data and prepares reports for decision-making.",
        },
        {
          name: "Sarah Operations Manager",
          title: "Operations Manager",
          number: "+1 (555) 567-8901",
          email: "sarah.manager@fakebank.com",
          description:
            "Manages day-to-day operations and ensures efficiency in processes.",
        },
        {
          name: "David IT Specialist",
          title: "IT Specialist",
          number: "+1 (555) 678-9012",
          email: "david.it@fakebank.com",
          description:
            "Handles IT-related issues and supports the bank's technology infrastructure.",
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

  const info1 = data.find((info) => info.value === "Employee") || {};
  const info2 = data.find((info) => info.value === "Branch Manager") || {};
  const info3 = data.find((info) => info.value === "Loan Officer") || {};

  return (
    <Container>
      <Heading title="All employee information of our office" />
      <SubHeading title=" Your Global Banking Partner" />

      <Tabs>
        <TabList className="flex w-[500px] mx-auto  justify-center gap-5 my-10">
          <Tab
            className={` px-6 py-2 border rounded-full cursor-pointer font-bold focus:bg-green-500 ease-linear duration-500 outline-none ${
              activ === "Employee" ? "bg-green-500" : "bg-white"
            } `}
            onClick={() => setActive("Employee")}
          >
            Employee
          </Tab>
          <Tab
            className={` px-6 py-2 border rounded-full cursor-pointer font-bold focus:bg-green-500 ease-linear duration-500 outline-none  ${
              activ === "Branch Manager" ? "bg-green-500" : "bg-white"
            } `}
            onClick={() => setActive("Branch Manager")}
          >
            Branch Manager
          </Tab>
          <Tab
            className={` px-6 py-2 border rounded-full cursor-pointer font-bold focus:bg-green-500 ease-linear duration-500 outline-none ${
              activ === "Loan Officer" ? "bg-green-500" : "bg-white"
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
  );
};

export default Section2;
