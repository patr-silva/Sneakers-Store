import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants/index";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='padding-x py-10 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((elem) => {
            return (
              <li key={elem.label}>
                <a
                  href={elem.href}
                  className='leading-normal text-lg text-white-500 hover:text-green-success'
                >
                  {elem.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='hidden max-lg:block'>
          <div className='block lg:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
            >
              <img
                className={`fill-current h-8 w-8 ${
                  isOpen ? "hidden" : "block"
                }`}
                src={hamburger}
                alt='hamburger icon'
              />

              <img
                className={`fill-current h-8 w-8 ${
                  isOpen ? "block" : "hidden"
                }`}
                src={close}
                alt='close icon'
              />
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className='text-2xl lg:flex-grow'>
              {navLinks.map((elem) => {
                return (
                  <a
                    href={elem.href}
                    className='block mt-6 lg:inline-block lg:mt-0 text-white-400 hover:text-green-success ml-11'
                    key={elem.label}
                  >
                    {elem.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
