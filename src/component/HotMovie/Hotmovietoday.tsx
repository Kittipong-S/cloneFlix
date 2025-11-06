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
      <div className='h-180 md:h-160 lg:h-170 sm:h-140 xl:h-180 relative '>
        <img src={IMAGE_BASE_URL + "https://image.tmdb.org/t/p/original/" + movieList?.[3]?.backdrop_path} className='w-full  object-cover mask-b-from-30% mask-b-to-90% ' />
        <div className='absolute  bottom-70 ml-18 mb-30 md:bottom-50 lg:bottom-3 sm:bottom-30'>
          <div className='text-white text-[20px] lg:text-[65px] md:text-[35px] sm:[25]'>
            <h2>{movieList?.[3]?.title}</h2>
          </div>
          <div className='text-gray-50 font-bold text-[10px] lg:text-[20px] md:text-[17px]  w-[47vw] my-8'>
            <p>{movieList?.[3]?.overview}</p>
          </div>
          <div className='flex gap-5 '>
            <div className='flex justify-between gap-4  rounded-md  px-2 md:px-4 xl:px-7 lg:px-6 sm:px-3 items-center bg-gray-100 hover:bg-gray-300 text-black cursor-pointer '>
              <div className='text-[20px] md:text-[20] xl:text-[28px] lg:text-[25] sm:text-[18]'>
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
