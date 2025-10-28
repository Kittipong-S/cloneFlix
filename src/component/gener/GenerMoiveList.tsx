import GeneresList from './GeneresList'
import MovieList from '../MovieList/MoiveList'

function GenerMoiveList() {
  return (
    <div className=''>
      {GeneresList.genere.map((item,index)=> index<4&&(
        <div className='p-2 px-8 md:px-16'>
            <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
        <MovieList genreId={item.id} />
        
        
        </div>
      )
    )}
    </div>
  )
}

export default GenerMoiveList
