import award1 from '../../../assets/banner/award1 - Copy.jpeg'
import award2 from '../../../assets/banner/awards2 - Copy.jpeg'
import award3 from '../../../assets/banner/awards3 - Copy.jpg'
import award4 from '../../../assets/banner/award4.png'
import Container from '../../Shared/container/Container';
import SubHeading from '../../Shared/Heading Title/SubHeading';

const Awards = () => {
    return (
        <Container>
            <SubHeading title={'Our Awards'}></SubHeading>
            <div className='my-4 grid grid-cols-4'>
           <div className='w-60 text-center text-xl font-bold'>
           <img className='h-60 w-60' src={award1} alt="" />
          
           <h2 className='text-xl font-bold'>Customer satisfaction Award</h2>
           </div>
    
    
            <div className='w-60 text-center text-xl font-bold'>
            <img className='h-60 w-60' src={award2} alt="" />
            <h2>Financial Inclusion Champion</h2>
            </div>
            <div className='w-60 text-center text-xl font-bold'><img className='h-60 w-60' src={award3} alt="" />
            <h2>Community Impact Recognition</h2></div>
           <div className='w-60 text-center text-xl font-bold'>
           <img className='h-60 w-60' src={award4} alt="" />
           <h2>Best Bank Award</h2>
           </div>
            
        </div>
        </Container>
    );
};

export default Awards;