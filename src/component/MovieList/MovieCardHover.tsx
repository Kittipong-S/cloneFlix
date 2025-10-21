const IMAGE_BASE_URL ='https://image.tmdb.org/t/p/original'
function MovieCardHover({movie}) {
  return (
    <div className="absolute">
      <img src={IMAGE_BASE_URL+movie.backdrop_path}  className="w-[110px] md:w-[280px] rounded-sm hover:border-[3px] border-gray-400
       duration-150 cursor-pointer "/>
    </div>
  )
}

export default MovieCardHover
