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

    <div className="listing-content">
      <nav className="navbar navbar-expand-lg navbar-light category-nav">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#responsive-navbar" aria-controls="responsive-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="responsive-navbar">
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
      </nav>

      <div className="row card-row justify-content-center">
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
