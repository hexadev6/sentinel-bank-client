
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaFileImage, FaLock } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  transform: translateY(-50%);
`;



const RegistrationForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  

  const onSubmit = (data) => {
    console.log(data);
    // You can handle form submission logic here
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can handle file validation and preview logic here if needed
    setValue('image', file);
  };

  

  return (
    <FormContainer>
         
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-semibold mb-6">Register</h2>

        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          <PasswordIcon>
            <FaUser />
          </PasswordIcon>
        </InputContainer>

        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
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
              {...register('password', { required: 'Password is required' })}
            />
            <PasswordIcon>
              <FaLock />
            </PasswordIcon>
          </InputContainer>
       

        <InputContainer>
          <Label htmlFor="image">Image</Label>
          <FileInput
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <PasswordIcon>
            <FaFileImage />
          </PasswordIcon>
        </InputContainer>

        <Button color="green" type="submit">Registration</Button>

       
      </StyledForm>
    </FormContainer>
  );
};

export default RegistrationForm;