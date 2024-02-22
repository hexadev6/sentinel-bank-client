import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DarkProvider from "./components/Provider/DarkProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster position="top-right" />
        <DarkProvider>
          <ThemeProvider>
            <RouterProvider router={routes} />
          </ThemeProvider>
        </DarkProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
