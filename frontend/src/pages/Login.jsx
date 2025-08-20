import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { validateEmail, validateNewPassword } from "../utils/FormValidate";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../api/auth";
import { toast } from "sonner";
import handleError from "../utils/handleError";
import { useAuth } from "../store";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { setAccessToken } = useAuth();

  const togglePassword = () => {
    setIsVisible((prev) => !prev);
  };

  const onSubmitForm = async (data) => {
    try {
      const res = await loginUser(data);

      if (res.status === 200) {
        toast.success(res.data.message);
        setAccessToken(res.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="w-[100%] lg:w-[450px]">
      <p className="font-semibold text-[18px] mb-2 text-[#181A20]">
        Welcome Back to BetaHouse!
      </p>
      <p className="text-gray-400">
        Lets get started by filling out the information below
      </p>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="mt-2">
          <label className="floating-label">
            <span>Email Here</span>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="border-2 border-[#DEDFE0] rounded-sm py-2 px-1  outline-none w-full"
              {...register("email", {
                validate: (email) => validateEmail(email),
              })}
            />
          </label>
          {errors.email && (
            <span className="text-xs text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="mt-2 relative">
          <label className="floating-label">
            <span>Enter your Password</span>
            <input
              type={isVisible ? "text" : "password"}
              id="password"
              placeholder="Enter your Password"
              className="border-2 border-[#DEDFE0] rounded-sm py-2 px-1  outline-none w-full"
              {...register("password", {
                validate: (password) => validateNewPassword(password),
              })}
            />
          </label>
          {errors.password && (
            <span className="text-xs text-red-600">
              {errors.password.message}
            </span>
          )}
          <button
            type="button"
            className="absolute inset-y-0 right-2 text-sm cursor-pointer"
            onClick={togglePassword}
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        </div>

        <div className="flex items-center mt-3">
          <input
            type="checkbox"
            id="agree"
            className="mr-1 checkbox checkbox-success checkbox-sm"
            defaultChecked
          />
          <label htmlFor="agree">Remember Me</label>
        </div>

        <button
          className="mt-6 btn bg-[#3D9970] w-full text-white rounded-lg"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            "SIgn Up"
          )}
        </button>

        <div className="flex w-full flex-col">
          <div className="divider text-[14px]">OR</div>

          <button
            className="border border-[gray] p-2  bg-white  w-full text-black rounded-lg"
            type="submit"
            disabled={true}
          >
            <i className="ri-google-fill mr-2"></i>
            Continue with Google
          </button>
        </div>
        <div className="flex gap-1 justify-center mt-4">
          <span>New User?</span>
          <Link to="/auth/login" className="text-[#3D9970]">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
