import React from "react";
import Header from "../../components/Header";
import "./signup.css"

export default function SignUp() {
  return (
    <div>
      <Header />
      <form className="signup-form d-flex justify-content-center align-items-center flex-column">
      <div className="mb-3 d-flex justify-content-center align-items-center flex-column">
          <label htmlFor="first-name-input" className="form-label">
            First 
          </label>
          <input
            type="text"
            className="form-control"
            id="first-name-input"
          />
        </div>
        <div className="mb-3 d-flex justify-content-center align-items-center flex-column">
          <label htmlFor="last-name-input" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name-input"
          />
        </div>
        <div className="mb-3 d-flex justify-content-center align-items-center flex-column">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-center align-items-center flex-column">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
