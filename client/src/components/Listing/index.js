import React from "react";
import "./listing.css"
import Category from "../Category";
import JobCard from "../JobCard";

export default function Listing() {
  const displayCard = [];
  for (let i = 0; i < 5; i++) {
    displayCard.push(<JobCard key={i} />);
  }
  return (
    <div>
      <Category />

      <div className="display-card">{displayCard}</div>
      <JobCard />
    </div>
  );
}
