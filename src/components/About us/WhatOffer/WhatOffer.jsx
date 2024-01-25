import SubHeading from "../../Shared/Heading Title/SubHeading";
import Container from "../../Shared/container/Container";
import security from '../../../assets/banner/network-secure-online-payment-on-smartphone.gif'


const WhatOffer = () => {
    return (
        <Container>
            <SubHeading title={'What We Offer'}></SubHeading>
            <div className="border mx-10 py-6 grid grid-cols-2">
                <div>
                    
                </div>
            <div>
               <img className="w-full h-full" src={security} alt="" />
            </div>
            
        </div>
        </Container>
    );
};

export default WhatOffer;