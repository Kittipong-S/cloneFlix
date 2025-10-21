import { useEffect} from 'react';
// import GobalApi from '../../../src/servic/service'
const IMAGE_BASE_URL ='https://image.tmdb.org/t/p/original'

function Hotmovietoday() {
// const [movieList, setMovieList] = useState([])
    useEffect(() => {
        gerMovieVideo();
    }, [])

    const gerMovieVideo = () => [
        // GobalApi.getMovieVideodb.then(resp => {
        //     // console.log(resp.data.results)
        //     // setMovieList(resp.data.results)

        // })
    ]
  return (
    <div className=''>
    
 <img src={IMAGE_BASE_URL+"https://image.tmdb.org/t/p/original/7QirCB1o80NEFpQGlQRZerZbQEp.jpg"} className=''/>

  
    </div>
  )
}

export default Hotmovietoday
