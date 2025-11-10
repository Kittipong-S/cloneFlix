const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
import { FaPlay } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
function MovieCardHover({ movie }) {
  return (
    <>
      <div className="group bg-slate-900 col-span relative h-[10vw]  rounded-sm " >
        <img src={IMAGE_BASE_URL + movie.backdrop_path} className="cursor-pointer object-cover transition duration-200 shadow-xl rounded-lg group-hover:opacity-90
      sm:group-hover:opacity-0 delay-300 w-full h-[9vw]"/>
        <div className="absolute left-2 bottom-10 w-[12vw] ">
          <p className="text-white text-[18px] font-semibold">{movie.original_title}</p>
        </div>
        <h2 className='w-[110px] md:w-[285px] text-white mt-2'></h2>
        <div className=" opacity-0 absolute top-0 z-10 transition duration-200 ease-in-out  invisible sm:visible delay-300 w-[400px]  rounded-xl
      group-hover: scale-110 group-hover:-translate-y-[6vw] group-hover:opacity-100">

          <img className="cursor-pointer object-cover trabsition duration-200 shadow-xl  rounded-t-md w-full h-[12vw]  "
            src={IMAGE_BASE_URL + movie.backdrop_path} />
          <div className="absolute left-2 bottom-5 w-[15vw] ">
            <p className="text-white text-[20px] font-semibold">{movie.original_title}</p>
          </div>
          <div className=" z-10 bg-slate-950 p-2 lg:p-4 absolute w-full transition  shadow-md rounded-b-md  h-[8vw] ">
            <div className="flex flex-row justify-between items-center gap-3 z-10">
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
            transition hover:text-gray-50 hover:border-gray-50 hover:bg-gray-800 z-10" >
                  <AiOutlineLike />
                </div>

              </div>
              <div className="justify-end text-white">

              </div>
              <div className="cursor-pointer text-[40px] text-gray-400 w-12 h-8 lg:w-12 lg:h-12 border border-gray-400  rounded-full flex justify-center items-center
            transition hover:text-gray-50 hover:border-gray-50 z-10" >
                <MdKeyboardArrowDown />
              </div>


            </div>

            <div className="flex mt-2 gap-2">
              <p className="text-white border border-amber-50 w-[2vw] text-center">16+</p> 
              <p className="text-white text-[17px] font-semibold">1 hour 15 min </p>
              <p className="text-white text-[10px] mt-1 border border-amber-50 h-4 w-6 text-center ">HD </p>
            </div>
<div className="flex mt-2 gap-3 font-semibold ">
              <p className="text-white text-[15px] text-center">Dark</p> 
              <p className="text-zinc-700 mt-2 text-[10px]"> <GoDotFill /></p>
              <p className="text-white text-[15px] font-semibold">Action</p>
              <p className="text-zinc-700 mt-2 text-[10px]"> <GoDotFill /></p>
              <p className="text-white text-[15px] text-center ">Horror</p>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default MovieCardHover
