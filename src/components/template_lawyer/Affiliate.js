import React, { useContext } from "react";
import UserContext from "../../utils/UserContest";

const Affiliate = () => {
  const { user, setUser } = useContext(UserContext);

  if (user === null) return;
  return (
    <div className="bg-[#666666] py-20 px-16 justify-center flex gap-32 w-full">
      <p className="text-skin-golden font-bold text-4xl text-center">
        Affiliated By :
      </p>
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src="https://imgs.search.brave.com/Q_xkYmWKqfO5Utiuo-Nrx6_dRImfRx_g3KVFeU_fCDc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMy53/cC5jb20vdXBsb2Fk/Lndpa2ltZWRpYS5v/cmcvd2lraXBlZGlh/L2VuLzYvNmUvTG9n/b19vZl9CYXJfQ291/bmNpbF9vZl9JbmRp/YS5wbmc"
          className="w-40"
        />
        <p className="font-semibold text-2xl text-center">{user?.affiliate}</p>
      </div>
    </div>
  );
};

export default Affiliate;
