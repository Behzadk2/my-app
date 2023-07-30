

import axios from "axios";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import MovieContent from "./Components/MovieContent";
import Dice from "./Components/Dice";



function App() {
const[imovie,setImovie] = useState('')

function fc(){
  axios.get("https://raw.githubusercontent.com/Behzadk2/imdb-top-250/main/List.json").then((res) =>
  setImovie(res.data.movies[Math.floor(Math.random()*250)]) 
  )
}


  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/Behzadk2/imdb-top-250/main/List.json").then((res) =>
     setImovie(res.data.movies[0]) 
     )
  },[])
  return (
    <>
    <Header></Header>
    <MovieContent moviename={imovie.title} movieRank={imovie.rank}></MovieContent>
    <Dice onclick={fc}></Dice>
    </>
  );
}

export default App;
