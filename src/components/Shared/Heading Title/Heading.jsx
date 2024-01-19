import React from 'react';

const Heading = ({title}) => {
    return (
        <h1 className='text-4xl mt-2 font-bold text-center first-letter:capitalize lowercase
         max-w-xl mx-auto'>{title}</h1>
    );
};

export default Heading;