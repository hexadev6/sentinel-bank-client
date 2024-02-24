import { useState } from "react";
import EmailVerify from "../../pages/EmailVerify/EmailVerify";
import RegistrationForm from "../../pages/Registration/Registration";
import Login from "../../pages/Login/Login";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleStepComplete = () => {
    if (currentStep < totalStep) {
      setCurrentStep(currentStep + 1);
      // console.log('before',currentStep,totalStep);
    }
  };

  const totalStep = 3;
  const PageDisplay = () => {
    if (currentStep === 1) {
      return (
        <RegistrationForm onComplete={handleStepComplete}></RegistrationForm>
      );
    } else if (currentStep === 2) {
      return <EmailVerify onComplete={handleStepComplete}></EmailVerify>;
    } else {
      return <Login onComplete={handleStepComplete}></Login>;
    }
  };
  return (
    <div className="">
      <div className="w-full px-5  py-4">
        <div className="bg-white w-fit mx-auto p-8 gap-6 flex flex-wrap lg:grid grid-cols-3 justify-center border-b-2 border-b-nevy-blue">
          <h2
            className={`font-bold text-xl ${
              currentStep >= 1 ? "text-nevy-blue" : "text-black"
            }`}
          >
            01 <span>Registration</span>
          </h2>
          <h2
            className={`font-bold text-xl ${
              currentStep >= 2 ? "text-nevy-blue" : "text-black"
            }`}
          >
            02 <span>Email Verify</span>
          </h2>
          <h2
            className={`font-bold text-xl ${
              currentStep >= 3 ? "text-nevy-blue" : "text-black"
            }`}
          >
            03 <span>Login</span>
          </h2>
        </div>
        <div className="my-6">
          {/* <UnderlineTabs/> */}
          {PageDisplay()}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
