import { TfiAlignJustify } from "react-icons/tfi";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="border-b border-gray-200 bg-white shadow-sm">
      <nav className="container p-1  mx-auto py-3 flex items-center justify-between ">
       
        {/* Hambar Menu Icon */}
        <div className="md:hidden block text-xl text-gray-600">
          <TfiAlignJustify />
        </div>

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <a
              href="#home"
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-blue-500">
            Sign In
          </button>

          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
