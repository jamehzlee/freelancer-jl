import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom";

export default function Home() {
  
  return (
    <div>
      <Header />
      <div className=" justify-content-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
