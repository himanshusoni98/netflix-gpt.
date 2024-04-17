//import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useMovieTrailor } from "../hooks/useMovieTrailor";
//import { TRAILER_VDO } from "../utilis/constants";

const BgVideo = ({movieId}) => {
  const trailerId = useSelector((store)=>store.movie?.nowTrailorVideo);
  useMovieTrailor(movieId);

  return (
    <div>
      <iframe className="w-full aspect-video"
      src={`https://www.youtube.com/embed/lV1OOlGwExM?si=${trailerId?.key}&autoplay=1&mute=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  )
}

export default BgVideo
