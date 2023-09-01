import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Login() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const response = await login({
        variables: { ...userFormData },
      });

      Auth.login(response.data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
    //   username: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <section className="login-page">
        <HeroPages name="login" />
        <div className="container">
          <div className="login-div">
            <div className="login-div__text">
              <h2>LOGIN/SIGIN</h2>
              <p>Login below with your email and password</p>
              <div className="login-div__form">
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
                    Something went wrong with your login credentials!
                  </Alert>
                  <label>
                    <b>EMAIL *</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Your email"
                    name="email"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                  ></input>

                  <label>
                    <b>PASSWORD *</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Your password"
                    name="password"
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                  ></input>

                  <Button
                    disabled={!(userFormData.email && userFormData.password)}
                    type="submit"
                    variant="success"
                  >
                    Submit
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
export default Login;
