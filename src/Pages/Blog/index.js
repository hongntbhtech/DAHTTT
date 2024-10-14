import LayoutHeader from "../../layout/LayoutHeader";
import vector_direct from '../../assets/HomeClient/vecter_direct.png'
import Footer from "../../components/Footer"
import { Link } from 'react-router-dom'
function Blog() {
    return (
        <>
            <div>
                <LayoutHeader></LayoutHeader>
            </div>

            <div className="max-[1100px] pl-[24px] pr-[24px] mx-auto pt-[50px] font-poppins">
                <h1 className="font-bold text-[50px] leading-[75px] pl-[50px]">
                    Blog nổi bật
                </h1>

                <div className="max-w-[1340px] mx-auto min-h-[277px] bg-gray-200 border border-gray-800 shadow-md rounded-[45px] mt-[15px] pt-[40px] pl-[50px]">
                    <p className="font-semibold text-[20px] leading-[30px] ">Tin tức và thông tin</p>
                    <p className="font-semibold text-[25px] leading-[37.5px] pt-[11px]">Mình đã làm thế nào để hoàn thành  một dự án website chỉ trong 15 ngày</p>
                    <p className="font-semibold text-[16px] leading-[16px] pt-[25px]">Xin chào mọi người mình là Lý Cao Nguyên, mình đã làm một dự án website front-end với hơn 100 bài học và 200 bài viết. Bài biết này...</p>
                    <p className="font-semibold text-[16px] leading-[16px] pt-[32px]">Tác giả: Lý Cao Nguyên</p>
                    <Link to='/blogdetail' className="max-w-[126px] flex justify-between pt-[18px]">
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

            <Footer/>
        </>
    )
}

export default Blog; 