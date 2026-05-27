import { useState } from "react";

import "./styles/App.css";

import heroImage from "./assets/hero.jpg";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Nutrition from "./components/Nutrition";
import Workouts from "./components/Workouts";
import Journal from "./components/Journal";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  const [showLogin, setShowLogin] = useState(false);

  const [authMode, setAuthMode] = useState("login");

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [currentPage, setCurrentPage] =
    useState("dashboard");


  // NUTRITION PAGE

  if (token && currentPage === "nutrition") {

    return (

      <Nutrition
        setCurrentPage={setCurrentPage}
      />

    );

  }


  // WORKOUTS PAGE

  if (token && currentPage === "workouts") {

    return (

      <Workouts
        setCurrentPage={setCurrentPage}
      />

    );

  }


  // JOURNAL PAGE

  if (token && currentPage === "journal") {

    return (

      <Journal
        setCurrentPage={setCurrentPage}
      />

    );

  }


  // DASHBOARD PAGE

  if (token) {

    return (

      <Dashboard
        setCurrentPage={setCurrentPage}
        setToken={setToken}
      />

    );

  }


  return (

    <div
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >

      <div className="overlay"></div>

      <Navbar
        setShowLogin={setShowLogin}
        setAuthMode={setAuthMode}
      />

      <Hero
        setShowLogin={setShowLogin}
      />


      {/* LOGIN COMPONENT */}

      {showLogin && authMode === "login" && (

  <Login
    setToken={setToken}
  />

)}

{showLogin && authMode === "register" && (

  <Register
    setToken={setToken}
  />

)}

    </div>

  );

}

export default App;