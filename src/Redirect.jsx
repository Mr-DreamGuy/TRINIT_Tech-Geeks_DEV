import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Signin from "./Signin";
import Tutorreg from "./Tutorreg";
import Register from "./Register";
import Navbar from "./Navbar";

function Redirect() {

    return (
        <>
        
            <Router>
            <Navbar />
                <Routes>
               
                    <Route path="/" element={<Body />}></Route>
                    <Route path="/Register" element={<Register />}></Route>
                    <Route path="/Signin" element={<Signin />}></Route>
                    <Route path="/Tutorreg" element={<Tutorreg />}></Route>
                    <Route path="/Body" element={<Body/>}></Route>

                </Routes>
            </Router>
        </>
    );
}
export default Redirect;