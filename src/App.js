import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [aadvice, setAdvise] = useState("empty");
  const ad = () => {
    //useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Behzadk2/imdb-top-250/main/List.json"
      )
      .then((res) => {
        setAdvise(res.data.movies[Math.floor(Math.random() * 250)]);
        console.log(res);
        //  });
      }, []);
  };

  return (
    <div className="container">
      <div className="box_rank">
        <h1>click on Dice! (offer a random movie)</h1>
      </div>

      <div className="box_title">
        <h2> Movie : {aadvice.title}</h2>
        <h2>Rank :: {aadvice.rank}</h2>
      </div>
      <div className="box_dice">
        <button onClick={ad}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
