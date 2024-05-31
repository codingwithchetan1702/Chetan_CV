import React from "react";
import { FaGithub, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
              <Link to="/" class="navbar-brand">
              Chetan
              </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link">Home</Link>
                </li>
              </ul>
              <form class="d-flex">
                <div class="btn-group">
                  <a href="https://www.instagram.com/prajapati.chetan.1702/" class="btn btn-seconday fs-4 me-6">
                  <FaInstagramSquare />
                  </a>
                  <a href="https://linkedin.com/in/prajapati-chetan-061a55243/" class="btn btn-seconday fs-4 me-6">
                    <FaLinkedinIn />
                  </a>     
                  <a href="https://github.com/codingwithchetan1702/" class="btn btn-seconday fs-4 me-6">
                    <FaGithub />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
