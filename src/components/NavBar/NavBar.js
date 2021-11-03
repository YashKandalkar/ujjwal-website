import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faTelegram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

import "./NavBar.css";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="bg-gray-900 text-gray-400 flex flex-row justify-end lg:px-24">
        <div className="flex flex-row py-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/gameup_tech"
            className="text-lg mr-3"
          >
            <FontAwesomeIcon icon={faTwitter} className="mx-1" />
          </a>
          <p target="_blank" className="text-lg mr-3 select-none">
            |
          </p>
          <a
            target="_blank"
            href="http://t.me/gameup_tech"
            rel="noopener noreferrer"
            className="text-lg mr-3"
          >
            <FontAwesomeIcon icon={faTelegram} className="mx-1" />
          </a>
          <p className="text-lg mr-3 select-none">|</p>
          <a href="/" className="text-lg mr-3">
            <FontAwesomeIcon icon={faMedium} className="mx-1" />
          </a>
        </div>
      </div>
      <nav
        id="navbar"
        style={{ backgroundColor: "#252f5a" }}
        className="relative flex flex-wrap items-center justify-between lg:pl-14 lg:pr-10 px-10 py-3 ml-0 xl:ml-14"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm  leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-300"
              href="/"
            >
              <img src="/assets/logo.png" alt="logo" style={{ width: 180 }} />
            </a>
            <button
              className="text-gray-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="mx-1" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col w-full items-center lg:flex-row list-none lg:ml-auto lg:justify-end">
              <li className="nav-item">
                <Link
                  to="landing-container"
                  className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                  smooth={true}
                  duration={300}
                >
                  <span className="mx-2 text-lg">HOME</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                  to="overview-container"
                  smooth={true}
                  duration={400}
                >
                  <span className="mx-2 text-lg">OVERVIEW</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                  to="features-container"
                  smooth={true}
                  duration={500}
                >
                  <span className="mx-2 text-lg">FEATURES</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                  to="tokenomics-container"
                  smooth={true}
                  duration={600}
                >
                  <span className="mx-2 text-lg">TOKENOMICS</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                  to="roadmap-container"
                  smooth={true}
                  duration={700}
                >
                  <span className="mx-2 text-lg">ROADMAP</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                  to="team-container"
                  smooth={true}
                  duration={300}
                >
                  <span className="mx-2 text-lg">TEAM</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
