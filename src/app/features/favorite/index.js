export const isMovieFavorite = (state, movie_id) => {
    return state.favoriteReducer.data.some(movie => movie.id === movie_id);
};