import { Link } from 'react-router-dom';
import logo from '../../assets/Footer/logo.png'
import img_twitter from '../../assets/HomeClient/img_twitter.png'
import img_face from '../../assets/HomeClient/img_face.png'
import img_ins from '../../assets/HomeClient/img_insta.png'

function Footer() {
    return (
        <>
            <div className="bg-gradient-to-b from-white to-[#71BC9F]">
            <div className="max-w-[1168px] mx-auto pl-[24px] pr-[24px] flex justify-between pt-[155px]">
                <div className='max-w-[404px]'>
                    <div>
                        <img src={logo} alt='abc'></img>
                    </div>

                    <p className='font-normal text-[16px] leading-[24px] pt-[35px]'>
                        Email:code.technology@gmail.com
                    </p>
                    <p className='font-normal text-[16px] leading-[24px] pt-[20px]'>Số điện thoại: 0820212727</p>
                    <p className='font-normal text-[16px] leading-[24px] max-w-[358px] pt-[20px]'>Địa chỉ: Khu tái định cư Triều Khúc, Tân Triều, Thanh Trì, Hà Nội</p>
                </div>

                <div className='max-w-[131px] pt-[5px]'>
                    <h3 className='font-semibold text-[18px] leading-[18px] tracking-[1.6px]'>Các trang:</h3>
                    <ul className=''>
                        <li className='font-normal text-[16px] leading-[24px] tracking-[1.6px]'>
                            <Link>Khóa học</Link>
                        </li>
                        <li className='pt-[20px]'>
                            <Link>Blog</Link>
                        </li>
                        <li className='pt-[20px]'>
                            <Link>Khuyến mãi</Link>
                        </li>
                        <li className='pt-[20px]'>
                            <Link>Thống kê</Link>
                        </li>
                    </ul>
                </div>

                <div className='max-w-[186px] pt-[5px]'>
                    <h3 className='font-semibold text-[18px] leading-[18px] tracking-[1.6px]'>
                        Các thàn viên
                    </h3>
                    <ul>
                        <li className='font-normal text-[16px] leading-[24px] tracking-[1.6px] pt-[25px]'>
                            <Link>Hồ Bá Đạt</Link>
                        </li>
                        <li className='pt-[20px]'>
                            <Link>Nguyễn Thị Hạ</Link>
                        </li>
                        <li className='pt-[20px]'>
                            <Link>Nguyễn Thị Hồng</Link>
                        </li>
                        <li className='pt-[20px]'>
                            <Link>Nguyễn Quang Huy</Link>
                        </li>
                        <li className='pt-[20px]'>
                            <Link>Lý Thành Long</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-[1120px] h-[1px] bg-[#000] mt-[45px] mx-auto'>

            </div>

            <div className='max-w-[1120px] mx-auto justify-between flex'>
                <div className="flex justify-between ">
                    <img src={img_twitter} alt="abc"></img>
                    <img src={img_face} alt="abc"></img>
                    <img src={img_ins} alt="abc"></img>
                </div>

                <div className='pt-[25px]'>
                    <p className='font-normal text-[18px]'>© 2024 Positivus. All Rights Reserved.</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer;