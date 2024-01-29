import React, { useState } from "react";
import CreateAccLayout from "../../components/DashBoard/Account Create/CreateAccLayout";
import useAuth from "../../Hooks/useAuth";
import multiImgUpload from "../../Hooks/multiImgUpload";

const CreateAcc = () => {
  const { user } = useAuth();
  const [minAge, setMinAge] = useState("");
  const [showImg, setShowImg] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const HandleAge = (e) => {
    const holder_dob = e.target.value;
    const ageDiff =
      new Date().getFullYear() - new Date(holder_dob).getFullYear();

    if (ageDiff >= 18) {
      setMinAge("");
    } else {
      setMinAge("Age should be minimum 18");
    }
  };

  const HandleUpload=(e)=>{
    const imgfiles = e.target.files
    const seletedImgList = Array.from(imgfiles)
    setShowImg(seletedImgList);
  }

  const HandleCreateAcc = async(e) => {
    setLoading(true)
    e.preventDefault();

    const email = user?.email;
    const form = e.target;
    const holder_name = form.holder_name.value;
    const holder_dob = form.dob.value;
    const ageDiff =
      new Date().getFullYear() - new Date(holder_dob).getFullYear();
    const age = ageDiff;
    const holder_gender = form.gender.value;
    const nationality = form.nationality.value;
    const occupation = form.occupation.value;
    const phnNumber = form.phnNumber.value;
    const address = form.address.value;
    const type = form.type.value;
    const income = form.income.value;
    const initial_deposit = form.deposit.value;
    const nidnumber = form.nidnumber.value;
    const reference = form.reference.value;
    const nominee = form.nominee.value;
    const image = form.photo.files[0];
    const photo = await multiImgUpload(image);

    try {

        const selectedImg = await Promise.all(
            showImg.map((img) => multiImgUpload(img))
        );
    
        const accountInfo = {
            holderName: holder_name,
            holderEmail: email,
            holderDOB: holder_dob,
            age: age,
            gender: holder_gender,
            nationality: nationality,
            occupation: occupation,
            phnNumber: phnNumber,
            address: address,
            type: type,
            income_source: income,
            initial_deposit: initial_deposit,
            nidnumber: nidnumber,
            reference: reference,
            nominee: nominee,
            documents:selectedImg,
            profileImg:photo
          };
          console.log(accountInfo);
          setLoading(false)
      } catch (error) {
        console.error("Error during image upload:", error);
      }


  };
  return (
    <div className="p-4">
      <CreateAccLayout
        HandleCreateAcc={HandleCreateAcc}
        HandleAge={HandleAge}
        minAge={minAge}
        HandleUpload={HandleUpload}
        showImg={showImg}
        setShowImg={setShowImg}
        loading={loading}
      />
    </div>
  );
};

export default CreateAcc;
