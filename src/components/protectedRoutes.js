import React from "react";
// import admin from "./ReportsView";
import Admin from "../views/Admin/AdminForm";

const protectedRoutes = [
  {
    name: "admin",
    exact: true,
    path: "/admin",
    main: props => <Admin {...props} />,
    public: false
  }
];

export default protectedRoutes;
