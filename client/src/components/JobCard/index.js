import React from "react";
import { Link } from "react-router-dom";

export default function JobCard() {
  return (
    <Link className="col" to="/job">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Job title</h5>
        <h6 className="card-subtitle mb-2 text-muted">price</h6>
        <p className="card-text">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.
        </p>
      </div>
    </div>
    </Link>
  );
}
