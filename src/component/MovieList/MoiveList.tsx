import { useEffect, useState,  } from 'react'
// import MovieCard from './MovieCard';
import GlobalApi from '../../servic/service'
import HrmovieCard from './HrmovieCard';
import MovieCardHover from './MovieCardHover';
// import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";





function MoiveList({genreId}) {
    const [movieList, setMovieList] = useState([])
    // const screemWindow = window.innerWidth
    // const elementRef = useRef<number | null >(null);
    useEffect(() => {
        getmovieBygenreId()
    })
    const getmovieBygenreId = () => {
        GlobalApi.getmovieByGenreId(genreId).then(resp => {
            // console.log(resp.data.results)
            setMovieList(resp.data.results)

        })
    }
  return (
   <div  className='flex  gap-2 scrollbar-hide 
             pt-5 px-3 pb-5  ' >
                {movieList.map((item) => (
                    <>
                    <MovieCardHover movie={item} />
                    {/* <MovieCard movie={item} /> */}
                    
                   </>

                ))}
            </div> 
            

  )
}

export default MoiveList
