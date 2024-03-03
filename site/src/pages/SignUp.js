import React from "react";
import "../styles/signup.css"
import NavBar from "../components/NavBar.js"

function SignUp() {
    return (
        <div>
            <NavBar />
            <div className="signupContainer">
                <div style={{ fontSize: '24px' }}>Welcome!</div>
                <form className="form-input">
                    <div>
                        <label>username </label>
                        <input
                            id="username"
                            type="text"
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>email </label>
                        <input
                            id="email"
                            type="email"
                            //value={password}
                            //onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>I am</label>
                        <input
                            id="over18"
                            type="radio"
                            value="over18"
                            required
                        />
                        <label className="age-label" htmlFor="over18">18 or older</label>
                    </div>
                    <div>
                        <label>I am</label>
                        <input
                            id="individual"
                            type="radio"
                            value="individual"
                            name="userType"
                            required
                        />
                        <label htmlFor="individual">an individual</label>
                        <input
                            id="organization"
                            type="radio"
                            value="organization"
                            name="userType"
                        />
                        <label className="organization-label" htmlFor="organization">an organization</label>
                    </div>
                    <div>
                        <label>password </label>
                        <input
                            id="password"
                            type="password"
                            //value={password}
                            //onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
                <button className={"sign-button"}>
                    sign up
                </button>
            </div>
        </div>
    );
}

export default SignUp;