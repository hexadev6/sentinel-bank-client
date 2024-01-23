import React from 'react';
import Transaction from '../../components/Overview/Transaction/Transaction';
import Cards from '../../components/Overview/Cards/Cards';
import Transfer from '../../components/Overview/MoneyTransfer/Transfer';

const Overview = () => {
    return (
        <div className='grid lg:grid-cols-5 xl:grid-cols-4 gap-5 justify-between overflow-auto'>
            <div className='lg:col-span-3'>
            <Cards />
            <Transaction />
            </div>
            <div className='lg:col-span-2 xl:col-span-1 w-full'>
                <Transfer />
            </div>
        </div>
    );
};

export default Overview;