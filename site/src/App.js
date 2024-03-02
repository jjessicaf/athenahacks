import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import AccountBlocked from "./pages/AccountBlocked";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/LoginPage" element={<Login />}/>
                <Route path="/AccountBlockedPage" element={<AccountBlocked />}/>
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </div>
    )
}

export default App;