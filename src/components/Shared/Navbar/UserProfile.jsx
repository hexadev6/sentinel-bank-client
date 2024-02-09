import { Button, Spinner } from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";
import CommonBanner from "../CommonBanner/CommonBanner";
import Container from "../container/Container";
import useStatus from "../../../Hooks/useStatus";
import UserDialog from "../../UserDialog/UserDialog";
import img1 from '../../../assets/banner/debit.jpg'
import { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UserProfile = () => {
    const {user}= useAuth()
    const userEmail = user?.email;
    const { userinfo, refetch, error } = useStatus({ email: userEmail });
    const [image,setImage]= useState("")

    const inputRef=useRef(null)
    const handleImageClick=()=>{
        inputRef.current.click()
        
    }
const handleImageChange=async(event)=>{
    const file = event.target.files[0]

    setImage(event.target.files[0])
    // const imgFile = { image: data.image };
    //     console.log(imgFile);
    
    //     const imgRes = await axios.post(image_hosting_api, imgFile, {
    //       headers: {
    //         "content-type": "multipart/form-data",
    //       },
    //     });
    //     console.log(imgRes);
        // if(imgRes.data.success){
        //     setImage(imgFile)
        // }
    
}
  

    
    return (
        <div className="min-h-screen mb-10">
            <div className="relative">
                <CommonBanner img={img1}></CommonBanner>
              
            </div>
            <Container>
            <div>
            <div className="flex gap-6 absolute mx-44 -mt-60 w-2/3 h-[450px] rounded-md bg-blue-100 border mb-10">
                    <div>
                        {
                            image? <img className="w-80 h-80 " src={URL?.createObjectURL(image)} alt="" />  : 
                            <img className="w-80 h-96 " src={userinfo?.image} alt="" />
                        }
                        <div className="relative ml-64 -mt-12" onClick={handleImageClick}>
                            
                        <svg className="w-10 h-10" fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 487 487" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"></path> </g> </g> </g></svg>
                    
                    <input onChange={handleImageChange} className="hidden" type="file" ref={inputRef}/>
                </div>
               
                

                    </div>
                    <div className="py-10 space-y-3">
                        <h2>Account No: <span></span> </h2>
                        <h2>Username: <span> {userinfo?.name}</span> </h2>
                        <h2>Date of Birth:{userinfo?.DOB} </h2>
                        <h2>Email: <span>{userinfo?.email} </span> </h2>
                        <h2>Mobile: <span>{userinfo?.mobile} </span> </h2>
                        <h2>Location: <span>{userinfo?.location} </span> </h2>
                        <h2>Nationality: {userinfo?.nationality} </h2>
                        <div className=" pt-24 pl-16"><UserDialog userinfo={userinfo} refetch={refetch}></UserDialog></div>
                    </div>

                </div>
                
            </div>
                
            </Container>
        </div>
    );
};

export default UserProfile;