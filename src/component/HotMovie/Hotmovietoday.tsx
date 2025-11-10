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
      <div className='max-sm:h-30 md:h-100 lg:h-110 sm:h-70 xl:h-180 relative '>
        <img src={IMAGE_BASE_URL + "https://image.tmdb.org/t/p/original/" + movieList?.[3]?.backdrop_path} className='w-full  object-cover mask-b-from-30% mask-b-to-90% ' />
        <div className='absolute bottom-0 lg:bottom-0 ml-18 md:bottom-10 xl:bottom-3 xl:mb-40 md:mb-20 sm:mb-10 max-sm:mb-0 sm:bottom-10 '>
          <div className='text-white text-[20px] lg:text-[55px] md:text-[35px] sm:[25]'>
            <h2>{movieList?.[3]?.title}</h2>
          </div>
          <div className='text-gray-50 font-bold  xl:text-[20px] lg:text-[20px] md:text-[17px] sm:text-[10px]  max-sm:hidden w-[47vw] my-8'>
            <p>{movieList?.[3]?.overview}</p>
          </div>
          <div className='flex gap-3  xl:h-[2.8vw] md:h-[4vw] h-[4vw]  relative'>
            <div className='flex justify-center gap-3  rounded-lg   xl:px-7 lg:px-5 md:px-4 sm:px-3 px-3 items-center bg-gray-100 hover:bg-gray-300 text-black cursor-pointer '>
              <div className='text-[15px]  md:text-[20px] xl:text-[28px] lg:text-[25px] sm:text-[15px] '>
                <FaPlay />
              </div>
              <p className='text-[10px] md:text-[15px] xl:text-[25px] lg:text-[24px] sm:text-[10px]'>เล่น</p>
            </div>
            <div className='flex justify-center gap-3  rounded-lg text-white px-3 xl:px-7 lg:px-5 md:px-4 sm:px-3 items-center bg-gray-600/75 hover:bg-gray-600/50 cursor-pointer'>
              <div className='text-[20px] md:text-[20px] xl:text-[35px] lg:text-[25px] sm:text-[20px]'>
                <IoIosInformationCircleOutline />
              </div>
              <p className='text-[10px] md:text-[15px] xl:text-[25px] lg:text-[24px] sm:text-[10px]'>ข้อมูลเพิ่มเติม</p>
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
