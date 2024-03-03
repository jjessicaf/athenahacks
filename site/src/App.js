import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </div>
    )
}

export default App;