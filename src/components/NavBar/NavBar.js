import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import "./NavBar.css";

function NavBar({ inView }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav
      id="navbar"
      style={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
      className={
        `flex flex-wrap fixed bg-transparent
        items-center justify-between lg:pl-14
        lg:pr-10 px-0 sm:px-10
        py-3 ml-0
        ` +
        (true
          ? ` fixed top-0 z-50 w-full`
          : " relative xl:ml-14 nav-left-triangle")
      }
    >
      <div className="container px-4 transition-all duration-200 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative transition-all duration-200 flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <span className="flex items-stretch">
            <a
              className="text-sm flex justify-center items-center leading-relaxed mr-4 px-6 sm:px-0 py-2 whitespace-nowrap uppercase text-gray-300"
              href="/"
            >
              <img
                src="/gdsc-dmce-logo.png"
                alt="logo"
                style={{ width: 280 }}
              />
            </a>
          </span>
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
          <ul className="flex glow font-sora font-semibold flex-col w-full items-center lg:flex-row list-none lg:ml-auto lg:justify-end">
            <li
              style={{
                animationDelay: window.innerWidth < 1024 ? "100ms" : "2s",
              }}
              className={
                "nav-item" +
                (inView === "overview" ? " navbar-item-in-view" : "")
              }
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                to="overview-container"
                smooth={true}
                duration={400}
              >
                <span className="mx-2  text-lg">about</span>
              </Link>
            </li>
            {/* <li
              style={{
                animationDelay: window.innerWidth < 1024 ? "200ms" : "2.1s",
              }}
              className={
                "nav-item" +
                (inView === "roadmap" ? " navbar-item-in-view" : "")
              }
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                to="roadmap-container"
                smooth={true}
                duration={600}
              >
                <span className="mx-2 text-lg">timeline</span>
              </Link>
            </li>*/}
            <li
              style={{
                animationDelay: window.innerWidth < 1024 ? "300ms" : "2.2s",
              }}
              className={
                "nav-item" +
                (inView === "certificate" ? " navbar-item-in-view" : "")
              }
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                to="certificate-container"
                smooth={true}
                duration={700}
              >
                <span className="mx-2 text-lg">Verify Certificate</span>
              </Link>
            </li>
            <li
              style={{
                animationDelay: window.innerWidth < 1024 ? "400ms" : "2.3s",
              }}
              className={
                "nav-item" + (inView === "team" ? " navbar-item-in-view" : "")
              }
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                to="team-container"
                smooth={true}
                duration={300}
              >
                <span className="mx-2 text-lg">Team</span>
              </Link>
            </li>
            <li
              style={{
                animationDelay: window.innerWidth < 1024 ? "500ms" : "2.4s",
              }}
              className={
                "nav-item" +
                (inView === "contactUs" ? " navbar-item-in-view" : "")
              }
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                to="contact-us-container"
                smooth={true}
                duration={700}
              >
                <span className="mx-2 text-lg">Contact</span>
              </Link>
            </li>
            <li
              style={{
                animationDelay: window.innerWidth < 1024 ? "600ms" : "2.5s",
              }}
              className={
                "nav-item" + (inView === "faq" ? " navbar-item-in-view" : "")
              }
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-gray-300 hover:opacity-75"
                to="faq-container"
                smooth={true}
                duration={700}
              >
                <span className="mx-2 text-lg">FAQ</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
