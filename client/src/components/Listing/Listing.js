import "./index.css";
import React, { useState } from "react";
import JobCard from "../JobCard/JobCard";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES, QUERY_JOBS_BY_CATEGORY } from "../../utils/queries";

export default function Listing() {
  const [filter, setFilter] = useState("");
  function filterJobs(e) {
    const selected = e.currentTarget.dataset.category;
    console.log(selected);
    setFilter(selected);
  }
  const { loading: loadingJobs, data: jobsData } = useQuery(
    QUERY_JOBS_BY_CATEGORY
  );
  const jobs = jobsData?.jobsByCategory || [];

  const { loading: loadingCategories, data: categoriesData } =
    useQuery(QUERY_CATEGORIES);
  const categories = categoriesData?.categories || [];
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light category-nav">
        <div className="container-fluid">
          <div className="">
            <ul className="navbar-nav">
              {loadingCategories
                ? ""
                : categories.map((category) => {
                    return (
                      <li className="nav-item">
                        <h3
                          onClick={filterJobs}
                          data-category={category._id}
                          className="nav-link text-dark"
                        >
                          {category.name}
                        </h3>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </nav>

      <div className="row justify-content-center">
        {loadingJobs
          ? "Hello"
          : jobs.map((job) => {
            return (
              <div className="col card-col" key={job._id}>
                  <JobCard job={job} />
                </div>
              );
            })}
      </div>

    </div>
  );
}
