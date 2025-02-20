import { useState } from "react";
import axios from "axios";
import "./styles.css"; // Import the CSS file

export default function TextToneConverter() {
    const [text, setText] = useState("");
    const [tone, setTone] = useState("professional");
    const [responseData, setResponseData] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleSubmit = async () => {
        if (!text) {
            alert("Please enter some text!");
            return;
        }

        const requestData = {
            contents: [
                {
                    parts: [
                        { text: "Generate an email response for this: " + text + " in a tone: " + tone }
                    ]
                }
            ]
        };

        try {
            const response = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyADP20dzPgLwwkD5VBfJJbG5-Uy8CaDN3A",
                requestData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const extractedText =
                response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
            setResponseData(extractedText);
        } catch (error) {
            console.error("Error:", error);
            setResponseData("Error processing request.");
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(responseData).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return (
        <div className="container" style={{ padding: "20px" }} >
            <div className="card" style={{ width: "90vw" }} >
                <h2>Generate Email Reply</h2>

                <textarea
                    className="text-input"
                    placeholder="Past your email to be respond.."
                    value={text}
                    style={{ height: "50vh" }}
                    onChange={(e) => setText(e.target.value)}
                />

                {/* Select Dropdown */}
                <div className="select-container">
                    <select
                        className="select-dropdown"
                        value={tone}

                        onChange={(e) => setTone(e.target.value)}
                    >
                        <option value="professional" style={{ textAlign: "center" }} >Professional</option>
                        <option value="casual" style={{ textAlign: "center" }}>Casual</option>
                    </select>
                </div>

                <button className="submit-btn" onClick={handleSubmit}>Generate Response</button>

                {responseData && (
                    <div className="email-box">
                        <h3>Formatted Email:</h3>
                        <textarea
                            className="editable-text"
                            value={responseData}
                            style={{ height: "50vh" }}
                            onChange={(e) => setResponseData(e.target.value)}
                        />
                        <button className="copy-btn" onClick={handleCopy}>
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
