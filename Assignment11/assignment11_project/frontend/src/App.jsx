import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PersonalInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/personal")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching personal info:", error));
  }, []);

  return (
    <div>
      <h2>Personal Info</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Email: {item.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Hobbies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/hobbies")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching hobbies:", error));
  }, []);

  return (
    <div>
      <h2>Hobbies</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Hobby: {item.hobby_name}</p>
            <p>Description: {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/personal-info" style={{ marginRight: "10px" }}>Personal Info</Link>
        <Link to="/hobbies">Hobbies</Link>
      </nav>

      <Routes>
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </div>
  );
}

export default App;


