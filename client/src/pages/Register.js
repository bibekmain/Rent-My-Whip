import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Form, Button, Alert } from "react-bootstrap";

function Register() {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

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
        variables: { ...userFormData },
      });

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
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <section className="register-page">
        <HeroPages name="register" />
        <div className="container">
          <div className="register-div">
            <div className="register-div__text">
              <h2>REGISTER</h2>
              <p>Register or create your account here</p>
              <div className="register-div__form">
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleFormSubmit}
                >
                  <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                  >
                    Something went wrong with your signup!
                  </Alert>
                  <label>
                    <b>USERNAME *</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    onChange={handleInputChange}
                    value={userFormData.username}
                  ></input>

                  <label>
                    <b>EMAIL *</b>
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    name="email"
                    onChange={handleInputChange}
                    value={userFormData.email}
                  ></input>

                  <label>
                    <b>PASSWORD *</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleInputChange}
                    value={userFormData.password}
                  ></input>

                  <Button
                    type="submit"
                    disabled={
                      !(
                        userFormData.username &&
                        userFormData.email &&
                        userFormData.password
                      )
                    }
                    variant="success"
                  >
                    <i className="fa-solid fa-envelope-open-text"></i>&nbsp;
                    REGISTER
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
export default Register;
