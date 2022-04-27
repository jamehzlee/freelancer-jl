import React from "react";
import "./listing.css";
import Category from "../Category";
import JobCard from "../JobCard";

export default function Listing() {
  // const [addJob, { error }] = useMutation(ADD_JOB, {
  //   update(cache, { data: { addJob } }) {
  //     try {
  //       const { jobs } = cache.readQuery({ query: QUERY_ALL_JOBS });

  //       cache.writeQuery({
  //         query: QUERY__ALL_JOBS,
  //         data: { jobs: [addJob, ...jobs] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });
  const displayCard = [];
  for (let i = 0; i < 5; i++) {
    displayCard.push(<JobCard key={i} />);
  }
  return (
    <div>
      <Category />
      <div className="row justify-content-center">
        {displayCard}
      </div>
      <div className="row justify-content-center">
        {displayCard}
      </div>
      <div className="row justify-content-center">
        {displayCard}
      </div>
      <div className="row justify-content-center">
        {displayCard}
      </div>
      <div className="row justify-content-center">
        {displayCard}
      </div>
    </div>
  );
}
