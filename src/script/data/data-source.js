
const getPosterURL = (posterpath) =>{
  return `https://api.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
}

class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=cb2cf019f95814618c94fb98f0375998&query=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;
