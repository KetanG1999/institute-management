import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation for conditional rendering
import "./App.css";
import ButtonAppBar from "./component/dashboard/AppBar";
import SignUp from "./component/Log in/SignUp";
import Footer from "./component/dashboard/Footer";
import MiddleSection from './component/dashboard/MiddleSection'; // Import MiddleSection

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="App">
      <ButtonAppBar /> {/* AppBar at the top */}

      {/* Conditionally render MiddleSection only if the path is not /signup */}
      {location.pathname !== "/signup" && <MiddleSection />}

      <Routes>
        <Route path="/signup" element={<SignUp />} /> {/* Define the route for SignUp */}
        {/* Add other routes here if needed */}
      </Routes>

      <Footer /> {/* Footer at the bottom */}
    </div>
  );
}

export default App;
