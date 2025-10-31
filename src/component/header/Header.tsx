import type { IconType } from "react-icons"

interface Menu {
    name: string,
    icon: IconType
}
function Header(menu:Menu) {
  return (
  <div className='text-white flex items-center gap-5 
    text-[15px] font-semibold cursor-pointer hover:text-gray-300 hover:delay-100 hover: transition 
    underline-offset-8 mb-2 '>
     {/* <menu.icon/> */}
     <h3 className=''>{menu.name}</h3>
    </div>
  )
  
}

export default Header
