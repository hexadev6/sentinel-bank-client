import icon from '../assets/icons/bank.svg'

const Logo = () => {
  return (
    <div className='flex items-center'>
      <img className='w-12 h-12' src={icon} />
      <div className='flex flex-col'>
        <h2 className='font-bold text-xl'>Sentinel</h2>
        <h4 className='font-medium tracking-widest -mt-2'>Trust Bank</h4>
      </div>
    </div>
  );
};

export default Logo;
