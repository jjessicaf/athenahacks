import React from "react";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="/assets/logo.png" alt="DOnate Logo" />
            </div>
            <div className="navbar_buttons">
                <button className="login-button">log in</button>
                <button className="signup-button">sign up</button>
            </div>
        </nav>
    );
}

export default NavBar;