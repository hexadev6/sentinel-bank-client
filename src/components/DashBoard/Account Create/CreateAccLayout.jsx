import {
  Checkbox,
  Input,
  Option,
  Popover,
  PopoverContent,
  PopoverHandler,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const CreateAccLayout = ({
  HandleCreateAcc,
  HandleAge,
  minAge,
  HandleUpload,
  showImg,
  setShowImg,
  loading,
  profileImg,
  setProfileImg,
  HandleProfileImg
}) => {
  const [isClicked, setIsClicked] = useState(true);
  const handleTerms = () => {
    setIsClicked(!isClicked);
    setIsClicked(!isClicked);
  };

  const HandleDeleteImg = (imgID) => {
    const afterDelete = showImg.filter((data) => data !== imgID);
    setShowImg(afterDelete);
  };
  return (
    <div className="col-span-5 p-10 shadow-lg">
      <div>
        <Typography variant="h4" color="blue-gray" className="text-nevy-blue">
          Open a Bank Account
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Start your journey to a seamless experience by
          opening a bank account with us today!.
        </Typography>
        <form className="mt-8 mb-2" onSubmit={HandleCreateAcc}>
          <div className="mb-1 flex flex-col gap-3">
            {/* Personal info */}
            <Typography
              variant="h6"
              color="blue-gray"
              className=" text-lg font-normal"
            >
              Personal Information
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-between  items-start">
              <div className="flex flex-col gap-3">
                {/* account holder name */}
                <input
                  label="Full legal name"
                  color="indigo"
                  name="holder_name"
                  type="text"
                  required
                  placeholder="account holder name"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
              <div className="flex flex-col gap-3 ">
                {/* holder dob  */}
                <input
                  required
                  label="Date of birth"
                  color="indigo"
                  name="dob"
                  type="date"
                  placeholder="NID DOB"
                  className="  py-2 px-4 border rounded outline-0 "
                  onChange={HandleAge}
                />
                {minAge != "" && <span className="text-red-500">{minAge}</span>}
              </div>
              <div className="flex flex-col gap-3 ">
                {/* holder gender */}
                <select
                  required
                  color="indigo"
                  label="Gender"
                  name="gender"
                  className="p-2 rounded border focus:border-indigo-400 outline-0"
                >
                  <option selected disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-between  items-center">
              <div className="flex flex-col gap-3">
                {/* nationality */}
                <input
                  required
                  label="Nationality"
                  color="indigo"
                  type="text"
                  name="nationality"
                  placeholder="nationality e.g. Bangladeshi"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* Occupation */}
                <input
                  required
                  label="Occupation"
                  color="indigo"
                  name="occupation"
                  type="text"
                  placeholder="occupation e.g. student/teacher/housewife"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
            </div>

            {/* Contact info */}
            <Typography
              variant="h6"
              color="blue-gray"
              className=" text-lg font-normal"
            >
              Contact Information
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between  items-center">
              <div className="flex flex-col gap-3 ">
                {/* Residential address */}
                <input
                  required
                  label="Residential address"
                  color="indigo"
                  name="address"
                  type="text"
                  placeholder="residential address e.g Mirpur,Dhaka"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* Phone number  */}
                <input
                  required
                  label="Phone number"
                  color="indigo"
                  name="phnNumber"
                  type="number"
                  placeholder="phone number e.g 017XXXXXXX"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <select
                  required
                  color="indigo"
                  label="Account type"
                  name="type"
                  className="p-2 rounded border focus:border-indigo-400 outline-0"
                >
                  <option selected disabled>
                    Select account type
                  </option>
                  <option value="Savings">Savings Account</option>
                  <option value="Checking">Checking Account</option>
                  <option value="Retirement">Retirement Account</option>
                  <option value="Joint">Joint Account</option>
                  <option value="Business">Business Account</option>
                  <option value="Student">Student Account</option>
                </select>
              </div>
            </div>

            {/* Financial info */}
            <Typography
              variant="h6"
              color="blue-gray"
              className=" text-lg font-normal"
            >
              Financial Information
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-between  items-center">
              <div className="flex flex-col gap-3">
                {/* Source of income */}
                <input
                  required
                  label="Source of income"
                  color="indigo"
                  type="text"
                  name="income"
                  placeholder="Source of income e.g Business"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* deposit */}
                <input
                  required
                  label="Initial Deposit"
                  color="indigo"
                  type="number"
                  name="deposit"
                  placeholder="initial deposit e.g 500 "
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
            </div>

            {/* Security */}
            <Typography
              variant="h6"
              color="blue-gray"
              className=" text-lg font-normal"
            >
              Identification Information
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-between  items-center">
              <div className="flex flex-col gap-3">
                {/* Your NID Number */}
                <input
                  required
                  label="Your NID Number"
                  color="indigo"
                  type="number"
                  name="nidnumber"
                  placeholder="NID Number e.g 3245856934"
                  className="  py-2 px-4 border rounded-md outline-0"
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* reference account number */}
                <input
                  required
                  label="Reference Account Number"
                  color="indigo"
                  type="number"
                  name="reference"
                  placeholder="reference account no. e.g 4478765416"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* Nominee Name */}
                <input
                  required
                  label="Nominee Name"
                  color="indigo"
                  type="text"
                  name="nominee"
                  placeholder="nominee name"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
            </div>

            {/* Security documents*/}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-between  items-start">
              <div className="flex flex-col gap-3">
                {/* Your  uploaded file */}
                <label htmlFor="Profile" className="">
                  Upload your Passport picture
                </label>
                <input
                  required
                  type="file"
                  id="Profile"
                  name="photo"
                  accept="image/*"
                  className=" border rounded p-2"
                  onChange={HandleProfileImg}
                />
                   <div className="flex gap-4 items-center col-span-3">
                  {profileImg &&
                      <div className="w-20 h-20 relative">
                      <img
                        required
                        src={
                          profileImg instanceof File ? URL.createObjectURL(profileImg) : profileImg
                        }
                        alt=""
                        accept="image/*"
                        className="w-full h-full rounded"
                      />
                      
                    </div>}
                </div>
              </div>
              <div className="flex flex-col gap-3  ">
                <label htmlFor="documents">
                  Upload your documents(like utility bill, NID/ TIN etc)
                </label>
                <div className="flex flex-col gap-3">
                  {/* Your  uploaded file */}
                  <input
                    required
                    type="file"
                    id="documents"
                    name="documents"
                    multiple
                    accept="image/*"
                    className=" border rounded p-2"
                    onChange={HandleUpload}
                  />
                </div>
                <div className="flex gap-4 items-center col-span-3">
                  {showImg &&
                    showImg.map((img) => (
                      <div className="w-20 h-20 relative">
                        <img
                          required
                          src={
                            img instanceof File ? URL.createObjectURL(img) : img
                          }
                          alt=""
                          accept="image/*"
                          className="w-full h-full rounded"
                        />
                        <IoCloseOutline
                          onClick={() => HandleDeleteImg(img)}
                          className="cursor-pointer text-white text-xl absolute top-2 right-2"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* Terms & condition */}
            <div className="flex items-start md:items-center mt-6">
              <Checkbox
                required
                color="indigo"
                className="rounded p-0"
                defaultChecked
                onClick={handleTerms}
              />
              <span>
                By clicking "Create Account," you confirm that you have read,
                understood, and agree to abide by the following terms and
                conditions.
                <Popover>
                  <PopoverHandler>
                    <span className="text-nevy-blue font-bold cursor-pointer ">
                      Terms & condition
                    </span>
                  </PopoverHandler>
                  <PopoverContent>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className=" text-lg  font-bold mb-5 text-center"
                    >
                      Terms & condition
                    </Typography>

                    <div className="flex flex-col gap-3 col-span-3 ml-6  mt-10">
                      <span>
                        1.To create an account, you must meet the eligibility
                        criteria established by Sentinel Trust Bank
                      </span>
                      <span>2.You must be at least 18 years old</span>
                      <span>
                        3.You agree to provide accurate and up-to-date
                        information during the account creation process.
                      </span>
                      <span>
                        4.Sentinel Trust Bank reserves the right to verify the
                        information provided.
                      </span>
                      <span>
                        5.You are responsible for maintaining the
                        confidentiality of your account login credentials.
                      </span>
                      <span>
                        6.Notify Sentinel Trust Bank immediately of any
                        unauthorized access to your account.
                      </span>
                      <span>
                        7.Prohibited activities include, but are not limited to,
                        fraud, money laundering, and unauthorized access.
                      </span>
                      <span>
                        8.You agree not to engage in any illegal activities
                        using your account..
                      </span>
                      <span>9.Your account is for personal use only.</span>
                      <span>
                        10.Sentinel Trust Bank reserves the right to restrict or
                        terminate your account if it is used in violation of
                        these terms.
                      </span>
                      <span>
                        11.Sentinel Trust Bank may communicate with you through
                        email, phone, or other channels for account-related
                        matters.
                      </span>
                      <span>
                        12. You may opt out of certain communications by
                        adjusting your account settings.
                      </span>
                      <span>
                        13.By creating an account, you agree to pay all
                        applicable fees.
                      </span>
                      <span>
                        14.You agree to comply with all applicable laws and
                        regulations.
                      </span>
                    </div>
                  </PopoverContent>
                </Popover>
              </span>
            </div>
          </div>

          {/* submit button */}
          <div className="flex justify-end">
            {isClicked && minAge === "" ? (
              loading ? (
                <button
                  variant="text"
                  disabled
                  className="border py-2 px-4 hover:text-white mt-3  rounded bg-gray-400 text-white"
                >
                  <Spinner color="white" className="inline"/><span> Creating...</span>
                </button>
              ) : (
                <button
                  variant="text"
                  className="border  hover:bg-black py-2 px-4 hover:text-white mt-3  rounded bg-nevy-blue text-white"
                >
                  Create bank account
                </button>
              )
            ) : (
              <button
                variant="text"
                disabled
                className="border py-2 px-4 hover:text-white mt-3  rounded bg-gray-400 text-white"
              >
                Create bank account
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccLayout;
