import img1 from "../../../assets/banner/teamwork (3).jpg";
import img2 from "../../../assets/banner/teamwork.jpg";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import Container from "../../Shared/container/Container";

const AboutCompany = () => {
    return (
       <div id="aboutCompany">
         <Container>
            <SubHeading title={'About Company'}></SubHeading>
          
           <div className='flex flex-col items-center lg:flex-row mx-6 justify-evenly gap-6'>
           
           
           <div  className='sm:mx-10'>
                <div className='relative'>
                <img className='h-60 w-96' src={img2} alt="" />
                <img className='lg:ml-40 lg:-mt-32 mt-4 h-60 w-96' src={img1} alt="" />
                </div>
                <div className='lg:absolute hover:scale-110 lg:-mt-32 lg:mx-6 mx-auto mt-4 flex gap-2 p-6 bg-white border-4 w-60 lg:w-1/4 border-l-nevy-blue'>
                    <h2 className='text-3xl text-red-600 font-bold' >25</h2>
                    <h2 className='w-40 text-center'>We Have More Than years of Experience</h2>
                </div>

            </div>
            <div className='w-full lg:w-96 px-10'>
                  <h2 className='text-2xl font-bold mb-4'>Crafting Excellence Since 25 Years</h2>
                  <p className='text-xl font-medium'>For 25 years, Sentinel Trust Bank has been synonymous with excellence. Since our inception, we have continually evolved to meet the dynamic needs. Our seasoned team of professionals brings a wealth of experience, ensuring that every project we undertake is executed with precision, creativity, and a commitment to surpassing expectations.</p>
            </div>
           </div>
        </Container>
       </div>
    );
};

export default AboutCompany;
