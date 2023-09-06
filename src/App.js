import "./App.css";
import React, { useState } from "react";
import axios from "axios";
function App() {
  const [name, setName] = useState();

  const getDate = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/articles", article)
      .then((response) => setArticleId(response.data.id));
  };
  return (
    <div className="App">
      <form onSubmit={getDate}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
