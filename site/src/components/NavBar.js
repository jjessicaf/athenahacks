import React from "react";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="../assets/logo.png" alt="DOnate Logo" />
            </div>
            <div className="navbar_buttons">
                <button className="login-button">Log In</button>
                <button className="signup-button">Sign Up</button>
            </div>
        </nav>
    );
}

export default NavBar;
