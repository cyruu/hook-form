import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [showPassword, setshowPassword] = useState(false);
  const [showconfirmPassword, setshowconfirmPassword] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;

  function submit(data) {
    const { uname, password, email, cpassword } = data;
    alert(`${uname} ${password} ${email} ${cpassword}`);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[400px] rounded-xl bg-white p-8 shadow-md"
      >
        <h1 className="mx-auto w-max font-bold text-4xl mb-8">Signup</h1>
        {/* username */}
        <div className="uname flex flex-col">
          <label htmlFor="uname">Username</label>
          <input
            id="uname"
            type="text"
            {...register("uname", {
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z0-9]{5,}$/,
                message: "Username must be at least 5 characters",
              },
            })}
          />
        </div>
        <p className="text-xs text-red-600 font-medium mb-4">
          {errors.uname && errors.uname.message}
        </p>
        {/* email */}
        <div className="email flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
        </div>
        <p className="text-xs text-red-600 font-medium mb-4">
          {errors.email && errors.email.message}
        </p>
        {/* password */}
        <div className="password flex flex-col ">
          <div>
            <label htmlFor="password">Password</label>
            <i
              className={`${
                showPassword ? "ri-eye-line" : "ri-eye-off-line"
              }  ml-2 cursor-pointer`}
              onClick={() => setshowPassword((prev) => !prev)}
            ></i>
          </div>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^.{8,}$/,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </div>
        <p className="text-xs text-red-600 font-medium mb-4">
          {errors.password && errors.password.message}
        </p>
        {/* confirm passsword */}
        <div className="cpassword flex flex-col ">
          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <i
              className={`${
                showconfirmPassword ? "ri-eye-line" : "ri-eye-off-line"
              }  ml-2 cursor-pointer`}
              onClick={() => setshowconfirmPassword((prev) => !prev)}
            ></i>
          </div>
          <input
            id="cpassword"
            type={showconfirmPassword ? "text" : "password"}
            {...register("cpassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
        </div>
        <p className="text-xs text-red-600 font-medium mb-4">
          {errors.cpassword && errors.cpassword.message}
        </p>
        {/* button */}
        <button type="submit" className="w-full bg-gray-700 p-2 text-white">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default App;
