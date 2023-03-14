import React from "react";
import Navbar from "./pages/Navbar";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import DashBoard from "./pages/DashBoard";
// import FormValidation from "./pages/FormValidation"

function App() {
  return (
    <>
      <Navbar />

      {/* <FormValidation /> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route exact path="/Registration" element={<Registration />}></Route>
          <Route exact path="/Dashboard" element={<DashBoard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
