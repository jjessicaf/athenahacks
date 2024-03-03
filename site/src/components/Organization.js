import React from "react";

function Organization({ name, websiteUrl, coverImageUrl, slug }) {
    const handleClick = () => {
        window.open(websiteUrl, "_blank");
    };

    return (
        <div className="organization" onClick={handleClick}>
            <div
                className="organization-image"
                style={{ backgroundImage: `url(${coverImageUrl})` }}
            >
                <div className="overlay">{name}</div>
            </div>
        </div>
    );
}

export default Organization;
