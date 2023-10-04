import React, { useContext } from "react";
import UserContext from "../../utils/UserContest";

const Testmonials = () => {
  const { user, setUser } = useContext(UserContext);

  if (user === null) return;
  return (
    <div className="bg-[#F8F8F8] py-20 px-16 justify-center flex flex-col gap-14 w-full">
      <p className="text-skin-golden font-bold text-5xl text-center">
        Testimonials
      </p>
      <div className="flex gap-16 w-full">
        {user?.testmonials.map(({ reviewerName, reviewPara }, index) => {
          return (
            <div className="flex flex-col gap-4 justify-center items-center w-full">
              <img
                src="https://img.freepik.com/vecteurs-libre/jeune-bel-homme-isole-dans-poses-differentes-fond-blanc-illustration_632498-859.jpg?size=626&ext=jpg&ga=GA1.1.28807884.1696416059&semt=ais"
                className="rounded-full w-[70%]"
              />
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className="text-skin-shadeOfBlue font-bold text-2xl">
                  {reviewerName}
                </p>
                <p>{reviewPara} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testmonials;
