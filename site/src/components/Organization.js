import React, { useEffect } from "react";

function Organization({ name, websiteUrl, coverImageUrl, slug }) {

    return (
        <div className="organization">
            <div
                className="organization-image"
                style={{
                    backgroundImage: `url(${coverImageUrl})`,
                    position: "relative",
                    width: "100%",
                    height: "200px", // Set the desired height for the organization card
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        padding: "8px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                        <a href={`https://${websiteUrl}`} target="_blank" style={{ textDecoration: "underline", color: "white" }}>
                            <h3 style={{ fontFamily: "Montserrat, sans-serif", color:"white",
                                textDecoration: "none",
                                fontWeight: 600, fontSize: "32px", marginLeft: "2em" }}>
                                {name}</h3>
                        </a>
                        <a
                            data-every-style
                            href={`https://www.every.org/${slug}#/donate`}
                            style={{ marginRight: "7em" }}
                        >
                            Donate
                        </a>
                </div>
            </div>
        </div>
    );
}

export default Organization;
