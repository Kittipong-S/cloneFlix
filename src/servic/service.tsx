import axios from "axios";
 
const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = '17dbbd826e508e8ec26b7842b4dde23f'
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=17dbbd826e508e8ec26b7842b4dde23f'
//https://api.themoviedb.org/3/movie/popular?api_key=17dbbd826e508e8ec26b7842b4dde23f

const getMovieVideodb =axios.get(movieBaseUrl+
    "/movie/popular?api_key="+api_key)

    const getmovieByGenreId =(id:string)=> axios.get(movieByGenreBaseURL+"&with_genres="+id)

    export default {
        getMovieVideodb,
        getmovieByGenreId

    }