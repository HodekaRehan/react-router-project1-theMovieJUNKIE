import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "../context";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "false") {
      setError({ show: true, msg: data.Error });
      setIsLoading(false);
    } else {
      setMovie(data);
      setIsLoading(false);
    }
  };

  // invoke it when id changes
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h2>{error.msg}</h2>
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </div>
    );
  }

  const {
    Actors: actors,
    Poster: poster,
    Title: title,
    Plot: plot,
    Director: director,
    Writer: writer,
    Released: release,
    Language: language,
    Rated: rated,
    Genre: genre,
    Year: year,
  } = movie;
  return (
    <main>
      <section className="single-movie">
        <img src={poster === "N/A" ? url : poster} alt={title} />
        <div className="single-movie-info">
          <h2>{title}</h2>
          <p>
            <span className="title-tag">Plot:</span> {plot}
          </p>
          <p>
            <span className="title-tag">Actors:</span> {actors}
          </p>
          <p>
            <span className="title-tag">Genre:</span> {genre}
          </p>
          <p>
            <span className="title-tag">Director:</span> {director}
          </p>
          <p>
            <span className="title-tag">Writer:</span> {writer}
          </p>
          <p>
            <span className="title-tag">Language:</span> {language}
          </p>
          <p>
            <span className="title-tag">Rated:</span> {rated}
          </p>
          <p>
            <span className="title-tag">Release Date:</span> {release}
          </p>
          <p>
            <span className="title-tag">Year:</span> {year}
          </p>
          <Link to="/" className="btn">
            Back to Movies
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SingleMovie;
