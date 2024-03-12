import React from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "../constants/regex";
import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "../config/firebase";
import { useNavigate } from "react-router-dom";



function SignupApp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const Navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    createUserWithEmailAndPassword(auth, data.email,data.password)
    .then(async(res) =>{
        console.log(res)
        await setDoc(doc(db, "users", res.user.uid), {...data , uid:res.user.uid});
        // Navigate('/login')
        reset()
    })
    .catch((err) => {
        console.log("err>>", err)
    })
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          size={20}
          {...register("full_name", {
            required: "please enter your full_name",
          })}
          placeholder="enter your full name"
        />
        <input
          type="email"
          size={20}
          {...register("email", {
            required: "please enter your email",
            pattern: {
              value: emailRegex,
              message: "please enter correct email",
            },
          })}
          placeholder="enter your email"
        />
        <input
          type="password"
          size={20}
          {...register("password", { required: "please enter your password" })}
          placeholder="enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignupApp;
