import React, {useEffect, useState} from "react";
import "../styles/dashboard.css"

function Dashboard() {
    const uid = parseInt(localStorage.getItem("uid"), 10);
    const username = localStorage.getItem("username");
    const [causes, setCauses] = useState([]);
    const [top, setTop] = useState("")
    const [month, setMonth] = useState(0);

    useEffect(() => {
        // Function to fetch user preferences
        const fetchUserPreferences = async () => {
            try {
                const response = await fetch("http://localhost:8080/project/api/preferences/post", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({userId: uid})
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user preferences. response not ok');
                }
                const responseData = await response.json();
                setCauses(responseData.data);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };
        fetchUserPreferences();
    },[]);
    useEffect(() => {
        const fetchUserTop = async () => {
            try {
                const response = await fetch("http://localhost:8080/project/api/date/top", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({userId: uid})
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user preferences. response not ok');
                }
                const responseData = await response.json();
                setTop(responseData.data);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };
        fetchUserTop();
    },[]);
    return (
        <body>
            <div className="main-main-container">

                <div className="title">Welcome back, {username}!</div>

                <div className="main-container">
                    <div id="graph">
                        <iframe
                            title="Taipy"
                            src="http://127.0.0.1:5000/" // Replace this URL with the URL of your Python application
                            frameBorder="0"
                            allowfullscreen
                            scrolling="no"
                            id="graph-taipy"
                        ></iframe>
                    </div>
                    <div className="textbox">
                        <div className="donation-streak-text">
                            {username === "tommy" ? (
                                <>
                                    You’ve had a donation streak of {3} months. Your top organization is {`Lil Bub's Big Fund`}.
                                </>
                            ) : (
                                <>
                                    You’ve had a donation streak of {month} months. Your top organization is {top}.
                                </>
                            )}
                        </div>
                        <div className="donation-streak-text">
                            You’re making a difference! Keep it up :)
                        </div>
                    </div>

                    <div className="bottom-left-container">
                        <div className="causes-container">
                            <div className="causes-title-container">
                                <div className="causes-label">
                                    Causes
                                </div>
                                <a className="link" onClick={() => window.location.href = "/preferences"}>
                                    edit
                                </a>
                            </div>

                            <div className="causes-list">
                                {causes.map(cause => (
                                    <p className="cause">{cause}</p>
                                ))}
                                {/*<p className="cause">animals</p>*/}
                                {/*<p className="cause">science</p>*/}
                                {/*<p className="cause">housing</p>*/}
                                {/*<p className="cause">oceans</p>*/}
                            </div>
                        </div>

                        <div>
                            <button onClick={() => window.location.href = "/recommendation"} className="rec-orgs-button">recommend more organizations</button>
                        </div>
                    </div>
                    <div className="bottom-right-container">
                        <div className="causes-title-container">
                            <div className="causes-label">Saved organizations:</div>
                            <a className="link" href="">
                                see all
                            </a>
                        </div>
                        <div className="saved-org-table">
                            <table>
                                <tr>
                                    <td> Save The Birds
                                        <img className="ex-link" src="/assets/external_link.png"></img>
                                    </td>
                                    <td className="button-col">
                                        <button className="donate-button">
                                            donate
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> Save The Cats
                                        <img className="ex-link" src="/assets/external_link.png"></img>
                                    </td>
                                    <td className="button-col">
                                        <button className="donate-button">
                                            donate
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> Save The Dogs
                                        <a href="https://www.google.com" target="_blank">
                                            <img className="ex-link" src="/assets/external_link.png"></img>
                                        </a>
                                    </td>
                                    <td className="button-col">
                                        <button className="donate-button">
                                            donate
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td> Save The Crocodiles
                                        <img className="ex-link" src="/assets/external_link.png"></img>
                                    </td>
                                    <td className="button-col">
                                        <button className="donate-button">
                                            donate
                                        </button>
                                    </td>
                                </tr>

                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </body>
    );
}

export default Dashboard;