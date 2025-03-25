const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

const main = document.getElementById("main");
const search = document.getElementById("search");
const genreSelect = document.getElementById("genre");
const yearSelect = document.getElementById("year");
const sortSelect = document.getElementById("sort");
const toggleMode = document.getElementById("toggle-mode");
const searchIcon = document.getElementById("search-icon");

// EmailJS Initialization
emailjs.init("xgekRh1ycIjCRnNqH");

// Toggle dark/light mode
toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Fetch and display movies
const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
};

// Display movies
const showMovies = (movies) => {
    main.innerHTML = "";
    if (movies.length === 0) {
        main.innerHTML = "<h2>No movies found</h2>";
        return;
    }
    movies.forEach(({ title, poster_path, vote_average, overview }) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" class="movie-img"/>
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${vote_average}</span>
            </div>
            <div class="overview"><h3>Overview</h3>${overview}</div>
        `;
        movieElement.querySelector(".movie-img").addEventListener("click", () => {
            movieElement.classList.toggle("active");
        });
        main.appendChild(movieElement);
    });
};

// Fetch genres and populate the dropdown
const loadGenres = async () => {
    const res = await fetch(GENRE_API);
    const data = await res.json();
    data.genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre.id;
        option.innerText = genre.name;
        genreSelect.appendChild(option);
    });
};

// Populate the year dropdown dynamically
const loadYears = () => {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1980; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.innerText = year;
        yearSelect.appendChild(option);
    }
};

// Apply filters and fetch movies based on selection
const applyFilters = () => {
    let filterURL = `${API_URL}`;

    if (genreSelect.value) {
        filterURL += `&with_genres=${genreSelect.value}`;
    }
    if (yearSelect.value) {
        filterURL += `&primary_release_year=${yearSelect.value}`;
    }
    if (sortSelect.value) {
        let sortValue = "";
        if (sortSelect.value === "release_asc") sortValue = "release_date.asc";
        if (sortSelect.value === "release_desc") sortValue = "release_date.desc";
        if (sortSelect.value === "rating_high") sortValue = "vote_average.desc";
        if (sortSelect.value === "rating_low") sortValue = "vote_average.asc";
        filterURL += `&sort_by=${sortValue}`;
    }

    getMovies(filterURL);
};

// Event listeners for filters
searchIcon.addEventListener("click", () => {
    if (search.value) {
        getMovies(SEARCH_API + search.value);
    }
});

genreSelect.addEventListener("change", applyFilters);
yearSelect.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

// Comment form submission
const commentForm = document.getElementById("comment-form");
const commentMessage = document.getElementById("comment-message");

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.getElementById("user-name").value;
    const comment = document.getElementById("comment").value;

    // Send email using EmailJS
    emailjs.send("service_1r7ibih", "template_xum0zqd", {
        from_name: userName,
        message: comment,
    })
    .then(() => {
        commentMessage.textContent = "Comment submitted successfully!";
        commentMessage.style.color = "green";
        commentForm.reset();
    })
    .catch((error) => {
        commentMessage.textContent = "Failed to submit comment. Please try again.";
        commentMessage.style.color = "red";
        console.error("EmailJS Error:", error);
    });
});

// Load movies, genres, and years on page load
getMovies(API_URL);
loadGenres();
loadYears();
const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

const main = document.getElementById("main");
const search = document.getElementById("search");
const genreSelect = document.getElementById("genre");
const yearSelect = document.getElementById("year");
const sortSelect = document.getElementById("sort");
const toggleMode = document.getElementById("toggle-mode");
const searchIcon = document.getElementById("search-icon");

// EmailJS Initialization
emailjs.init("xgekRh1ycIjCRnNqH");

// Toggle dark/light mode
toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Fetch and display movies
const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
};

// Display movies
const showMovies = (movies) => {
    main.innerHTML = "";
    if (movies.length === 0) {
        main.innerHTML = "<h2>No movies found</h2>";
        return;
    }
    movies.forEach(({ title, poster_path, vote_average, overview }) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" class="movie-img"/>
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${vote_average}</span>
            </div>
            <div class="overview"><h3>Overview</h3>${overview}</div>
        `;
        movieElement.querySelector(".movie-img").addEventListener("click", () => {
            movieElement.classList.toggle("active");
        });
        main.appendChild(movieElement);
    });
};

// Fetch genres and populate the dropdown
const loadGenres = async () => {
    const res = await fetch(GENRE_API);
    const data = await res.json();
    data.genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre.id;
        option.innerText = genre.name;
        genreSelect.appendChild(option);
    });
};

// Populate the year dropdown dynamically
const loadYears = () => {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1980; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.innerText = year;
        yearSelect.appendChild(option);
    }
};

// Apply filters and fetch movies based on selection
const applyFilters = () => {
    let filterURL = `${API_URL}`;

    if (genreSelect.value) {
        filterURL += `&with_genres=${genreSelect.value}`;
    }
    if (yearSelect.value) {
        filterURL += `&primary_release_year=${yearSelect.value}`;
    }
    if (sortSelect.value) {
        let sortValue = "";
        if (sortSelect.value === "release_asc") sortValue = "release_date.asc";
        if (sortSelect.value === "release_desc") sortValue = "release_date.desc";
        if (sortSelect.value === "rating_high") sortValue = "vote_average.desc";
        if (sortSelect.value === "rating_low") sortValue = "vote_average.asc";
        filterURL += `&sort_by=${sortValue}`;
    }

    getMovies(filterURL);
};

// Event listeners for filters
searchIcon.addEventListener("click", () => {
    if (search.value) {
        getMovies(SEARCH_API + search.value);
    }
});

genreSelect.addEventListener("change", applyFilters);
yearSelect.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

// Comment form submission
const commentForm = document.getElementById("comment-form");
const commentMessage = document.getElementById("comment-message");

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.getElementById("user-name").value;
    const comment = document.getElementById("comment").value;

    // Send email using EmailJS
    emailjs.send("service_1r7ibih", "template_xum0zqd", {
        from_name: userName,
        message: comment,
    })
    .then(() => {
        commentMessage.textContent = "Comment submitted successfully!";
        commentMessage.style.color = "green";
        commentForm.reset();
    })
    .catch((error) => {
        commentMessage.textContent = "Failed to submit comment. Please try again.";
        commentMessage.style.color = "red";
        console.error("EmailJS Error:", error);
    });
});

// Load movies, genres, and years on page load
getMovies(API_URL);
loadGenres();
loadYears();
