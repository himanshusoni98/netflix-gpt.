import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constants";
import { addTrailerVideo } from "../utilis/movieSlice";
export const useMovieTrailor = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getTailorData();
    }, [])
    const getTailorData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/823464/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addTrailerVideo())

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
    }
}

