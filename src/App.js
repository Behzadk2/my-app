

import axios from "axios";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import MovieContent from "./Components/MovieContent";



function App() {
const[imovie,setImovie] = useState('')

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/Behzadk2/imdb-top-250/main/List.json").then((res) =>
     setImovie(res.data.movies[Math.floor(Math.random()*250)]) 
     )
  },[])
  return (
    <>
    <Header></Header>
    <MovieContent></MovieContent>
    </>
  );
}

export default App;
