import useAuth from "../../../Hooks/useAuth";
import CommonBanner from "../CommonBanner/CommonBanner";
import Container from "../container/Container";
import useStatus from "../../../Hooks/useStatus";
import UserDialog from "../../UserDialog/UserDialog";
import img1 from "../../../assets/banner/debit.jpg";
import { useRef } from "react";
import multiImgUpload from "../../../Hooks/multiImgUpload";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UserProfile = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const { userinfo, refetch } = useStatus({ email: userEmail });
  const axiosSecure = useAxiosSecure();
  //   const axiosSecure = useAxiosPublic();

  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const HandleImageChange = async (e) => {
    const profileImg = e.target.files[0];
    const photo = await multiImgUpload(profileImg);
    // console.log(photo);
    await axiosSecure
      .patch(`/updateUser/${userinfo?._id}`, { image: photo })
      .then((res) => {
        // console.log("after patch", res?.data);
        if (res?.data.message == "success") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" mb-10">
      <div className="relative">
        <CommonBanner img={img1}></CommonBanner>

        <div className="flex md:flex-nowrap flex-wrap justify-between items-center gap-6 absolute w-full sm:w-fit p-5  mx-auto left-0 right-0 bottom-[-43rem] md:-bottom-80 rounded-md bg-blue-100 border mb-10">
            <div className="relative w-auto  md:w-full">
              <img className="w-80 h-96  " src={userinfo?.image} alt="" />

              <div className="absolute bottom-2 right-4  " onClick={handleImageClick}>
                {/* Icon for image upload */}
                <svg
                  className="w-10 h-10"
                  fill="#000000"
                  height="200px"
                  width="200px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 487 487"
                >
                  <g id="SVGRepo_bgCarrier"></g>
                  <g id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                {/* input for taking file */}
                <input
                  required
                  className="hidden"
                  type="file"
                  id="file"
                  name="photo"
                  accept="image/*"
                  onChange={HandleImageChange}
                  ref={inputRef}
                />
              </div>
            </div>
            <div className="py-10 space-y-3 w-full">
              <h2>
                Name: <span> {userinfo?.name}</span>{" "}
              </h2>
              <h2>Date of Birth:{userinfo?.DOB} </h2>
              <h2>
                Email: <span>{userinfo?.email} </span>{" "}
              </h2>
              <h2>
                Mobile: <span>{userinfo?.mobile} </span>{" "}
              </h2>
              <h2>
                Location: <span>{userinfo?.location} </span>{" "}
              </h2>
              <h2>Nationality: {userinfo?.nationality} </h2>
              <div className="  ">
                <UserDialog userinfo={userinfo} refetch={refetch}></UserDialog>
              </div>
            </div>
          </div>

      </div>
      
    </div>
  );
};

export default UserProfile;
