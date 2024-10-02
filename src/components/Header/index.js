import logo from '../../assets/HomeClient/logo.png'
import vector from '../../assets/HomeClient/Vector.png'
import { Link } from 'react-router-dom';
import search from '../../assets/HomeClient/Search.png'
import img_tk from '../../assets/HomeClient/img_tk.png'

function Header(){
    return(
        <>
        <div className="max-w-[1188px] mx-auto pl-[24px] pr-[24px] flex justify-between pt-[25px]">
            <div className='flex min-w-[627.84px] justify-between'>
            <div>
                    <img src={logo} alt='abc'></img>
            </div>

            <div className='pt-[35px]'>
                <ul className='flex min-w-[500px] justify-between'>
                    <li className='flex font-bold text-[16px] leading-[24px] tracking-[1.6px] min-w-[114px]'>
                        <Link>Khóa học</Link>
                       <div className='pt-[7px]'>
                       <img className='w-[15.62px] h-[9.28px]' src={vector} alt='abc'></img>
                       </div>
                    </li>
                    <li className='font-bold text-[16px] leading-[24px] tracking-[1.6px]'>
                        <Link>Blog</Link>
                    </li>
                    <li className='font-bold text-[16px] leading-[24px] tracking-[1.6px]'>
                        <Link>Khuyến mãi</Link>
                    </li>
                    <li className='font-bold text-[16px] leading-[24px] tracking-[1.6px]'>
                        <Link>Thống kê</Link>
                    </li>
                </ul>
            </div>
            </div>

            <div className='min-w-[130px] flex justify-between pt-[20px]'>
                <div>
                    <div className='w-[52px] h-[52px] bg-[#000] rounded-[14px]'>
                        <img className='m-0 m-auto pt-[10px]' src={search} alt='abc'></img>
                    </div>
                </div>

                <div className="">
                   <img src={img_tk} alt='abc'></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;