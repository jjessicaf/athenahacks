import React, {useEffect, useState} from "react";
import "../styles/dashboard.css"

function Dashboard() {
    const uid = parseInt(localStorage.getItem("uid"), 10);
    const [causes, setCauses] = useState([]);


    useEffect(() => {
        // Function to fetch user preferences
        const fetchUserPreferences = async () => {
            try {
                const response = await fetch('/api/preferences/post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({userId: uid })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user preferences. response not ok');
                }
                const responseData = await response.json();
                setCauses(responseData.getData());
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        };

        fetchUserPreferences();
    });
    return (
        <body>
            <div className="main-main-container">

                <div className="title">Welcome back, friend!</div>

                <div className="main-container">
                    <div id="graph">
                        GRAPH GOES HERE
                    </div>
                    <div className="textbox">
                        <div className="donation-streak-text">
                            You’ve had a donation streak of
                            3 months. Your top organization is
                            ________.
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
                                <a className="link" href="">
                                    edit
                                </a>
                            </div>

                            <div className="causes-list">
                                {causes.map(cause => (
                                    <p className="cause">{cause.name}</p>
                                ))}
                                {/*<p className="cause">animals</p>*/}
                                {/*<p className="cause">science</p>*/}
                                {/*<p className="cause">housing</p>*/}
                                {/*<p className="cause">oceans</p>*/}
                            </div>
                        </div>

                        <div>
                            <button className="rec-orgs-button">recommend more organizations</button>
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