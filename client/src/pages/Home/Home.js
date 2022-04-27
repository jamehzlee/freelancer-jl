import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./home.css";
import { Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_Job } from "../../utils/queries";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="home-container">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
