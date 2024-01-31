import React, { useState } from "react";
import CreateAccLayout from "../../components/DashBoard/Account Create/CreateAccLayout";
import useAuth from "../../Hooks/useAuth";
import multiImgUpload from "../../Hooks/multiImgUpload";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import swal from "sweetalert";

const CreateAcc = () => {
  const { user } = useAuth();
  const [minAge, setMinAge] = useState("");
  const [showImg, setShowImg] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

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

  const HandleUpload = (e) => {
    const imgfiles = e.target.files;
    const seletedImgList = Array.from(imgfiles);
    setShowImg(seletedImgList);
  };
  const HandleProfileImg = (e) => {
    const profileImg = e.target.files;
    setProfileImg(profileImg[0]);
  };

  const HandleCreateAcc = async (e) => {
    setLoading(true);
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
        holderName: holder_name, //text
        holderEmail: email, //text
        holderDOB: holder_dob, //date
        age: age, //number
        gender: holder_gender, //text
        nationality: nationality, //text
        occupation: occupation, //text
        phnNumber: phnNumber, //number
        address: address, //text
        type: type, //text
        income_source: income, //text
        initial_deposit: initial_deposit, //number
        nidnumber: nidnumber, //number
        reference: reference, //number
        nominee: nominee, //text
        documents: selectedImg, //array
        profileImg: photo, //
      };

      axiosPublic
        .post("/createBankAccount", accountInfo)
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          if (res.data.success === true) {
            swal(
              "Wait..",
              "Your new account application are in process.You will be get notify after complete the process.",
              "success"
            );
          } else {
            swal("Sorry!", res.data.error.message, "error");
          }
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(accountInfo);
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
        profileImg={profileImg}
        setProfileImg={setProfileImg}
        HandleProfileImg={HandleProfileImg}
      />
    </div>
  );
};

export default CreateAcc;
