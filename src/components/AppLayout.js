import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContest";

const AppLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let storeduser = localStorage.getItem("user");
    if (!storeduser) {
      navigate("/edit");
    } else {
      storeduser = JSON.parse(storeduser);
      setUser(storeduser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;
