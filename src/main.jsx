import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import  { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster />
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
