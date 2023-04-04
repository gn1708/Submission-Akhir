class MovieItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .card-img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          object-position: center;
        }

        .card-img:hover {
          width: 250px;
          height: 250px;
          object-fit: cover;
          object-position: center;
        }
        .movie-info {
          padding: 24px;
          color: #E1E1E1;
        }
        .movie-info > h2 {
          font-weight: lighter;
          color: #E1E1E1;
        }
        .movie-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
        .checked {
          color: orange;
        }
      </style>
      <img src="http://image.tmdb.org/t/p/w185/${this._movie.poster_path}" class="card-img" alt="poster-${this._movie.title}">
      <div class="movie-info">
        <h2>${this._movie.original_title}</h2>
        <p>Date Release : ${this._movie.release_date}</p>
      </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);
