import LayoutHeader from "../../layout/LayoutHeader";
import vector_direct from '../../assets/HomeClient/vecter_direct.png'
import img_htmlcss from '../../assets/HomeClient/img_htmcss.png'
import img_reactjs from '../../assets/HomeClient/img_reactjs.png'
import img_nodejs from '../../assets/HomeClient/img_node.png'
import Footer from "../../components/Footer";

function MyCourse(){
    return(
        <>
        <div>
                <LayoutHeader />
            </div>


            <div className="max-w-[1288px] mx-auto pl-[24px] pr-[24px] pt-[180px] font-poppins">
                <div className="">
                    <h1 className="font-semibold text-[50px] leading-[62.5px] text-center">Khóa học của tôi</h1>
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

                                <div className="max-w-[126px] flex justify-between pt-[18px]">
                                    <div className="w-[41px] h-[41px] rounded-full bg-[#000] pt-[10px]">
                                        <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                    </div>
                                    <div>
                                        <p className="font-normal text-[20px] leading-[28px] pt-[8px]">
                                            Chi tiết
                                        </p>
                                    </div>
                                </div>

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

                                    <div className="max-w-[126px] flex justify-between pt-[18px]">
                                        <div className="w-[41px] h-[41px] rounded-full bg-[#000] pt-[10px]">
                                            <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                        </div>
                                        <div>
                                            <p className="font-normal text-[20px] leading-[28px] pt-[8px]">
                                                Chi tiết
                                            </p>
                                        </div>
                                    </div>
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

                                    <div className="max-w-[126px] flex justify-between pt-[18px]">
                                        <div className="w-[41px] h-[41px] rounded-full bg-[#fff] pt-[10px]">
                                            <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                        </div>
                                        <div>
                                            <p className="font-normal text-[20px] leading-[28px] text-[#fff] pt-[8px]">
                                                Chi tiết
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={img_nodejs} alt="abc"></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MyCourse;