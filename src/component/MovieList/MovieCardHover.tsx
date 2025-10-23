const IMAGE_BASE_URL ='https://image.tmdb.org/t/p/original'
function MovieCardHover({movie}) {
  return (
  <div className="absolute transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-100" > 
      <img src={IMAGE_BASE_URL+movie.backdrop_path}  className="  w-[250] md:w-[500px] 
       border-gray-400 cursor-pointer "/>
    </div>
  )
}

export default MovieCardHover
