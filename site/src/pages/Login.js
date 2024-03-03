import React, {useEffect, useState} from "react";

function Login() {

    const [fetchResponse, handleFetchResponse] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fails, setFails] = useState(0);

    useEffect(() => {
        setFails(0);
    }, []);

    return (
        <div>
            <div>Login Page</div>
            <div>
                <label>username </label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>password </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={() => {
                fetch("/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        fails: fails
                    })
                })
                    .then((response) => response.json())
                    .then((response) => {
                        if (response?.fails === 3) {
                            window.location.href = "/AccountBlockedPage";
                        }
                        else if (response?.data) {
                            setFails(response.fails);
                            handleFetchResponse(response.data);
                        }
                    });
            }}>
                Login
            </button>
            {fetchResponse ? <p>{fetchResponse}</p> : null}
        </div>
    )
}

export default Login;