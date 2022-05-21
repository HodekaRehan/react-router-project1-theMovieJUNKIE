import React from "react";

import SearchForm from "../Components/SearchForm";
import MovieList from "../Components/MovieList";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <MovieList />
    </main>
  );
};

export default Home;
