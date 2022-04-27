import React from "react";
import Category from "../Category";
import JobCard from "../JobCard";

export default function Listing() {
  const displayCard = [];
  for (let i = 0; i < 0; i++) {
    displayCard.push(<JobCard key={i} />);
  }
  return (
    <div>
      <Category />

      <JobCard />
    </div>
  );
}
