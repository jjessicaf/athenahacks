import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Rec from "./pages/Rec"
import Preferences from "./pages/Preferences/Preferences";

function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/preferences" element={<Preferences />}/>
                <Route path="/recommendation" element={<Rec />}/>
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </div>
    )
}

export default App;