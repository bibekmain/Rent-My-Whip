import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Form, Button, Alert, Input } from 'react-bootstrap';

import {useMutation}  from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Register = () => {
// set initial form state
const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
// set state for form validation
const [validated] = useState(false);
// set state for alert
const [showAlert, setShowAlert] = useState(false);
const [addUser, { error }] = useMutation(ADD_USER)

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUserFormData({ ...userFormData, [name]: value });
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  // check if form has everything (as per react-bootstrap docs)
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  try {
    const response = await addUser({
      variables: {...userFormData}
    })

    // if (!response.ok) {
    //   throw new Error('something went wrong!');
    // }

    // const { token, user } = await response.json();
    console.log(response.data.addUser.token);
    Auth.login(response.data.addUser.token);
  } catch (err) {
    console.error(err);
    setShowAlert(true);
  }

  setUserFormData({
    username: '',
    email: '',
    password: '',
  });
};

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleFormSubmit} layout="vertical" className="login-form p-5" >
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>
            <h1>Register</h1>
            <hr />
            <Form.Item
              type='text'
              placeholder='Your username'
              name='username'
              onChange={handleInputChange}
              value={userFormData.username}
              required
            >
              <Input />
            </Form.Item>
            <Form.Item
              type='email'
              placeholder='Your email address'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            >
              <Input />
            </Form.Item>
            <Form.Item
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            >
              <Input />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Register</button>
            <br />

            <Link to="/login">Click Here to Login</Link>
      </Form>  
    </>
  );
};


export default Register;