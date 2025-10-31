import { useEffect, useState } from 'react';
import GobalApi from '../../../src/servic/service'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
import GenerMoiveList from '../gener/GenerMoiveList';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";


function Hotmovietoday() {
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    gerMovieVideo();
  }, [])

  const gerMovieVideo = () => [
    GobalApi.getMovieVideodb.then(resp => {
      // console.log(resp.data.results)
      setMovieList(resp.data.results)

    })

  ]
  console.log(movieList?.[3]);


  return (
    <div className=''>
      <div className='h-180 bg-gradient-to-b to-gray-600 relative '>
        <img src={IMAGE_BASE_URL + "https://image.tmdb.org/t/p/original/1leYKN0DPNffpldGnCWnbXaiWoD.jpg"} className='w-full object-cover ' />
        <div className='absolute  bottom-4 ml-18 mb-30 '>
          <div className='text-white text-[65px]'>
<h2>{movieList?.[3]?.title}</h2>
          </div>
          <div className='text-gray-50 font-bold text-[20px] w-[47vw] my-8'>
<p>{movieList?.[3]?.overview}</p>
          </div>
          <div className='flex gap-5 '>
          <div className='flex justify-between gap-4  rounded-md  px-7  items-center bg-gray-100 hover:bg-gray-300 text-black cursor-pointer'>
            <div className='text-[28px]'>
            <FaPlay />
            </div>
            <p className='text-[25px]'>เล่น</p>
          </div>
          <div className='flex justify-between gap-5  rounded-md text-white p-3 items-center bg-gray-600/75 hover:bg-gray-600/50 cursor-pointer'>
            <div className='text-[35px]'>
            <IoIosInformationCircleOutline />
            </div>
            <p className='text-[25px]'>ข้อมูลเพิ่มเติม</p>
          </div>
          </div>
        </div>

      </div>
      <div className='relative'>
        <div>
          <GenerMoiveList />
        </div>
      </div>
    </div>
  )
}

export default Hotmovietoday
