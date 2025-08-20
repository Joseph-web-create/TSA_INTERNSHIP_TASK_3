import { Outlet } from "react-router";
import Auth from "../assets/Auth.jpg";

export const AuthLayout = () => {
  return (
    <section className="h-screen w-full ">
      <div className="flex items-center justify-center lg:justify-between w-full h-screen mx-auto">
        <div className="p-8 lg:w-[40%]">
          <Outlet />
        </div>

        <div className="hidden lg:block w-[60%] h-full relative">
          <img
            src={Auth}
            alt="Authentication"
            className="w-full h-full object-cover"
          />
          <div className=" absolute top-0 right-0 bg-[#00000046] w-[100%] h-full">
            <div className="text-white flex items-center gap-2 p-4">
              <p className="bg-[#4BA586] rounded-full p-2">BH</p>
              <p className="text-2xl font-bold">BetaHouse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
