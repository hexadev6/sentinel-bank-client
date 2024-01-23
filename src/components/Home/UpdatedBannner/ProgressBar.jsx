import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prevProgress + 1;
      });
    }, [10]); // Adjust the interval for the animation speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-full h-2 rounded overflow-hidden'>
      <div
        className='h-full bg-green-500 transition-all duration-100 ease-in-out'
        style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
