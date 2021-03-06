const movies = [
    {
        id:"0",
        name:"Star Wars - The new one",
        score: 0.1
    },
    {
        id:"1",
        name:"Avengers - The new one",
        score: 8
    },
    {
        id:"2",
        name:"The Godfather 1",
        score: 99
    },
    {
        id:"3",
        name:"Logan",
        score: 2
    }
];

export const getMoview = () => movies;

export const getById = (id,id2) => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
};

export deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}