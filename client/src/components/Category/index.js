import React from "react";
import JobCard from "../JobCard";
import "./category.css";

export default function Category() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Art
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Audio
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cooking
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Social Media
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br/>
    </div>
  );
}
