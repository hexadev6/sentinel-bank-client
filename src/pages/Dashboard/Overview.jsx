import React from 'react';
import Transaction from '../../components/Overview/Transaction/Transaction';
import Cards from '../../components/Overview/Cards/Cards';

const Overview = () => {
    return (
        <div className='grid grid-cols-4 gap-5 overflow-auto justify-between'>
            <div className='col-span-3'>
            <Cards />
            <Transaction />
            </div>
            <div>

            </div>
        </div>
    );
};

export default Overview;