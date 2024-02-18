
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaFileImage, FaLock } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgimg from '../../assets/banner/aerial-view-suzhou-overpass.jpg'
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../Firebase/Firebase.config';
import Swal from 'sweetalert2';
// import Logo from '../../utility/Logo';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  height:450px;
  background-color:#Fffff;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  
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

`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
  padding-right: 30px;

  
`;

const PasswordIcon = styled.span`
  position: absolute;
  top: 55%;
  right: 10px;
`;

const Login = () => {
  const {userLogin}= useAuth();
  const { register, handleSubmit, setValue,reset } = useForm();
  // const emailRef= useRef(null)
  const [email,setEmail]= useState(null)
  const [pass,setPass] =useState('')
  const location= useLocation()
  const navigate = useNavigate()
  

  
  const handlePassReset=()=>{
    // console.log('email reset',email);
    sendPasswordResetEmail(auth,email)
    .then(result=>{
      Swal.fire({
        text: "Please check your email to Reset Password.",
      });
      // console.log(result.user);
    })
    .catch(err=>{
      console.log(err);
    })
  }
 

  const onSubmit = (data) => {
    // console.log(data);
    // email getting
    setEmail(data.email)
    // console.log(email);
   // error handle
    setPass('')
    // user login
    userLogin(data.email,data.password)
    .then(result=>{
      if(result.user.emailVerified){
      navigate(location?.state ? location.state : "/")
      }
      else{
        Swal.fire("please Verify your email");
      }
      reset()
    })
    .catch(err=>{
      console.log(err);
      setPass(err.message)
    })
    
    
  };


  return (
    <div>
      <FormContainer>
         
         <StyledForm className="border border-nevy-blue" onSubmit={handleSubmit(onSubmit)}>
         <div>
         <div className='p-10'>
           <h2 className="text-3xl font-semibold mb-4">Welcome to Sentinel Trust Bank.</h2>
           <h2 className='text-sm mb-4'>If you don't have any acount. It's simple to <Link className=' p-1 text-nevy-blue transition-all duration-300  hover:underline' to='/registration'> create your account</Link></h2>
         {/* <h2 className="text-3xl font-semibold mb-6">Login</h2> */}
   
          
   <InputContainer>
     <Label htmlFor="email">Email</Label>
     <Input
     className="focus:border-nevy-blue"
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
       className="focus:border-nevy-blue"
         type="password"
         id="password"
         placeholder='Your password'
         {...register('password', { required: 'Password is required' })}
       />
       <PasswordIcon>
         <FaLock />
       </PasswordIcon>
     </InputContainer>
   
   {
    pass && <p className='text-red-600 font-bold'>{pass}</p>
   }
   
     
     <h2 className='my-2'><a onClick={handlePassReset}  href="#" >Forgot password?</a></h2>
   <Button className='w-full bg-nevy-blue' type="submit">login</Button>
   
   
   
         </div>
         </div>
   
          
         </StyledForm>
       </FormContainer>
      
    </div>
  );
};

export default Login;
