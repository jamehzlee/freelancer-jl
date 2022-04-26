import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import JobCard from "../components/JobCard";

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
        <Category />
        <Category />
        <Category />
      </div>
     
    </>
  );
}
