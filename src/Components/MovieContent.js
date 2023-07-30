import React from "react";

function MovieContent(props){



    return(
        <>
        <h1>Movie name : {props.moviename}</h1>
        <h2>Movie Rank : {props.movieRank}</h2>
        </>


    )
}
export default MovieContent;