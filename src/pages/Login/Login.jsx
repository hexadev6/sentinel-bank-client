
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaFileImage, FaLock } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import bgimg from '../../assets/banner/new.png'
import Logo from '../../utility/Logo';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 550px;
  height:400px;
  background-color:#F5F5F5;
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



const Login = () => {
  const {userLogin}= useAuth();
  const { register, handleSubmit, setValue } = useForm();
  const location= useLocation()
  const navigate = useNavigate()
  

  const onSubmit = (data) => {
    console.log(data);
    userLogin(data.email,data.password)
    .then(result=>{
      console.log(result.user);
      navigate(location?.state ? location.state : "/")
    })
    .catch(err=>{
      console.log(err);
    })
    
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   // You can handle file validation and preview logic here if needed
  //   setValue('image', file);
  // };

  

  return (
    <FormContainer>
         
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-2 gap-6'>
      <div className='p-4'>
      <h2 className="text-3xl font-semibold mb-6">Login</h2>

       

<InputContainer>
  <Label htmlFor="email">Email</Label>
  <Input
    type="email"
    id="email"
    placeholder='Your email'
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




<Button color="green" type="submit">login</Button>
      </div>
      <div className="flex right-5 ">
          <img className="relative w-full h-[400px]" src={bgimg} alt="" />
          <div className="absolute py-12 mx-12"><Logo/></div>
        </div>
      </div>

       
      </StyledForm>
    </FormContainer>
  );
};

export default Login;
