import React, { useContext } from "react";
import UserContext from "../../utils/UserContest";
import { Link } from "react-router-dom";
import Header from "./Header";
import Stats from "./Stats";
import Aboutme from "./Aboutme";
import Quote from "./Quote";
import Services from "./Services";
import Affiliate from "./Affiliate";
import Testmonials from "./Testmonials";
import News from "./News";
import Footer from "./Footer";

const Lawyer = () => {
  const { user, setUser } = useContext(UserContext);

  if (user === null)
    return (
      <div className="flex flex-col w-full justify-center py-20 gap-10 h-screen">
        <p className="text-center font-semibold text-xl ">
          No User Found, Please Enter Your Details here:{" "}
        </p>
        <button>
          <Link to={"/edit"} className="py-1 border border-black px-4">
            Click me
          </Link>{" "}
        </button>
      </div>
    );
  return (
    <div>
      <Header />
      <Stats />
      <Aboutme />
      <Quote quote={user?.quotes[0]} />
      <Services />
      <Affiliate />
      <Testmonials />
      <News />
      <Footer />
    </div>
  );
};

export default Lawyer;
