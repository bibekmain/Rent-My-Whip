// inside src/Login.jsx

import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };
    return (
        <>
            <section className="login-page">
            <HeroPages name="login" />
        <div className="container">
          <div className="login-div">
            <div className="login-div__text">
              <h2>LOGIN/SIGIN</h2>
              <p>
               Login below with your username , email and password 
              </p>
            <div className="login-div__form">
                <form >
                    <label>
                    <b>USERNAME *</b> 
                    </label>
                    <input type="text" placeholder="Enter Username" />
                    
                    <label>
                        <b>EMAIL *</b>
                    </label>
                    <input type="email" placeholder="youremail@example.com" ></input>

                    <label>
                        <b>PASSWORD *</b>
                    </label>
                    <input type="password" placeholder="Eneter password"></input>

                    <button type="submit">
                        <i className="fa-solid fa-envelope-open-text"></i>&nbsp; LOGIN
                        
                    </button>
                </form>
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