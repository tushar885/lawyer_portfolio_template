import React, { useContext } from "react";
import UserContext from "../../utils/UserContest";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  if (user === null) return;

  function deleteUserHandler() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <div
      className={`bg-bg_header h-screen w-full bg-no-repeat bg-cover bg-right-top flex flex-col  items-start relative py-8 px-16 bg-fixed relative`}
    >
      <div className="flex w-full border-b-2 pb-3 relative">
        <div className="min-w-fit text-skin-shade_white absolute">
          {user?.name.toLowerCase() + "."}
        </div>
        <div className="relative top-0 w-full text-center grow text-skin-shade_white">
          {user?.navbar_title}
        </div>
        <div className="min-w-fit text-skin-shade_white absolute right-0 ">
          <button className="mr-4 border px-4 py-1" onClick={deleteUserHandler}>
            Delete User
          </button>
          <Link to="/edit" className="py-1 border px-4">
            Edit User
          </Link>
        </div>
      </div>

      <div className="grow flex flex-col justify-center gap-4">
        <p className="text-7xl font-bold pb-4 text-skin-shade_white">
          {user?.name}{" "}
        </p>
        <p className="text-lg font-semibold max-w-[40%] text-skin-light_grey">
          {user?.header_phase}{" "}
        </p>
        <div className="flex gap-4 items-center">
          <button className="border px-8 py-4 font-semibold rounded-md text-skin-shade_white">
            About Me
          </button>
          <p className="text-lg font-semibold text-skin-shade_white">
            {user?.mobileNumber}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
