import { useState } from "react";
import CauseChoice from "./CauseChoice";
import "./Preferences.css"

const categories = [
    "animals", "art", "athletics", "autism", "black-led", "cancer", "cats", "climate",
    "conservation", "culture", "disease", "dogs", "education", "environment", "food-security",
    "gender-equality", "health", "housing", "immigrants", "indigenous-peoples", "justice", "legal", "lgbt",
    "mental-health", "music", "oceans", "poverty", "racial-injustice", "refugees", "research",
    "science", "space", "transgender", "wildfires", "wildlife", "youth"
];

function Preferences() {
    const [formData, setFormData] = useState({ causes: [] });
    // formData = selectedCauses
    const user = Number(localStorage.getItem("uid"));

    const handleSubmitPreferences = () => {
        fetch("/api/update-preferences", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: user,
                causes: formData
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Preferences updated:", data);
                // Handle response as needed
            })
            .catch(error => {
                console.error("Error updating preferences:", error);
            });
    };

    const handleUpdateData = (updatedData) => {
        setFormData(updatedData);
    };

    return (
        <div className="center-block">
            <h2>Choose 3-5 causes you're committed to.</h2>
            <form className="choices-container">
                    {categories.map((category, ind) => (
                        <div className="cause-choices" style={{maxWidth: "18rem"}}>
                            <CauseChoice
                                key={ind}
                                filterName={category}
                                updateData={handleUpdateData}
                                formData={formData}
                            />
                        </div>
                    ))}
            </form>
            <button id="submit-choices" onClick={handleSubmitPreferences}>go</button>
        </div>
    );
    }

export default Preferences;
