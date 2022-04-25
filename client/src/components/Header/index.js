import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
           Title
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    // <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    //   <div className="container flex-row justify-space-between-lg justify-center align-center">
    //       <div>
    //         <Link className="text-light" to="/">
    //           <h1 className="m-0">Freelance</h1>
    //         </Link>
    //         <p className="m-0">Join our community!</p>
    //       </div>
    //       <div>
    //         {Auth.loggedIn() ? (
    //           <>
    //             <span>Hey there, {Auth.getProfile().data.username}!</span>
    //             <button className="btn btn-lg btn-light m-2" onClick={logout}>
    //               Logout
    //             </button>
    //           </>
    //         ) : (
    //           <>
    //             <Link className="btn btn-lg btn-info m-2" to="/login">
    //               Login
    //             </Link>
    //             <Link className="btn btn-lg btn-light m-2" to="/signup">
    //               Signup
    //             </Link>
    //           </>
    //         )}
    //       </div>
    //     </div>
    // </header>
  );
}
