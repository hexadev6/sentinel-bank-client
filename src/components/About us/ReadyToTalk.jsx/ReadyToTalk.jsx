import call from "../../../assets/banner/icons8-calling-66.png";

const ReadyToTalk = () => {
  return (
    <div className="w-full text-white bg-[#4d774e] pt-10 pb-36">
      <h2 className="text-3xl py-4  text-center">Ready To Talk?</h2>
      <p className="text-center text-lg">
        Our team is here to answer your question about Sentinel Trust Bank.
      </p>
      <div className="my-2 flex flex-col lg:flex-row justify-center items-center gap-2">
        {/* Link Contact us page */}
        <button className="btn bg-red-600 text-white hover:bg-red-800 p-2 rounded-lg">
          Contact Us
        </button>
        {/* Link page to get start */}
        <h2 className="hover:underline">
          or,now get started now with a free trial
        </h2>
      </div>
      <h2 className="text-xl text-center">
        More Than 1.5 million business and organization use STB.
      </h2>
    </div>
  );
};

export default ReadyToTalk;
