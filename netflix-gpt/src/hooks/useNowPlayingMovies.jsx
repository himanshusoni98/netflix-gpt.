import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEY } from "../utilis/constants";
import { addNowPlayingMovies } from "../utilis/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${API_KEY}`);
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json))
    };
}

export default useNowPlayingMovies;