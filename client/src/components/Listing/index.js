import React from "react";
import Category from "../Category";
import JobCard from "../JobCard";

export default function Listing() {
  const displayCard = () => {
    for (let i = 0; i < 5; i++)
    return <JobCard />
  } 
  return (
    <div>
      <Category />

      <JobCard />
    </div>
  );
}