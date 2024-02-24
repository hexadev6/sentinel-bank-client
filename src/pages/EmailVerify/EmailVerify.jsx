import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const EmailVerify = ({onComplete}) => {
    const [open,setOpen]= useState(0)
    const handleOpen=()=>{
        setOpen(1)
        onComplete()
    }
    return (
        <div className={`relative  rounded mt-10 w-full bg-gray-100 p-5  ${open === 1?'hidden':'' }`}>
            <h2 className='text-center py-40 text-xl text-red-500 '>Please check your email to Verify.</h2>
            <div className='text-end'>
            <Button onClick={handleOpen} className='bg-nevy-blue rounded'>Ok</Button>
            </div>
            
        </div>
    );
};

export default EmailVerify;