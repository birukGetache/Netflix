import React, { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

// Styled components with Emotion and Styled System integration
const FormContainer = styled.form`
  /* Your styles here */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Define your React form component
const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send form data to backend using REST API
      await axios.post('http://localhost:4000/home', formData);
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="username">Usernames:</Label>
        <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default Form;
