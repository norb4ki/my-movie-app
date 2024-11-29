export const isMovieFavorite = (state, movie_id) => {
    const favoriteMovies = state.favoriteReducer?.data.results || [];
    return Array.isArray(favoriteMovies) && favoriteMovies.some(movie => movie.id === movie_id);
};
