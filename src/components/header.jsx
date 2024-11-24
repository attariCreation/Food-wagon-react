import React from "react";
import Logo from "../../assets/images/logo.jpg";
function Header() {
  return (
    <>
      <header>
        <nav className="d-xl-flex align-items-xl-center justify-content-around py-auto">
          <span id="logo">
            <img src={Logo} alt="Logo" />
            <h2>
              <span className="dark">food</span>Wagon
            </h2>
          </span>
          <span
            id="delivery"
            className="d-xl-flex align-items-xl-center justify-content-xl-evenly"
          >
            <div id="left">Deliver to:</div>

            <div
              id="right"
              className="d-xl-flex align-items-xl-center justify-content-xl-evenly "
            >
              <i className="ri-map-pin-2-fill mb-3 "></i>
              <p>
                <span>current Location</span>Garden West lasbela, karachi
              </p>
            </div>
          </span>
          <span id="login">
            <span id="search" >
              <a href="#">about </a>
            </span>

            <a href="#" className=" text-decoration-none py-2 px-4" id="log">
              <i className="ri-user-fill"></i>
              login
            </a>
          </span>
        </nav>
      </header>
    </>
  );
}
export default Header;
