// import Header from "../../components/Header";
import LayoutHeader from "../../layout/LayoutHeader";
import img_home from '../../assets/Home/img_home.png'
import bg_home from '../../assets/Home/bg_home.png'
import vector_direct from '../../assets/HomeClient/vecter_direct.png'
import img_htmlcss from '../../assets/HomeClient/img_htmcss.png'
import img_reactjs from '../../assets/HomeClient/img_reactjs.png'
import img_nodejs from '../../assets/HomeClient/img_node.png'
import img_javascript from '../../assets/HomeClient/img_javascript.png'
import img_c from '../../assets/HomeClient/img_c.png'
import img_python from '../../assets/HomeClient/img_python.png'
import img_php from '../../assets/HomeClient/img_php.png'
import img_kotlin from '../../assets/HomeClient/img_kotlin.png'

import img_ltl from '../../assets/HomeClient/img_ltl.png'
import img_ntha from '../../assets/HomeClient/img_ntha.png'
import img_hbd from '../../assets/HomeClient/img_hbd.png'
import img_nthong from '../../assets/HomeClient/img_nthong.png'
import img_nqh from '../../assets/HomeClient/img_nqh.png'

import img_twitter from '../../assets/HomeClient/img_twitter.png'
import img_face from '../../assets/HomeClient/img_face.png'
import img_ins from '../../assets/HomeClient/img_insta.png'
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom'


