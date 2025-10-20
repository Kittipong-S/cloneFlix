const IMAGE_BASE_URL ='https://image.tmdb.org/t/p/original'

function HrmovieCard({movie}){
  return (
    <section className='hover:scale-110 transition-all ease-in'>
      <img src={IMAGE_BASE_URL+movie.backdrop_path} 
      className='w-[110px] md:w-[280px] rounded-sm hover:border-[3px] border-gray-400
       duration-150 cursor-pointer'/>
    <h2 className='w-[110px] md:w-[260px] text-white mt-2'> {movie.title}</h2>
    </section>
  )
}

export default HrmovieCard