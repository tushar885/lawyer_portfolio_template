import React, { useContext } from "react";

import UserContext from "../../utils/UserContest";

const Aboutme = () => {
  const { user, setUser } = useContext(UserContext);

  if (user === null) return;
  return (
    <div className="flex gap-8 py-20 px-16 w-full bg-[#666666]">
      <div className="w-1/3 flex justify-center">
        <p className="text-4xl font-bold text-skin-golden">About Me : </p>
      </div>
      <div className="w-2/3 border p-6 rounded-md">
        <p className="text-skin-shade_white">{user?.aboutUs_description}</p>
      </div>
    </div>
  );
};

export default Aboutme;
