import React, { useState } from "react";
import pic from "../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const navitems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Projects",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <div className="flex flex-col">
              <h1 className="font-semibold text-xl cursor-pointer">
                Esmil<span className="text-green-500 text-2xl">e</span>
              </h1>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navitems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden" onClick={() => setmenu(!menu)}>
              {" "}
              {menu ? (
                <MdClose size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}{" "}
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navitems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setmenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
