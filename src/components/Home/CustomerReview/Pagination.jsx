import { IconButton } from '@material-tailwind/react';
import React from 'react';

const Pagination = ({totalPgNum, currentPage, setCurrentPage}) => {
    const pgNum = [];

    for (let i = 0; i < totalPgNum; i++) {
      pgNum.push(
        <IconButton
          key={i}
          onClick={() => handlePageClick(i + 1)}

          className={` rounded-none ${currentPage === i + 1 ? 'bg-nevy-blue text-white' : 'bg-gray-300 text-black' }`}
    
        >
          {i + 1}
        </IconButton>
      );
    }
  
    const handlePageClick = (page) => {
      setCurrentPage(page);
    };
  
    return pgNum;
};

export default Pagination;