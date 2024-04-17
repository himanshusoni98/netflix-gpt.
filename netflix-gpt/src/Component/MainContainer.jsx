
import { useSelector } from 'react-redux';
import BgVideo from './BgVideo';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;
    
    const mainMovie = movies.results[0];

    const {title, overview, id} = mainMovie;

  return (
    <div className=''>
        <VideoTitle title={title} overview={overview} />
        <BgVideo  movieId={id}/>
    </div>
  )
}

export default MainContainer