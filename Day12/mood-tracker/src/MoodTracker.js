import { useState } from "react";

export default function MoodTracker() {

    const [mood, setMood] = useState("🙂");
    const [moodInfomation, setMoodInfomation] = useState({ description: "", song: "", memory: "" });

    const moodList = {
        "😊": {color: "#DFFFD6", 
            description: "Green forest calm my anxiety and make me happy.",
            song: { title: "Wavin' Flag", link: "https://www.youtube.com/watch?v=WTJSt4wP2ME" },
            memory: "One day, I stayed up late watching a movie at the theater by myself. That day, my mom came to find me. I was very happy to see her, but also upset. When she asked me to go home, I played hard to get and told her to buy me corn, which she did. But I was still not satisfied, so I told her to buy me gum too, which she did. Then, I became very satisfied and happy. "
        },
        "😎": {color: "#FFE3F1", 
            description: "Pink because my niece love pink.",
            song: { title: "California Dreamin'", link: "https://www.youtube.com/watch?v=N-aK6JnyFmk" },
            memory: "When I am able to take my niece and nephew out on their birthdays and they tell me I am the best aunt ever, it makes me feel cool. "
        },
        "😢": {color: "#FFD6D6", 
            description: "Red because it anger and sadness",
            song: { title: "Always Forever", link: "https://www.youtube.com/watch?v=x7_jYYISAbM" },
            memory: "My brother accidentally hit my cat, named Aisha, with a car. I understand accidents happen, but what makes me angry is that he just left my cat to suffer and die alone. He could have woken me up, and I could have taken my cat to the hospital, or at the very least, spent her last moments with her"
        },
        "🤓": {color: "#D6ECFF", 
            description: "Blue for acdemic because it make me think of uniform.",
            song: { title: "Rory Gilmore Study Playlist", link: "https://www.youtube.com/watch?v=y_rtGdxcoXU" },
            memory: "When I started college as a Nursing major, this was the playlist I used to study for my tests. So, whenever I play this playlist, it reminds me of all those nights I spent studying. "
        }
    };

    const handleMoodChange = (newMood) => {
        setMood(newMood);
        setMoodInfomation(moodList[newMood] || { description: "", song: "", memory: "" });
    };

    return (
        <div style={{backgroundColor: moodList[mood]?.color || "#FFFFFF", textAlign: "center", minHeight: "100vh",paddingInline: "100px"}}>
            <h1>Mood Tracker</h1>
            <p><strong>Current Mood:</strong> {mood}</p>
            
            {moodList[mood] && (
                <div>
                    <p><strong>Description: </strong><em>{moodList[mood].description}</em></p>
                    <p><strong>Song: </strong>
                        <a href={moodList[mood].song.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: "#007BFF", textDecoration: "none" }}>
                            {moodList[mood].song.title}</a></p>
                    <p><strong>Memory:</strong> {moodList[mood].memory}</p>
                </div>
            )}
            <button onClick={() => handleMoodChange("😊")} 
                style={{ margin: "5px", padding: "10px", background: "lightgreen" }}> Very Happy</button>
            <button onClick={() => handleMoodChange("😎")} 
                style={{ margin: "5px", padding: "10px", background: "lightpink" }}> Cool</button>
            <button onClick={() => handleMoodChange("🤓")} 
                style={{ margin: "5px", padding: "10px", background: "lightblue" }}> Academic</button>
            <button onClick={() => handleMoodChange("😢")} 
                style={{ margin: "5px", padding: "10px", background: "lightcoral" }}> Upset</button>
        </div>
    );
}
