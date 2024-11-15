// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTrip from './create-trip/index.jsx'
import Header from "./components/custom/Header.jsx";
import Hero from "./components/custom/Hero.jsx";
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
path:'/create-trip',
    element:<CreateTrip/>

  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    
    <RouterProvider router={router}/>
  </React.StrictMode>
);
