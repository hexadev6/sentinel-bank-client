import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const EmailVerify = () => {
    const [open,setOpen]= useState(0)
    const handleOpen=()=>{
        setOpen(1)
    }
    return (
        <div className={`relative mt-10 w-full h-96 bg-white ${open === 1?'hidden':'' }`}>
            <h2 className='text-center py-40 '>Please check your email to Verify.</h2>
            <div className='absolute right-0 px-6'>
            <Button onClick={handleOpen} className='bg-nevy-blue '>Ok</Button>
            </div>
            
        </div>
    );
};

export default EmailVerify;