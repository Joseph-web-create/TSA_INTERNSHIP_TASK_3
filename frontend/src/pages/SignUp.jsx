import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  validateEmail,
  validateName,
  validateName1,
  validateNewPassword,
} from "../utils/FormValidate";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../store";
import { registerUser } from "../api/auth";
import { toast } from "sonner";
import handleError from "../utils/handleError";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const { setAccessToken } = useAuth();

  const password = watch("password");
  const navigate = useNavigate();

  const onSubmitForm = async (data) => {
    try {
      const res = await registerUser(data);
      if (res.status === 201) {
        toast.success(res.data.message);
        setAccessToken(res.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      handleError(error);
    }
  };

  const togglePassword = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="w-[100%] lg:w-[450px]">
      <p className="font-semibold text-[18px] mb-2 text-[#181A20]">
        Join our community of home seekers and explore the possibilities that
        await.
      </p>
      <p className="text-gray-400">
        Lets get started by filling out the information below
      </p>

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex mt-6 justify-between w-full gap-4">
          <div>
            <label className="floating-label">
              <span>Enter your First Name</span>
              <input
                type="text"
                id="firstName"
                className=" border-[#DEDFE0] rounded-sm border-2 py-2 px-1 mt-2 outline-none w-full"
                placeholder="Enter Name"
                {...register("firstName", {
                  validate: (val) => validateName(val),
                })}
              />
            </label>
            {errors.firstname && (
              <span className="text-xs text-red-600">
                {errors.firstname.message}
              </span>
            )}
          </div>
          <div>
            <label className="floating-label">
              <span>Enter your Last Name</span>
              <input
                type="text"
                id="lastName"
                className="border-2 border-[#DEDFE0] rounded-sm py-2 px-1 mt-2 outline-none w-full"
                placeholder="Enter last Name"
                {...register("lastName", {
                  validate: (val) => validateName1(val),
                })}
              />
            </label>
            {errors.lastName && (
              <span className="text-xs text-red-600">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>
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
        <div className="mt-2 relative">
          <label className="floating-label">
            <span>Confirm Password</span>
            <input
              type={isVisible ? "text" : "password"}
              id="ConfirmPassword"
              placeholder="Confirm your Password"
              className="border-2 border-[#DEDFE0] rounded-sm py-2 px-1  outline-none w-full"
              {...register("confirmPassword", {
                validate: (val) => val === password || "Passwords do not match",
              })}
            />
          </label>
          {errors.confirmPassword && (
            <span className="text-xs text-red-600">
              {errors.confirmPassword.message}
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
          <label htmlFor="agree">
            I agree to{" "}
            <span className="text-[#3D9970] mr-1">Terms of Service</span>
            and
            <span className="text-[#3D9970] ml-1">Privacy Policies</span>
          </label>
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
        <div className="flex gap-2 justify-center mt-4">
          <span>Already have an account?</span>
          <Link to="/auth/login" className="text-[#3D9970]">
            sign in
          </Link>
        </div>
      </form>
    </div>
  );
};
