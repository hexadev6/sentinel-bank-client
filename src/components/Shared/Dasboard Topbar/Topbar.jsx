import React from 'react';
import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
    Avatar,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IoSearch } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa';
import HidedMenu from './HidedMenu';
 
  
const Topbar = () => {

    return (
        <div
        variant="gradient"
        color="blue-gray"
        className="col-span-8 sm:col-span-7 h-fit sticky top-0  bg-white border-b lg:col-span-6 rounded-none px-4 py-3"
      >
        <div className="flex  items-center justify-between gap-y-4 text-black">
         {/* side bar will open  */}

<HidedMenu />
         {/* menu start from here  */}
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5 hidden sm:flex"
          >
            Dashboard
          </Typography>
          <div className="relative md:flex hidden gap-2 md:w-max ">
            <input
              type="search"
              color="white"
              label='Search'
              className="focus:outline-0 bg-transparent border p-2 rounded "
             
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 bg-transparent rounded hover:shadow-none shadow-none"
            >
              <IoSearch className='text-lg'/>
            </Button>
          </div>

          <div className="flex gap-2 md:gap-5 items-center ">
          <IconButton variant="text" color="white" className='md:hidden flex text-black  rounded hover:bg-gray-400'>
            <IoSearch className='text-lg'/>
            </IconButton>
            <IconButton variant="text" color="white" className='text-black  rounded hover:bg-gray-400'>
            <FaBell  className='text-lg'/>
            </IconButton>
            <div className=" rounded-full ">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
              />
            </div>
           
          </div>
       
        </div>
      </div>
    );
};

export default Topbar;