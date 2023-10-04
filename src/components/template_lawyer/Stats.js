import React, { useContext } from "react";
import UserContext from "../../utils/UserContest";

const Stats = () => {
  const { user, setUser } = useContext(UserContext);

  if (user === null) return;
  return (
    <div className="flex justify-evenly py-8 px-16 my-16">
      <div className="flex flex-col gap-4 w-fit justify-center items-center">
        <p className="text-2xl font-semibold">Cases Fought</p>
        <p className="text-3xl font-bold text-skin-golden">
          {user?.totalCases}{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4 w-fit justify-center items-center">
        <p className="text-2xl font-semibold">Cases Won</p>
        <p className="text-3xl font-bold text-skin-golden">{user?.casesWon} </p>
      </div>
      <div className="flex flex-col gap-4 w-fit justify-center items-center">
        <p className="text-2xl font-semibold">Clients</p>
        <p className="text-3xl font-bold text-skin-golden">
          {user?.totalClients}{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4 w-fit justify-center items-center">
        <p className="text-2xl font-semibold">Experience</p>
        <p className="text-3xl font-bold text-skin-golden">
          {`${user?.yearOfExperience} yr`}
        </p>
      </div>
    </div>
  );
};

export default Stats;
