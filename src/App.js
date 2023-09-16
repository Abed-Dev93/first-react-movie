import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './components/MovieCard'

//  bddd24c9

const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=bddd24c9"

const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {

  const [ movies, setMovies ] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }



  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found!</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
