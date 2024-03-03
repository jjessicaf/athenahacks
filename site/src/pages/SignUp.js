import React, {useState} from "react";
import "../styles/signup.css"

function SignUp() {
    const [fetchResponse, handleFetchResponse] = useState();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fails, setFails] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with the form data
        const formData = {
            username: username,
            email: email,
            password: password
        };

        // Display form data in console
        console.log("Form Data:", formData);

        // To simulate submission, you can show an alert
        alert("Form submitted!"); // Uncomment this line to show an alert

        // Reset form fields after submission (optional)
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <div className="signupContainer">
                <div style={{ fontSize: '24px' }}>Welcome!</div>
                <form className="form-input" onSubmit={handleSubmit}>
                    <div>
                        <label>username </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>email </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={"sign-button"}>sign up</button>
                </form>

                <div className={"errorMsg"}></div>
            </div>
        </div>
    );
}

export default SignUp;