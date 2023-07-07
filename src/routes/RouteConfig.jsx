import React from "react";
import { Routes, Route } from "react-router-dom";
import { indexPage } from "./pathNames";
import { WelcomePage } from "../pages";


function RouteConfig() {
  return (
    <div>
      <Routes>
        <Route path={indexPage} element={<WelcomePage/>}/>
      </Routes>
    </div>
  );
}

export default RouteConfig;
