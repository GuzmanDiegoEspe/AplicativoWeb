
import React, { Fragment } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";


export default function Home() {
  return (



    <Fragment>
      <div>
      <Navbar />
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <Dashboard />
        </div>
      </div>
    </div>
    </Fragment>



  );
}
