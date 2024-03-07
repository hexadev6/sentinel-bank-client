import img1 from "../../../assets/banner/teamwork (3).jpg";
import img2 from "../../../assets/banner/teamwork.jpg";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import Container from "../../Shared/container/Container";

const AboutCompany = () => {
    return (
       <div id="aboutCompany">
         <div className="container mx-auto px-4 mt-10">
            {/* <SubHeading title={'About Company'}></SubHeading> */}
          
           <div className='grid grid-cols-1 md:grid-cols-2 items-center  justify-between gap-6'>
           
                <div className='w-full relative left-0 right-0 mx-auto '>
                <img className='h-60 w-2/3' src={img2} alt="" />
                <img className='ml-20 sm:ml-40 -mt-32 h-60 w-2/3' src={img1} alt="" />
                <div className='absolute hover:scale-110 -mt-32  ml-6 flex gap-2 px-10 py-2 sm:py-6 bg-white border-4 w-fit border-l-nevy-blue duration-500 transition-all sm:flex-nowrap sm:flex-row flex-col'>
                    <h2 className='text-3xl text-red-600 font-bold' >25</h2>
                    <h2 className=' '>We Have More Than years of Experience</h2>
                </div>
                </div>

     
            <div className=' px-10  mt-10 sm:mt-0'>
                  <h2 className='text-2xl font-semibold uppercase mb-4'>Crafting Excellence Since 25 Years</h2>
                  <p className='text-xl '>For 25 years, Sentinel Trust Bank has been synonymous with excellence. Since our inception, we have continually evolved to meet the dynamic needs. Our seasoned team of professionals brings a wealth of experience, ensuring that every project we undertake is executed with precision, creativity, and a commitment to surpassing expectations.</p>
            </div>
           </div>
        </div>
       </div>
    );
};

export default AboutCompany;
