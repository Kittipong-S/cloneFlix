import Header from "./Header";
// import type { IconType } from "react-icons";
import { HiHome } from "react-icons/hi2";
import CloneFlix from '../../assets/image/Logonetflix.png'
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import Clove from '../../assets/image/clove.jpg'
import { GoTriangleDown } from "react-icons/go";


function Navbar() {
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
        <div className="flex gap-5 justify-between p-4 navbarColor" >
            <div className="flex gap-8 items-center pl-10">
                <img src={CloneFlix} className="w-[70px] md:w-[100px] object-cover cursor-pointer" />
                <div className="flex gap-8 items-center">
                    {menu.map((item) => (
                        <Header name={item.name} icon={item.icon} />
                    ))}
                </div>
            </div>
            <div className="flex text-white pr-8">
                <div className="gap-5 flex">
                <IoIosSearch className="text-[35px] " />
                <h3 className="text-[15px] p-2">มุมเด็ก</h3>
                <IoMdNotificationsOutline className="text-[35px] " />
                <img src={Clove} className="w   -[35px] h-[35px] rounded-md" />
            </div>
            <div className="p-2">
            <GoTriangleDown className="text-[18px] "/>
            </div>
            </div>
        </div>
    )
}

export default Navbar
