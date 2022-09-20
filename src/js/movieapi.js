async function movie(movieName) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=6c8574f841b7e778b8bd8a90b0eb644a&language=en-US`
    );
    return await response.json();
  }

  export { movie }