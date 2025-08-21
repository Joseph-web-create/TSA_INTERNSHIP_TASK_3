import { Link } from "react-router";
import { useAuth } from "../store";
import { useState } from "react";

const Header = () => {
  const links = ["Home", "Properties", "About Us", "Blog", "Contact Us"];
  const { accessToken, user, handleLogOut } = useAuth();
  const name = user?.firstName.substring(1, 0) + user?.lastName.substring(1, 0);
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center justify-between ">
      <div className="text-white flex items-center gap-2 p-4">
        <p className="bg-[#4BA586] rounded-full p-2">BH</p>
        <p className="text-2xl font-bold">BetaHouse</p>
      </div>

      <div className="hidden lg:flex text-white gap-4">
        {links.map((item, i) => (
          <div key={i}>
            <a href="#">{item}</a>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex gap-4 items-center">
        {accessToken ? (
          <div className="flex items-center">
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span>{name}</span>
              </div>
            </div>

            <div className="text-white ml-4">
              <div
                className={`font-semibold cursor-pointer ${show && "mb-2"}`}
                onClick={() => setShow((prev) => !prev)}
              >
                <p>
                  {`${user?.firstName} ${user?.lastName}`}
                  {show ? (
                    <i class="ri-arrow-up-s-line ml-2"></i>
                  ) : (
                    <i class="ri-arrow-down-s-line ml-2"></i>
                  )}
                </p>
              </div>
              {show && (
                <div className="text-[red] font-bold">
                  <button
                    className="cursor-pointer text-[18px]"
                    onClick={handleLogOut}
                  >
                    <i class="ri-logout-box-line mr-2"></i>
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <Link
              to={"auth/register"}
              className="border-2 border-[white] text-white px-10 py-3 rounded-xl"
            >
              Sign in
            </Link>

            <Link
              to={"auth/login"}
              className="bg-[#3D9970] text-white px-10 py-3 rounded-xl"
            >
              Log in
            </Link>
          </>
        )}
      </div>

      <div className=" lg:hidden text-white mr-10">
        <i class="ri-menu-line text-3xl"></i>
      </div>
    </div>
  );
};

export default Header;
