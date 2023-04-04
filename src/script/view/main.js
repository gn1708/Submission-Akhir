import '../component/movie-list.js';
import '../component/search-bar.js';
import '../component/home.js';
import DataSource from '../data/data-source.js';
const baseUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=cb2cf019f95814618c94fb98f0375998&language=en-US&page=1';
const API_KEY = 'cb2cf019f95814618c94fb98f0375998';
const API_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');
  const getMovies = document.querySelector('home-movies');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    movieListElement.movies = results;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};



export default main;
