import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCartArrowDown,
  faEnvelope,
  faHeadset,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="bg-gray-900 text-gray-400 flex flex-row justify-between lg:px-24">
        <div className="flex flex-row py-4">
          <p className="flex flex-row items-center text-lg mr-3">
            <FontAwesomeIcon icon={faHeadset} className="mx-1" />
            Support
          </p>
          <p className="text-lg mr-3"> | </p>
          <p className="flex flex-row items-center text-lg">
            <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
            gameup@gmail.com
          </p>
        </div>
        <div className="flex flex-row py-4">
          <p className="text-lg mr-3">
            <FontAwesomeIcon icon={faCartArrowDown} className="mx-1" />
          </p>
          <p className="text-lg mr-3">|</p>
          <p className="text-lg mr-3">
            <FontAwesomeIcon icon={faBell} className="mx-1" />
          </p>
          <p className="text-lg mr-3">|</p>
          <p className="flex flex-row items-center text-lg">
            <FontAwesomeIcon icon={faUser} className="mx-1 mr-2" />
            Sign In
          </p>
        </div>
      </div>
      <nav className="flex flex-row  bg-gray-900">
        {/* inner blue div */}
        <div
          className="flex flex-row flex-grow justify-between py-4 px-28 "
          style={{ backgroundColor: "#252f5a" }}
        >
          <div>
            <img src="/assets/logo.png" alt="logo" style={{ width: 180 }} />
          </div>
          <div id="navbar-links" className="flex flex-row text-gray-300">
            <p className="flex items-center text-lg mx-5">HOME</p>
            <p className="flex items-center text-lg mx-5">FEATURES</p>
            <p className="flex items-center text-lg mx-5">TOKENOMICS</p>
            <p className="flex items-center text-lg mx-5">ROADMAP</p>
            <p className="flex items-center text-lg mx-5">TEAM</p>
            <button
              className="px-6 py-3 text-xl rounded-full mx-5"
              style={{ color: "#252f5a", backgroundColor: "#fd996b" }}
            >
              JOIN US
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
