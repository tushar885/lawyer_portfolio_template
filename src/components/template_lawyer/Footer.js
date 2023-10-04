import React, { useContext } from "react";
import UserContext from "../../utils/UserContest";

const Footer = () => {
  const { user, setUser } = useContext(UserContext);

  if (user === null) return;
  return (
    <div className="bg-[#666666] py-10 px-16  flex w-full gap-40 rounded-tr-3xl">
      <div className="min-w-fit text-skin-shade_white">
        {user?.name.toLowerCase() + "."}
      </div>
      <div className="">
        <ul className="flex gap-20">
          <div className="flex flex-col gap-2 justify-center items-center">
            <li>
              <a className="footer-link" href={user?.facebook}>
                <i className="fa-brands fa-facebook" />{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href={user?.instagram}>
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a className="footer-link" href={user?.twitter}>
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <li>
              <a className="footer-link" href={user?.linkedIn}>
                <i className="fa-brands fa-linkedin" />{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href={user?.youtube}>
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a className="footer-link" href={`mailto:${user?.email}`}>
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
