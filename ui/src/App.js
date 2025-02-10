import './App.css';
import {useEffect, useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

function App() {
    const [movies, setMovies] = useState([]);
    const [addingMovie, setAddingMovie] = useState(false);

    async function handleAddMovie(movie) {
        const response = await fetch('/movies', {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
          const MovieFormServer = await response.json();
          setMovies([...movies, MovieFormServer]);
          setAddingMovie(false);
        }
      }




      useEffect(() => {


        async function fetchMovies() {
          const response = await fetch('/movies');
          if (response.ok) {
            const movies = await response.json();
            setMovies(movies);
          }
        }

        fetchMovies();
        
      }, []);

      async function handleDeleteMovie(movie) {
        const confirmed = window.confirm(`Are you sure you want to delete this movie "${movie.title}"?`);
        if (!confirmed) {
          return;
        }

        const response = await fetch(`/movies/${movie.id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          const nextMovies = movies.filter(m => m !== movie);
          setMovies(nextMovies);
        }
      }

      async function handleEditMovie(movie) {
        const confirmed = window.confirm(`NOT FUNCTIONAL YET!!!`);
      }


    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            {movies.length === 0
                ? <p>No movies yet. Maybe add something?</p>
                : <MoviesList movies={movies}
                              onDeleteMovie={handleDeleteMovie}
                              onEditMovie={handleEditMovie}
                />}
            {addingMovie
                ? <MovieForm onMovieSubmit={handleAddMovie}
                             buttonLabel="Add a movie"
                />
                : <button onClick={() => setAddingMovie(true)}>Add a movie</button>}
        </div>
    );
}

export default App;
