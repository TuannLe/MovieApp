export const INIT_STATE = {
    auth: {
        currentUser: {},
        favorites: [],
        watching: [],
        message: '',
        isLoading: false,
        message: '',
        error: false
    },
    category: {
        isLoading: false,
        data: [],
        error: false
    },
    movie: {
        movies: [],
        moviesByCategory: [],
        moviesSearch: [],
        linksMovie: [],
        message: '',
        isLoading: false,
        error: false
    }
}