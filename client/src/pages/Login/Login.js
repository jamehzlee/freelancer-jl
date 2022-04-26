import React from "react";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="row justify-content-center">
        <form className=" col col-8 login-form">
          <div className="mb-3 justify-content-center">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 justify-content-center">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
