import React from "react";
import Header from "../components/Header";
import JobList from "../components/JobList";

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <h1>Welcome to our webiste designed for freelancers like YOU!</h1>
      </main>
      <div>
        {/* <JobList /> */}
      </div>
    </>
  );
}
