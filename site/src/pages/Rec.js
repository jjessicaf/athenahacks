import React, {useEffect, useState} from "react";
import "../styles/rec.css"

function Rec() {
    const [heartSrc, setHeartSrc] = useState("/assets/Heart.png");
    const [hearted, setHearted] = useState(false);

    const toggleHeart = () => {
        if (!hearted) {
            setHeartSrc("/assets/Favorite.png");
        } else {
            setHeartSrc("/assets/Heart.png");
        }
        setHearted(!hearted);
    };
    return (
        <div className="rec-container">
            <div className="header">
                <h2>Here are our recommendations:</h2>
                <p>Save the organizations you're interested in supporting!</p>
            </div>
            <div className="rec-list">
                <div className="example1">
                    <img className="heart" src={heartSrc} alt="Heart" onClick={toggleHeart}/>
                    <p>Save the Crocodiles</p>
                    <a><img className="external-icon" src="/assets/External%20Link.png" alt="Link"/></a>
                </div>
                <div className="example2">
                    <img className="heart" src={heartSrc} alt="Heart" onClick={toggleHeart}/>
                    <p>Save the Capybaras</p>
                    <a><img className="external-icon" src="/assets/External%20Link.png" alt="Link"/></a>
                </div>

            </div>
            <div className="see-more-div"><a className="see-more">see more</a></div>
            <button>done</button>


        </div>
    );
}

export default Rec;