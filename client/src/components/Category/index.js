import React from "react";
import JobCard from "../JobCard";
import "./index.css";

export default function Category() {
  return (
    <div>
      <h1>Category name</h1>
      <hr />
      <div className="card-container">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}
