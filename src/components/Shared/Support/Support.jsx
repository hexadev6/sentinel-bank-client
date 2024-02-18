import React, { useState } from 'react';
import { FaRegMessage } from 'react-icons/fa6';
import Chat from './Chat';
import { ImCross } from "react-icons/im";

const Support = () => {
    const [showSupport, setShowSupport] = useState(false);

    const handleToggle = () => {
      setShowSupport((prevShowSupport) => !prevShowSupport);
    };
    return (
        <div >
        
        {
            showSupport? <div className=' fixed bottom-10 p-4 right-6 cursor-pointer'>
                <button className='absolute ml-96 mb-4 z-10 text-white text-2xl' onClick={handleToggle}><ImCross/></button>
            <Chat handleToggle={handleToggle}/>
            </div> :
          <div
            onClick={handleToggle}
            className={`bg-blue-600 fixed bottom-6 p-4 right-6 cursor-pointer rounded-full w-20 h-20`}
          >
            <FaRegMessage className="text-5xl" />
            
          </div>
        }
    </div>
    );
};

export default Support;