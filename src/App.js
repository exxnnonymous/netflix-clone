import React from "react";
import './App.css'
import Rows from './components/Rows'
import request from "./request";
import Banner from "./components/Banner";
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Rows title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
      <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
