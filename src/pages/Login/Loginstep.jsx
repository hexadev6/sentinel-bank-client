import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../Firebase/Firebase.config';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Button } from 'react-scroll';





const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  height:500px;
  background-color:#Fffff;
  border-radius: 8px;
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
  Right: 10px;
`;


const Loginstep = () => {
    const {userLogin}= useAuth();
    const { register, handleSubmit, setValue } = useForm();
    // const emailRef= useRef(null)
    const [email,setEmail]= useState(null)
    const location= useLocation()
    const navigate = useNavigate()


    const handlePassReset=()=>{
        console.log('email reset',email);
        sendPasswordResetEmail(auth,email)
        .then(result=>{
          console.log(result.user);
        })
        .catch(err=>{
          console.log(err);
        })
      }
     
    
      const onSubmit = (data) => {
        console.log(data);
        setEmail(data.email)
        console.log(email);
        userLogin(data.email,data.password)
        .then(result=>{
          if(result.user.emailVerified){
          navigate(location?.state ? location.state : "/")
          }
          else{
            Swal.fire("please Verify your email");
          }
        })
        .catch(err=>{
          console.log(err);
        })
        
      };
    return (
        <FormContainer>
         
         <StyledForm className='bg-white' onSubmit={handleSubmit(onSubmit)}>
         <div>
         <div className='p-4'>
           <h2 className="text-3xl font-semibold mb-4">Welcome to Sentinel Trust Bank.</h2>
           <h2 className='text-sm mb-4'>If you don't have any acount. It's simple to <Link className=' p-1 rounded bg-blue-200 font-bold hover:rounded-xl' to='/registration'> create your account</Link></h2>
         {/* <h2 className="text-3xl font-semibold mb-6">Login</h2> */}
   
          
   <InputContainer>
     <Label htmlFor="email">Email</Label>
     <Input
  type="email"
  id="email"
  placeholder='Your email'
  // ref={emailRef}
  {...register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address',
    },
    
  })}
/>

     <PasswordIcon>
       <FaEnvelope />
     </PasswordIcon>
   </InputContainer>
   
   
     <InputContainer>
       <Label htmlFor="password">Password</Label>
       <PasswordInput
         type="password"
         id="password"
         placeholder='Your password'
         {...register('password', { required: 'Password is required' })}
       />
       <PasswordIcon>
         <FaLock />
       </PasswordIcon>
     </InputContainer>
   
   
   
     <h2 onClick={handlePassReset}  className='mb-2'>Forgot password?</h2>
   <Button className='bg-nevy-blue p-2 rounded-lg text-white' type="submit">login</Button>
   
   
   
         </div>
         </div>
   
          
         </StyledForm>
       </FormContainer>
    );
};

export default Loginstep;