import { MORE_ICON, PLAY_ICON } from "../icons/Icons"

const VideoTitle = ({title , overview}) => {
  return (
    <div className="pt-96 px-16 absolute text-white bg-gradient-to-t from-black w-full aspect-video">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-1/3 font-light">{overview}</p>
      <div className="pt-4 font-bold flex">
        <button className="px-8 py-2 bg-gray-400 rounded-lg hover:bg-gray-300 text-black flex">{PLAY_ICON}
        Play
        </button>
        <button className="px-8 py-2 bg-red-300 hover:bg-red-400 ml-3 rounded-lg text-black flex">{MORE_ICON}
        More
        </button>
      </div>
    </div>
  )
}

export default VideoTitle