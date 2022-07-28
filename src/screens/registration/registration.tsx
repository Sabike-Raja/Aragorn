import React from "react";
import "./registration.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Registration = () => {
  const dispatch = useDispatch();

  enum Gender {
    female = "female",
    male = "male",
    others = "others",
  }

  interface userDetails {
    firstName: string;
    lastName: string;
    gender: Gender;
    password: string;
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<userDetails>({ mode: "all" });

  const handleOnSubmit: SubmitHandler<userDetails> = (data: userDetails) => {
    // dispatch(data);
    console.log(data);
  };

  return (
    <div>
      <h1> Registration </h1>
      <form className="form" onSubmit={handleSubmit(handleOnSubmit)}>
        {/* first Name */}
        <label>First Name</label>
        <input
          className="form-input"
          placeholder="ex: Akash"
          type="text"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <span>First name is Required</span>}

        {/* last Name */}
        <label>Last Name</label>
        <input
          placeholder="ex: Murugesan"
          className="form-input"
          type="text"
          {...register("lastName")}
        />

        {/* Gender */}
        <label>Gender</label>
        <select className="form-input" {...register("gender")}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>

        {/* password */}
        <label>Password</label>
        <input
          type="text"
          className="form-input"
          placeholder="ex: Akash@123"
          {...register("password", { required: true })}
        />
        {errors.password && <span>password is required</span>}

        <input type="submit" style={{ cursor: "pointer" }} />
      </form>
    </div>
  );
};

export default Registration;
