import { Button } from '@material-tailwind/react';
import React from 'react';

const EmailVerify = () => {
    return (
        <div className='relative mt-10 w-full h-96 bg-white'>
            <h2 className='text-center py-40 '>Please check your email to Verify.</h2>
            <div className='absolute right-0 px-6'>
            <Button className='bg-nevy-blue '>Ok</Button>
            </div>
            
        </div>
    );
};

export default EmailVerify;