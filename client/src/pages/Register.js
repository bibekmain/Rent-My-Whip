import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Register() {
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
            <section className="register-page">
        <HeroPages name="register" />
        <div className="container">
          <div className="register-div">
            <div className="register-div__text">
              <h2>REGISTER</h2>
              <p>
               Register or create your account here
              </p>
            <div className="register-div__form">
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
                    <label>
                        <b>CONFIRM PASSWORD *</b>
                    </label>
                    <input type="password" placeholder="Eneter password"></input>


                    <button type="submit">
                        <i className="fa-solid fa-envelope-open-text"></i>&nbsp; REGISTER
                        
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
export default Register;