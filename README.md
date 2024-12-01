# Movie Website

## What's Inside
This project utilizes the [The Movie Database (TMDB) API](https://www.themoviedb.org/) to fetch movie data.  
The website displays movies based on the selected dropdown option:
- **Popular Movies**
- **Now Airing**
- **Favorite Movies**

Each movie card is interactive and navigates to a detailed information page when clicked.

---

## Navigation
This website supports keyboard navigation with the following controls:
- **Tab**: Focus on elements on the page.
- **ArrowUp**: Scroll the page up when unfocused or move to the previous focusable element.
- **ArrowDown**: Scroll the page down when unfocused or move to the next focusable element.
- **ArrowRight**: Move to the next focusable element.
- **ArrowLeft**: Move to the previous focusable element.
- **Escape**: Remove focus from the currently focused element.
- **Enter**: Activate a focused card or open the dropdown menu.

---

## Optimization
- **State Persistence**: The Redux store is saved locally after each update for faster access and reduced API calls.
- **Favorite Movies Caching**: The favorite movies list is not refetched unless a `POST` request modifies the list.
- **Efficient Movie Fetching**: The movie lists are only refetched if at least 60 seconds have passed since the last fetch.

---

## Technologies Used
- **React**
- **React Router**
- **Redux Toolkit**
- **Redux Saga**

---

## Simplifications
### Authentication
The project currently uses a preloaded authentication token for simplicity. Future versions may implement dynamic authentication.

### Pagination
The project loads only the top 20 movies from each category.

### Filters
The current dropdown menu limits the variety of fetch requests. Adding advanced filters could provide a better user experience.
