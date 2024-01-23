import React from 'react';
import Transaction from '../../components/Overview/Transaction/Transaction';
import Cards from '../../components/Overview/Cards/Cards';

const Overview = () => {
    return (
        <div className=' gap-5 justify-between'>
            <div className=''>
            <Cards />
            <Transaction />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Overview;