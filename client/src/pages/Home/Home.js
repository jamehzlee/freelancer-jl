import './index.css'
import React from "react";
import { Header, Footer } from "../../components"
import { Outlet } from "react-router-dom";

export default function Home() {
  
  return (
    <div>
      <Header />
      <div className="row justify-content-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
