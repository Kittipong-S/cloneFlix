const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
import { FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
function MovieCardHover({ movie }) {
  return (
    <>
      <div className="group bg-slate-900 col-span relative h-[10vw]  rounded-lg " >
        <img src={IMAGE_BASE_URL + movie.backdrop_path} className="cursor-pointer object-cover transition duration-200 shadow-xl rounded-lg group-hover:opacity-90
      sm:group-hover:opacity-0 delay-300 w-full h-[10vw]"/>
        <h2 className='w-[110px] md:w-[340px] text-white mt-2'> </h2>
        <div className=" opacity-0 absolute top-0 transition duration-200 ease-in-out z-10 invisible sm:visible delay-300 w-[420px] scale-0  rounded-xl
      group-hover: scale-110 group-hover:-translate-y-[6vw] group-hover:opacity-100">
          <img className="cursor-pointer object-cover trabsition duration-200 shadow-xl rounded-t-md w-full h-[12vw]" 
          src={IMAGE_BASE_URL + movie.backdrop_path} />
          <div className=" z-10 bg-slate-950 p-2 lg:p-4 absolute w-full transition  shadow-md rounded-b-md border border-amber-50 h-[8vw] ">
            <div className="flex flex-row justify-between items-center gap-3">
              <div className="flex space-x-4">
                <div className="cursor-pointer text-[20px] w-12 h-8 lg:w-12 lg:h-12 bg-gray-200  rounded-full flex justify-center items-center
            transition hover:bg-gray-400">
                  <FaPlay />
                </div>
                <div className="cursor-pointer text-[35px] text-gray-400 w-12 h-8 lg:w-12 lg:h-12 border-2 border-gray-400  rounded-full flex justify-center items-center
            transition hover:text-gray-50 hover:border-gray-50">
                  <FiPlus />
                </div>
                <div className="cursor-pointer text-[30px] text-gray-400 w-12 h-8 lg:w-12 lg:h-12 border border-gray-400  rounded-full flex justify-center items-center
            transition hover:text-gray-50 hover:border-gray-50 hover:bg-gray-800 " >
                  <AiOutlineLike />
                </div>

              </div>
              <div className="justify-end">
                12/12/2024
              </div>
              <div className="cursor-pointer text-[40px] text-gray-400 w-12 h-8 lg:w-12 lg:h-12 border border-gray-400 z-10 rounded-full flex justify-center items-center
            transition hover:text-gray-50 hover:border-gray-50">
                  <MdKeyboardArrowDown />
                </div>
              {/* <div className=" flex flex-row mt-4 gap-2 item-center">
                <p className="cursor-pointer text-white text-xs lg:text-sm">
                  Action
                </p>
                <p className="cursor-pointer text-white text-xs lg:text-sm">
                  Thriller
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default MovieCardHover
