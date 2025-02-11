import LayoutHeader from "../../layout/LayoutHeader";
import img_vector from "../../assets/Course/Vector.png"


import img_python from '../../assets/HomeClient/img_python.png'
import img_php from '../../assets/HomeClient/img_php.png'
import img_kotlin from '../../assets/HomeClient/img_kotlin.png'
import vector_direct from '../../assets/HomeClient/vecter_direct.png'


import Footer from "../../components/Footer"
function Course(){
    return(
        <>
        <div>
            <LayoutHeader></LayoutHeader>
        </div>

        <div className="max-[1188px] pl-[24px] pr-[24px] mx-auto pt-[50px] font-poppins">
            <h1 className="font-bold text-[50px] leading-[75px] text-center">
               Khóa học
            </h1>

            <div className="pt-[33px] max-w-[1140px] mx-auto">
                <button className="w-[154px] h-[60px] rounded-[14px] bg-[#71BC9F] text-semibold text-[25px] leading-[37.5px]">Bộ lọc</button>
            </div>

            <div className="flex justify-between max-w-[1180px] mx-auto">
                <div>
                    <div className="w-[481px] h-[1px] bg-[#000] mt-[20px]"></div>
                   <div className="pt-[22px]">
                   <div className="max-w-[423px] flex justify-between">
                    <h4 className="font-bold text-[25px]">Giá</h4>
                    <div>
                        <img className="pt-[10px]" src={img_vector} alt="abc"></img>
                    </div>
                    </div>

                    <div className="max-w-[153px] flex justify-between pt-[18px]">
                        <div className="w-[25px] h-[25px] border border-black"></div>
                        <div className="font-normal text-[20px]">Miễn phí</div>
                    </div>

                    <div className="max-w-[177px] flex justify-between pt-[18px]">
                        <div className="w-[25px] h-[25px] border border-black"></div>
                        <div className="font-normal text-[20px]">Có trả phí</div>
                    </div>
                   </div>

                   <div className="w-[481px] h-[1px] bg-[#000] mt-[20px]"></div>
                   <div className="pt-[22px]">
                   <div className="max-w-[423px] flex justify-between">
                    <h4 className="font-bold text-[25px]">Lĩnh vực</h4>
                    <div>
                        <img className="pt-[10px]" src={img_vector} alt="abc"></img>
                    </div>
                    </div>

                    <div className="max-w-[177px] flex justify-between pt-[18px]">
                        <div className="w-[25px] h-[25px] border border-black"></div>
                        <div className="font-normal text-[20px]">Back-end</div>
                    </div>

                    <div className="max-w-[179px] flex justify-between pt-[18px]">
                        <div className="w-[25px] h-[25px] border border-black"></div>
                        <div className="font-normal text-[20px]">Font-end</div>
                    </div>
                   </div>

                   <div className="w-[481px] h-[1px] bg-[#000] mt-[20px]"></div>
                   <div className="pt-[22px]">
                   <div className="max-w-[423px] flex justify-between">
                    <h4 className="font-bold text-[25px]">Ngôn ngữ</h4>
                    <div>
                        <img className="pt-[10px]" src={img_vector} alt="abc"></img>
                    </div>
                    </div>

                    <div className="max-w-[153px] flex justify-between pt-[18px]">
                        <div className="w-[25px] h-[25px] border border-black"></div>
                        <div className="font-normal text-[20px]">Java</div>
                    </div>

                    <div className="max-w-[177px] flex justify-between pt-[18px]">
                        <div className="w-[25px] h-[25px] border border-black"></div>
                        <div className="font-normal text-[20px]">Python</div>
                    </div>
                   </div>


                </div>


                <div>
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
                                <img src={img_python} alt="abc"></img>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#fff] mt-[30px]">
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
                                <img src={img_php} alt="abc"></img>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-[600px] min-h-[271px] flex border-[1px] border-[#000] rounded-[45px] bg-[#191a23] mt-[30px]">
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

                                    <div className="max-w-[126px] flex justify-between pt-[18px]">
                                        <div className="w-[41px] h-[41px] rounded-full bg-[#fff] pt-[10px]">
                                            <img className="m-0 m-auto" src={vector_direct} alt="abc"></img>
                                        </div>
                                        <div>
                                            <p className="font-normal text-[20px] leading-[28px] pt-[8px]  text-[#fff]">
                                                Chi tiết
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src={img_kotlin} alt="abc"></img>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default Course;