function HomeClient() {
    return (
        <>
            <div className="bg-no-repeat" style={{ backgroundImage: `url(${bg_home})` }}>
                <LayoutHeader>
                    <div className="max-w-[1345px] mx-auto pl-[78px] pr-[24px]  flex justify-between pt-[66px] font-poppins">
                        <div className="max-w-[614.46px]">
                            <h1 className="font-semibold text-[50px] leading-[75px] max-w-[540px]">Học lập trình cùng CODE TECHNOLOGY</h1>
                            <p className="font-normal text-[16px] leading-[28px] pt-[36px] max-w-[600px] text-justify">Với sự đa dạng khóa học và đội ngũ chuyên gia hàng đầu giảng dạy, mở ra con đường thành công ngay trong tầm tay bạn.</p>

                           
                        </div>

                        <div className="pr-[5px]">
                            <img src={img_home} alt=""></img>
                        </div>
                    </div>
                </LayoutHeader>
            </div>

            <div className="max-w-[1288px] mx-auto pl-[24px] pr-[24px] pt-[180px] font-poppins">
                <div className="">
                    <h1 className="font-semibold text-[50px] leading-[62.5px] text-center">Khóa học giảm giá</h1>
                </div>

                <div className="max-w-[1240px] mx-auto justify-between flex flex-wrap gap-[40px] pt-[60px]">
                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#f3f3f3]">
                        <div className="min-w-[500px] flex mx-auto justify-between pt-[48px]">
                            <div className="max-w-[270px] text-center">

                                <div>
                                    <h5 className="font-semibold text-[19px] leading-[23.75px]">Khóa học HTML, CSS cơ bản</h5>
                                    <div className="flex justify-between pt-[20px] max-w-[217px] mx-auto">
                                        <p className="font-semibold text-[18px] leading-[22.5px] line-through">2.500.000đ</p>
                                        <p className="font-semibold text-[18px] leading-[22.5px] text-red-500">1.500.000đ</p>
                                    </div>
                                    <h5 className="font-semibold text-[19px] leading-[23.75px] pt-[20px]">  Số lượng bài học: 23 video</h5>

                                </div>

                                <Link to='/coursefee' className="max-w-[126px] flex justify-between pt-[18px]">
                                    {/* <Link> */}
                                    <div className="w-[41px] h-[41px] rounded-full bg-[#000] pt-[10px]">
                                        <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                    </div>
                                    <div>
                                        <p className="font-normal text-[20px] leading-[28px] pt-[8px]">
                                            Chi tiết
                                        </p>
                                    </div>
                                    {/* </Link> */}
                                </Link>

                            </div>

                            <div>
                                <img src={img_htmlcss} alt="abc"></img>
                            </div>
                        </div>



                    </div>

                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#71bc9f]">
                        <div className="min-w-[500px] flex mx-auto justify-between pt-[48px]">
                            <div className="max-w-[270px] text-center">
                                <div>
                                    <div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px]">Khóa học ReactJS nâng cao</h5>
                                        <div className="flex justify-between pt-[20px] max-w-[217px] mx-auto">
                                            <p className="font-semibold text-[18px] leading-[22.5px] line-through">3.000.000đ</p>
                                            <p className="font-semibold text-[18px] leading-[22.5px] text-red-500">2.200.000đ</p>
                                        </div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px] pt-[20px]">  Số lượng bài học: 23 video</h5>

                                    </div>

                                    <Link to='/coursefee' className="max-w-[126px] flex justify-between pt-[18px]">
                                        <div className="w-[41px] h-[41px] rounded-full bg-[#000] pt-[10px]">
                                            <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                        </div>
                                        <div>
                                            <p className="font-normal text-[20px] leading-[28px] pt-[8px]">
                                                Chi tiết
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <img src={img_reactjs} alt="abc"></img>
                            </div>
                        </div>



                    </div>

                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#191a23]">
                        <div className="min-w-[500px] flex mx-auto justify-between pt-[48px]">
                            <div className="max-w-[270px] text-center">
                                <div>
                                    <div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px] text-[#fff]">Khóa học NodeJS nâng cao</h5>
                                        <div className="flex justify-between pt-[20px] max-w-[217px] mx-auto">
                                            <p className="font-semibold text-[18px] leading-[22.5px] line-through text-[#fff]">4.000.000đ</p>
                                            <p className="font-semibold text-[18px] leading-[22.5px] text-red-500">3.200.000đ</p>
                                        </div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px] pt-[20px] text-[#fff]">  Số lượng bài học: 23 video</h5>

                                    </div>

                                    <Link to='/coursefee' className="max-w-[126px] flex justify-between pt-[18px]">
                                        <div className="w-[41px] h-[41px] rounded-full bg-[#fff] pt-[10px]">
                                            <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                        </div>
                                        <div>
                                            <p className="font-normal text-[20px] leading-[28px] text-[#fff] pt-[8px]">
                                                Chi tiết
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <img src={img_nodejs} alt="abc"></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="max-w-[1288px] mx-auto pl-[24px] pr-[24px] pt-[142px] font-poppins">
                <div className="">
                    <h1 className="font-semibold text-[50px] leading-[62.5px] text-center">Khóa học miễn phí</h1>
                </div>

                <div className="max-w-[1240px] mx-auto justify-between flex flex-wrap gap-[40px] pt-[60px]">
                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#71bc9f]">
                        <div className="min-w-[500px] flex mx-auto justify-between pt-[48px]">
                            <div className="max-w-[270px] text-center">

                                <div>
                                    <h5 className="font-semibold text-[19px] leading-[23.75px]">Khóa học Javascript cơ bản</h5>
                                    <div className="flex justify-center pt-[20px] max-w-[217px] mx-auto">

                                        <p className="font-semibold text-[18px] leading-[22.5px] text-red-500">Miễn phí</p>
                                    </div>
                                    <h5 className="font-semibold text-[19px] leading-[23.75px] pt-[20px]">  Số lượng bài học: 17 video</h5>

                                </div>

                                <Link to='/coursefree' className="max-w-[126px] flex justify-between pt-[18px]">
                                    <div className="w-[41px] h-[41px] rounded-full bg-[#000] pt-[10px]">
                                        <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                    </div>
                                    <div>
                                        <p className="font-normal text-[20px] leading-[28px] pt-[8px]">
                                            Chi tiết
                                        </p>
                                    </div>
                                </Link>

                            </div>

                            <div>
                                <img src={img_javascript} alt="abc"></img>
                            </div>
                        </div>



                    </div>

                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#fff]">
                        <div className="min-w-[500px] flex mx-auto justify-between pt-[48px]">
                            <div className="max-w-[270px] text-center">
                                <div>
                                    <div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px]">Khóa học C++ zero - hero</h5>
                                        <div className="flex justify-center pt-[20px] max-w-[217px] mx-auto">
                                            <p className="font-semibold text-[18px] leading-[22.5px] text-red-500">Miễn phí</p>
                                        </div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px] pt-[20px]">  Số lượng bài học: 23 video</h5>

                                    </div>

                                    <Link to='/coursefree' className="max-w-[126px] flex justify-between pt-[18px]">
                                        <div className="w-[41px] h-[41px] rounded-full bg-[#000] pt-[10px]">
                                            <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                        </div>
                                        <div>
                                            <p className="font-normal text-[20px] leading-[28px] pt-[8px]">
                                                Chi tiết
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <img src={img_c} alt="abc"></img>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#191a23]">
                        <div className="min-w-[500px] flex mx-auto justify-between pt-[48px]">
                            <div className="max-w-[270px] text-center">
                                <div>
                                    <div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px] text-[#fff]">Khóa học NodeJS nâng cao</h5>
                                        <div className="flex justify-center pt-[20px] max-w-[217px] mx-auto">
                                            <p className="font-semibold text-[18px] leading-[22.5px] text-red-500">Miễn phí</p>
                                        </div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px] pt-[20px] text-[#fff]">  Số lượng bài học: 23 video</h5>

                                    </div>

                                    <Link to='/coursefree' className="max-w-[126px] flex justify-between pt-[18px]">
                                        <div className="w-[41px] h-[41px] rounded-full bg-[#fff] pt-[10px]">
                                            <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                        </div>
                                        <div>
                                            <p className="font-normal text-[20px] leading-[28px] text-[#fff] pt-[8px]">
                                                Chi tiết
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <img src={img_python} alt="abc"></img>
                            </div>
                        </div>

                    </div>

                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#71bc9f]">
                        <div className="min-w-[500px] flex mx-auto justify-between pt-[48px]">
                            <div className="max-w-[270px] text-center">

                                <div>
                                    <h5 className="font-semibold text-[19px] leading-[23.75px]">Khóa học Python nâng cao</h5>
                                    <div className="flex justify-center pt-[20px] max-w-[217px] mx-auto">

                                        <p className="font-semibold text-[18px] leading-[22.5px] text-red-500">Miễn phí</p>
                                    </div>
                                    <h5 className="font-semibold text-[19px] leading-[23.75px] pt-[20px]">  Số lượng bài học: 17 video</h5>

                                </div>

                                <Link to='/coursefree' className="max-w-[126px] flex justify-between pt-[18px]">
                                    <div className="w-[41px] h-[41px] rounded-full bg-[#000] pt-[10px]">
                                        <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                    </div>
                                    <div>
                                        <p className="font-normal text-[20px] leading-[28px] pt-[8px]">
                                            Chi tiết
                                        </p>
                                    </div>
                                </Link>

                            </div>

                            <div>
                                <img src={img_python} alt="abc"></img>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#fff]">
                        <div className="min-w-[500px] flex mx-auto justify-between pt-[48px]">
                            <div className="max-w-[270px] text-center">
                                <div>
                                    <div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px]">Khóa học PHP cơ bản</h5>
                                        <div className="flex justify-center pt-[20px] max-w-[217px] mx-auto">
                                            <p className="font-semibold text-[18px] leading-[22.5px] text-red-500">Miễn phí</p>
                                        </div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px] pt-[20px]">  Số lượng bài học: 23 video</h5>

                                    </div>

                                    <Link to='/coursefree' className="max-w-[126px] flex justify-between pt-[18px]">
                                        <div className="w-[41px] h-[41px] rounded-full bg-[#000] pt-[10px]">
                                            <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                        </div>
                                        <div>
                                            <p className="font-normal text-[20px] leading-[28px] pt-[8px]">
                                                Chi tiết
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <img src={img_php} alt="abc"></img>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#191a23]">
                        <div className="min-w-[500px] flex mx-auto justify-between pt-[48px]">
                            <div className="max-w-[270px] text-center">
                                <div>
                                    <div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px] text-[#fff]">Khóa học Kotlin cơ bản</h5>
                                        <div className="flex justify-center pt-[20px] max-w-[217px] mx-auto">
                                            <p className="font-semibold text-[18px] leading-[22.5px] text-red-500">Miễn phí</p>
                                        </div>
                                        <h5 className="font-semibold text-[19px] leading-[23.75px] pt-[20px]  text-[#fff]">  Số lượng bài học: 23 video</h5>

                                    </div>

                                    <Link to='/coursefree' className="max-w-[126px] flex justify-between pt-[18px]">
                                        <div className="w-[41px] h-[41px] rounded-full bg-[#fff] pt-[10px]">
                                            <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                        </div>
                                        <div>
                                            <p className="font-normal text-[20px] leading-[28px] pt-[8px]  text-[#fff]">
                                                Chi tiết
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <img src={img_kotlin} alt="abc"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-[1240px] mx-auto pt-[135px] font-poppins">
                <div>
                    <h1 className="font-semibold text-[50px] leading-[62.5px] text-center">
                        Thành viên
                    </h1>
                </div>
                <div className="max-w-[1240px] justify-between mx-auto flex flex-wrap">
                    <div className="max-w-[219.97px] min-h-[348px] pt-[60px]">
                        <div>
                            <img className="m-0 m-auto" src={img_ltl} alt="abc"></img>
                        </div>

                        <div className="text-center">
                            <h1 className="font-semibold text-[18px] leading-[22.5px] pt-[33px]">Lý Thành Long</h1>
                            <p className="pt-[30px]">Lập trình chatbot AI</p>
                        </div>

                        <div className="flex justify-between mx-auto pt-[35px]">
                            <img src={img_twitter} alt="abc"></img>
                            <img src={img_face} alt="abc"></img>
                            <img className="mr-[5px]" src={img_ins} alt="abc"></img>
                        </div>
                    </div>

                    <div className="max-w-[219.97px] min-h-[348px] pt-[60px]">
                        <div>
                            <img className="m-0 m-auto" src={img_ntha} alt="abc"></img>
                        </div>

                        <div className="text-center">
                            <h1 className="font-semibold text-[18px] leading-[22.5px] pt-[33px]">Nguyễn Thị Hạ</h1>
                            <p className="pt-[30px]">Thiết kế giao diện và kiểm thử</p>
                        </div>

                        <div className=" flex justify-between mx-auto pt-[10px]">
                            <img src={img_twitter} alt="abc"></img>
                            <img src={img_face} alt="abc"></img>
                            <img src={img_ins} alt="abc"></img>
                        </div>
                    </div>

                    <div className="max-w-[219.97px] min-h-[348px] pt-[60px]">
                        <div>
                            <img className="m-0 m-auto" src={img_hbd} alt="abc"></img>
                        </div>

                        <div className="text-center">
                            <h1 className="font-semibold text-[18px] leading-[22.5px] pt-[33px]">Hồ Bá Đạt</h1>
                            <p className="pt-[30px]">Lập trình Back-end</p>
                        </div>

                        <div className="max-w-[219.97px] flex justify-between mx-auto pt-[35px]">
                            <img src={img_twitter} alt="abc"></img>
                            <img src={img_face} alt="abc"></img>
                            <img src={img_ins} alt="abc"></img>
                        </div>
                    </div>

                    <div className="max-w-[219.97px] min-h-[348px] pt-[60px]">
                        <div>
                            <img className="m-0 m-auto" src={img_nthong} alt="abc"></img>
                        </div>

                        <div className="text-center">
                            <h1 className="font-semibold text-[18px] leading-[22.5px] pt-[33px]">Nguyễn Thị Hồng</h1>
                            <p className="pt-[30px]">Lập trình Front-end</p>
                        </div>

                        <div className="max-w-[219.97px] flex justify-between mx-auto pt-[35px]">
                            <img src={img_twitter} alt="abc"></img>
                            <img src={img_face} alt="abc"></img>
                            <img src={img_ins} alt="abc"></img>
                        </div>
                    </div>

                    <div className="max-w-[219.97px] min-h-[348px] pt-[60px]">
                        <div>
                            <img className="m-0 m-auto" src={img_nqh} alt="abc"></img>
                        </div>

                        <div className="text-center">
                            <h1 className="font-semibold text-[18px] leading-[22.5px] pt-[33px]">Nguyễn Quang Huy</h1>
                            <p className="pt-[30px]">Xây dựng báo cáo</p>
                        </div>

                        <div className="max-w-[219.97px] flex justify-between mx-auto pt-[35px]">
                            <img src={img_twitter} alt="abc"></img>
                            <img src={img_face} alt="abc"></img>
                            <img src={img_ins} alt="abc"></img>
                        </div>
                    </div>
                </div>

            </div>

            <Footer/>

        </>
    )
}

export default HomeClient;