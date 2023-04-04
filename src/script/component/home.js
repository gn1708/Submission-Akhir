class HomeMovies extends HTMLElement {
  connectedCallback() {
    const API_KEY = 'cb2cf019f95814618c94fb98f0375998';
    const API_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const movies = data.results.slice(0, 10); // Ambil 10 film pertama
        let movieListHTML = '';

        movies.forEach(movie => {
          const TV_ID = movie.id;
          const IMAGES_API_URL = `https://api.themoviedb.org/3/tv/${TV_ID}/images?api_key=${API_KEY}&language=en-US`;

          fetch(IMAGES_API_URL)
            .then(response => response.json())
            .then(data => {
              const image = data.posters[0];
              const imageUrl = `https://image.tmdb.org/t/p/w500/${image.file_path}`;
              const title = movie.name;

              movieListHTML += `
              <style>
              .movie {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
                padding: 1rem;
                background-color: #f7f7f7;
                border-radius: 5px;
              }
              
              .movie-poster {
                width: 100px;
                height: 150px;
                object-fit: cover;
                margin-right: 1rem;
              }
              
              .movie-title {
                font-size: 1.5rem;
                margin: 0;
              }
              
              </style>
                <div class="movie">
                  <img class="movie-poster" src="${imageUrl}" alt="${title} Poster">
                  <h2 class="movie-title">${title}</h2>
                </div>
              `;

              this.innerHTML = movieListHTML;
            })
            .catch(error => console.error(error));
        });
      })
      .catch(error => console.error(error));
  }
}

customElements.define('home-movies', HomeMovies);