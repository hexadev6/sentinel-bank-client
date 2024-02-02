import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FaUser, FaEnvelope, FaFileImage, FaLock } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import signup from '../../assets/banner/signup.jpg'

import { sendEmailVerification } from "firebase/auth";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  radious: 20px;
  background-color: #fffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 0.875rem;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
  padding-right: 30px;

  &:focus {
    border-color: #4caf50;
  }
`;

const FileInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
  cursor: pointer;

  &:focus {
    border-color: #4caf50;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
  padding-right: 30px;

  &:focus {
    border-color: #4caf50;
  }
`;

const PasswordIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
`;

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const RegistrationForm = () => {
  const { userSignUp, UserProfileUpdate } = useAuth();
  const { register, handleSubmit, reset,setValue } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    const accepted= data.terms.checked;
    console.log(data);

    // image update goes here
    const imgFile = { image: data.image[0] };
    console.log(imgFile);

    const imgRes = await axios.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    // if image upload success then register user
    if (imgRes.data.success && !accepted) {
      await userSignUp(data.email, data.password)
        .then((result) => {
          console.log("user create", result.user)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User created Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          if (result.user.emailVerified === false) {
            sendEmailVerification(result.user)
              .then(() => {
                if (result.user) {
                  UserProfileUpdate(data.name, imgRes.data.data.display_url)
                    .then(async (result) => {
                      const res = await axiosPublic.post("/createUser", {
                        email: data.email,
                        name: data.name,
                        image: imgRes.data.data.display_url,
                      });
                      console.log(res);
                      if(res.data.success) alert('user created succesfully!')
                    })
                    .catch((error) => console.log(error));
                }
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            console.log("homepage");

            // navigate(location?.state ? location.state : "/")
          }
          reset()
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("something error occurred in uploading image");
    }
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   // You can handle file validation and preview logic here if needed
  //   setValue('image', file);
  // };

  return (
   <div  >





<FormContainer   >
     
      <StyledForm className="" onSubmit={handleSubmit(onSubmit)}>
        

        <div className=" bg-white">
        <div className="p-4">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Sentinel Trust Bank.</h2>
        <h2 className="mb-4">Already have an account? please <Link className='bg-blue-200 p-1 rounded font-bold hover:rounded-xl' to='/login'>login</Link> </h2>
        <InputContainer>
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            id='name'
            placeholder="Your name"
            {...register("name", { required: "Name is required" })}
          />
          <PasswordIcon>
            <FaUser />
          </PasswordIcon>
        </InputContainer>

              <InputContainer>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='email'
                  id='email'
                  placeholder='Your email'
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <PasswordIcon>
                  <FaEnvelope />
                </PasswordIcon>
              </InputContainer>

              <InputContainer>
                <Label htmlFor='password'>Password</Label>
                <PasswordInput
                  type='password'
                  id='password'
                  placeholder='Your password'
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <PasswordIcon>
                  <FaLock />
                </PasswordIcon>
              </InputContainer>

        <InputContainer>
          <Label htmlFor='image'>Image</Label>
          <FileInput
            type='file'
            id='image'
            accept='image/*'
            // onChange={handleImageChange}
            {...register("image", { required: "image is required" })}
          />
       
        </InputContainer>
        <InputContainer>
        <input type="checkbox" name="terms"  {...register("terms", {
              required: "Accept terms and condition.",
            })} id="terms" />
        <label className="ml-2" htmlFor="terms">Accept our terms and conditions.</label>
        </InputContainer>
        <Button className="bg-nevy-blue" type='submit'>
          Registration
        </Button>
        </div>
        
        </div>
      </StyledForm>
    </FormContainer>
   
     
   </div>
  );
};

export default RegistrationForm;
