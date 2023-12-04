import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./atoms/Button";
import MenuIcon from "../assets/icons/twitter-icon.svg";
import CloseIcon from "../assets/icons/twitter-icon.svg";

const navlinks = [
  {
    url: "/pagetwo",
    name: "PageTwo",
  },
];
const Navbar = ({ scrollRoutes }) => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (event) => {
    setNavOpen(!navOpen);
    navigate("/")
  };
  return (
    <div
      className={`container fixed z-10 mx-auto flex items-center justify-between border-b border-b-lightPurple bg-transparent p-7 md:static 
                      md:max-w-[80%] md:border-b-gray100 md:p-7`}
    >
      <Link to="/">
        <div className="font-clashDisplay text-[20px] font-bold md:w-[50%]">
          <span className="font-bold text-white">get</span>
          <span className="text-lightPurple">linked</span>
        </div>
      </Link>
      <Button
        variant="icon"
        iconPath={MenuIcon}
        onClick={() => setNavOpen(!navOpen)}
        extraStyle="md:hidden"
      />
      <div
        className={`absolute left-[50%] h-[60vh] w-[90%] translate-x-[-50%] rounded-lg bg-darkBlue p-12 ${
          navOpen ? "top-0" : "-top-[1000%]"
        }
                        md:static md:flex md:h-fit md:w-[50%] md:translate-x-0 md:justify-between md:p-0`}
      >
        <Button
          variant="icon"
          iconPath={CloseIcon}
          onClick={() => setNavOpen(!navOpen)}
          extraStyle="float-right md:hidden"
        />
        <ul className="my-12 h-fit md:my-0 md:flex md:gap-4">
          <li
            className="mb-2 pb-2 pt-2"
            data-id="timeline"
            onClick={handleScroll}
          >
            {" "}
            Timeline{" "}
          </li>
          <li
            className="mb-2 pb-2 pt-2"
            data-id="overview"
            onClick={handleScroll}
          >
            {" "}
            Overview{" "}
          </li>
          <li className="mb-2 pb-2 pt-2" data-id="faq" onClick={handleScroll}>
            {" "}
            FAQs{" "}
          </li>
          {navlinks.map((item, index) => (
            <li key={index} className="mb-2 pb-2 pt-2 hover:text-slate-300">
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Link to="/register">
          <Button name="Register" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
