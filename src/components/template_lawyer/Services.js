import React, { useContext } from "react";
import UserContext from "../../utils/UserContest";

const Services = () => {
  const { user, setUser } = useContext(UserContext);

  if (user === null) return;
  return (
    <div className="bg-[#F8F8F8] py-20 px-16 justify-center flex flex-col gap-14 w-full">
      <p className="text-skin-golden font-bold text-5xl text-center">
        Services
      </p>
      <div className="flex gap-16 w-full">
        {user?.services.map(({ title, description }, index) => {
          return (
            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <img
                src="https://cdn-gcgdh.nitrocdn.com/gfcbrZkYQalxoOfLKxTelAACBenZUznC/assets/images/optimized/rev-179da16/www.atllaw.com/wp-content/uploads/2022/04/AdobeStock_296727465.jpeg"
                className="rounded-lg w-full"
              />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="text-skin-shadeOfBlue font-bold text-2xl">
                  {title}
                </p>
                <p>{description} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
