import './index.css'
import React from "react";

// import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  return (
    <div className="col-12 align-self-end py-3 footer">
      <div className="container text-center">
        {/* {location.pathname !== "/" && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )} */}
        <h4>
          {/* Made with{" "}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{" "} */}
          Brought to you by Sami, James & Andreas.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
