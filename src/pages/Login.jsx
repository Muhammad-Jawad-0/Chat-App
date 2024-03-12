import React from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "../constants/regex";
import { auth, signInWithEmailAndPassword } from "../config/firebase";

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
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

export default LoginPage;
