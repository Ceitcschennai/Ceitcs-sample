import React, { useState } from "react";
import "../styles/applicationform.css";

// --- CustomDropdown Component ---
const CustomDropdown = ({ selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['fresher', 'experienced', 'internship'];

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-wrapper">
            <label className="dropdown-label">
                Experience <span className="required-star">*</span>
            </label>

            <div className="dropdown-container">
                <div
                    className="dropdown-selected"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selected || "Select One..."}
                    <span className="dropdown-arrow">{isOpen ? "▴" : "▾"}</span>
                </div>

                {isOpen && (
                    <ul
                        className="dropdown-list"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={`dropdown-option ${selected === option ? "selected" : ""}`}
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

// --- ApplicationForm Component ---
const ApplicationForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [experience, setExperience] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="form-container">
            {submitted && (
                <div className="popup-message">
                    ✅ Thank you! You will receive a mail shortly.
                </div>
            )}

            <form className="application-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Application Form</h2>

                <label>
                    Name <span className="required-star">*</span>
                </label>
                <input type="text" required placeholder="your name"/>

                <label>
                    Email <span className="required-star">*</span>
                </label>
                <input type="email" required placeholder="your email"/>

                <label>
                    Position Applied For <span className="required-star">*</span>
                </label>
                <input type="text" required placeholder="Eg:UX Designer"/>

                <CustomDropdown selected={experience} setSelected={setExperience} />

                <label>
                    Resume <span className="required-star">*</span>
                </label>
                <input type="file" className="file-input" required accept=".pdf,.doc,.docx" />

                <label>
                    Certificate <span className="required-star">*</span>
                </label>
                <input type="file" className="file-input" required accept=".pdf" />

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;
