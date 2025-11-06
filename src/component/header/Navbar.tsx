import Header from "./Header";
// import type { IconType } from "react-icons";
import { HiHome } from "react-icons/hi2";
import CloneFlix from '../../assets/image/Logonetflix.png'
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import Clove from '../../assets/image/clove.jpg'
import { GoTriangleDown } from "react-icons/go";
import { VscTriangleUp } from "react-icons/vsc";
import { GoTriangleUp } from "react-icons/go";
import { useState } from "react";




function Navbar() {
    const [showCard, setShowcard] = useState(false);
    
    const menu = [{
        name: 'หน้าหลัก',
        icon: HiHome
    },
    {
        name: 'รายการ',
        icon: HiHome
    }, {
        name: 'ภาพยนต์',
        icon: HiHome
    }, {
        name: 'เกม',
        icon: HiHome
    }, {
        name: 'มาใหม่กำลังฮิต',
        icon: HiHome
    },
    {
        name: 'รายการของฉัน',
        icon: HiHome
    },
    {
        name: 'เลือกตามภาษา',
        icon: HiHome
    }
    ]
    return (
        <div className="sticky top-0 flex gap-2   justify-between p-4 navbarColor z-10" >
            <div className="flex gap-8 items-center pl-10  ">
                <img src={CloneFlix} className="w-[70px] md:w-[100px] object-cover cursor-pointer" />
                <div className="hidden md:flex gap-5  items-center">
                    {menu.map((item) => (
                        <Header name={item.name} icon={item.icon} />
                    ))}
                </div>
                <div className="flex text-[10px] md:hidden cursor-pointer justify-center  text-white" onMouseEnter={() => setShowcard(true)}
                    onMouseLeave={() => setShowcard(false)}>
                    <p className="font-bold">เรียกดู</p>
                    <GoTriangleDown className="text-[18px] font-bold" />
                    {showCard && <div className="absolute pt-15 opacity-80 ">
                      
                     <p className="flex justify-center "><VscTriangleUp className=" text-white text-[20px] "/></p>
                        <div className="bg-slate-950 w-[35vw] h-[46vw] border-t-3 border-1 border-amber-50  ">
                             
                            {menu.map((item) => (
                                <p className="text-center p-3 text-[13px] hover:bg-slate-900">{item.name}</p>
                            ))}
                        </div>
                    </div>}


                </div>

            </div>
            <div className="flex text-white pr-8 ">
                <div className="gap-5 flex">
                    <IoIosSearch className="text-[35px] " />
                    <h3 className=" hidden lg:flex text-[15px]  p-2">มุมเด็ก</h3>
                    <IoMdNotificationsOutline className="text-[35px] " />
                    <img src={Clove} className="w-[35px] h-[35px] rounded-md" />
                </div>
                <div className="p-2 cursor-pointer group ">
                   <GoTriangleDown className="text-[18px] scale-y-100   group-hover:scale-y-0" />
                    <GoTriangleUp className="text-[18px] scale-y-0   group-hover:scale-y-100"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
