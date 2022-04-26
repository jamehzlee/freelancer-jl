import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_Job } from "../utils/queries";

export default function Home() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
