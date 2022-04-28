import './index.css'
import React from "react";
import { Link } from "react-router-dom";

export default function JobCard({job}) {
  return (
    <Link className="col-3 p-2" to="/job">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{job.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${job.price}</h6>
          <p className="card-text">
            {job.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

// const props = {
//   job:{
//     name: "student"
//   }
// }

// console.log(props.job.name)