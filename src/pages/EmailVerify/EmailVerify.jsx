import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const EmailVerify = ({onComplete}) => {
    const [open,setOpen]= useState(0)
    const handleOpen=()=>{
        setOpen(1)
        onComplete()
    }
    return (
        <div className={`relative mt-10 w-full h-96 bg-white ${open === 1?'hidden':'' }`}>
            <h2 className='text-center py-40 text-xl text-red-500 '>Please check your email to Verify.</h2>
            <div className='absolute right-0 px-6 bottom-2'>
            <Button onClick={handleOpen} className='bg-nevy-blue '>Ok</Button>
            </div>
            
        </div>
    );
};

export default EmailVerify;