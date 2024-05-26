import React from 'react';
import { Button, Navbar, TextInput, ToggleSwitch } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import '../index.css';

function Header() {
  const location = useLocation();

  return (
    <header>
      <Navbar className="border-b-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Madusha's
            </span>
            Blog
          </Link>
          <div className='flex-grow mx-4'>
          <form className="hidden lg:flex items-center ml-4">
            <TextInput
              type="text"
              placeholder='search...'
              rightIcon={AiOutlineSearch}
              className='lg:inline'
            />
          </form>
          </div>
          </div>
          <div className="container mx-auto px-4 flex justify-end">  {/* Added justify-end for right alignment */}
          <div className="flex items-center gap-4">  {/* Increased gap between menu items */}
            <Link to="/" className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/projects" className={`navbar-link ${location.pathname === "/projects" ? "active" : ""}`}>
              Projects
            </Link>
            <Link to="/about" className={`navbar-link ${location.pathname === "/about" ? "active" : ""}`}>
              About
            </Link>
          </div>
          <div className="flex items-center gap-0.5">  {/* Increased gap between buttons and Sign In */}
            <Button className="w-12 h-10 lg:hidden" color="gray" pill>
              <AiOutlineSearch />
            </Button>
            <Button className="w-12 h-10 hidden sm:flex" color="gray" pill>
              <FaMoon />
            </Button>
            <Link to="/signin">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
