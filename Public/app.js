const searchBar = document.getElementById('searchBar');
const movieHolder = document.getElementById('movieHolder');
const lastQuery = {query: ''};

function fetchMovies(type) {
    type = type || 'popular';
    fetch(`/list?list_type=${type}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        movieHolder.innerHTML = '';

        if (data.error) {
            console.error(data.error);
            return;
        }

        if (data.results.length === 0) {
            movieHolder.innerHTML = '<p>No movies found</p>';
            return;
        }

        data.results.forEach(movie => {
            const img = movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="movieImg" alt="...">` : '<p class="movieImg">No image available</p>';
            const movieCard = `
            <div class="movie">
                ${img}
                <div class="card-body">
                    <h5 class="card-title
                    ">${movie.title}</h5>
                </div>
            </div>
            `;
            movieHolder.innerHTML += movieCard;
        });
    })
    .catch(err => console.error(err));
};

// fetchMovies()

function movieButton (query) {
    console.log(query);

    if (lastQuery.query === query) {
        return;
    }

    if (query === 'popular' || query === 'top_rated' || query === 'upcoming' || query === 'now_playing'){
        fetchMovies(query);
        lastQuery.query = query;
        return;
    }
}

searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = searchBar.value;

        fetch(`/search?query=${query}`)
        .then(response => response.json())
        .then(data => {

            if (data.error) {
                console.error(data.error);
                return;
            }
            if (data.results.length === 0) {
                movieHolder.innerHTML = '<p>No movies found</p>';
                return;
            }

            console.log(data)
            movieHolder.innerHTML = '';

            data.results.forEach(movie => {
                const title = movie.title ? movie.title : 'No title available';
                const img = movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="movieImg" alt="...">` : '<p class="movieImg">No image available</p>';
                const release = movie.release_date ? movie.release_date : 'N/A';
                const rating = movie.vote_average ? movie.vote_average : 'N/A';
                const vote_count = movie.vote_count ? movie.vote_count : 'N/A';
                const overview = movie.overview ? movie.overview : 'Overview: N/A';
                const movieCard = `
                <div class="movie">
                    ${img}
                    <div class="movieInfo">
                        <h2 class="movieTitle">${title}</h2>
                        <p class="movieRelease">Release date: ${release}</p>
                        <p class="movieRating">Rating: ${rating}</p>
                        <p class="movieVoteCount">Votes: ${vote_count}</p>
                        <p class="movieOverview">${overview}</p>
                    </div>
                </div>
                `;
                movieHolder.innerHTML += movieCard;
            });
        })
        .catch(err => console.error(err));
    }
});
