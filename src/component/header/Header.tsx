import type { IconType } from "react-icons"

interface Menu {
    name: string,
    icon: IconType
}
function Header(menu:Menu) {
  return (
  <div className='text-white  text-[10px] xl:text-[15px] lg:text-[10px] md:text-[6px] flex items-center gap-5 
    font-semibold cursor-pointer hover:text-gray-300 hover:delay-100 hover: transition 
    underline-offset-8 mb-2  '>
     {/* <menu.icon/> */}
     <h3 className=''>{menu.name}</h3>
    </div>
  )
  
}

export default Header
