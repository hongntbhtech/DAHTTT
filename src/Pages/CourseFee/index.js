import LayoutHeader from "../../layout/LayoutHeader";
import bg_home from '../../assets/Home/bg_home.png'

import img_map from '../../assets/CourseFee/img_map.png'
import Footer from "../../components/Footer";
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
function CourseFee() {

    const params = useParams();

    const [detailscourse, setDetailsCourse] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const coursesResponse = await fetch(`http://localhost:3000/courses/${params.id}`);
            const coursesData = await coursesResponse.json();
            console.log(coursesData);
            setDetailsCourse(coursesData);

        };

        fetchAPI();
    }, []);

    // console.log(detailscourse);
    return (
        <>
            <div className="bg-no-repeat" style={{ backgroundImage: `url(${bg_home})` }}>
                <LayoutHeader>
                    <div className="max-w-[1188px] mx-auto pl-[24px] pr-[24px] pt-[68px] pb-[120px] font-poppins">
                        <div className="text-center max-w-[983px] mx-auto">
                            <h1 className="font-semibold text-[50px] leading-[75px]">{detailscourse.title}</h1>
                            <p className="font-normal text-[16px] leading-[28px] pt-[35px]">
                            {detailscourse.description}
                            </p>

                            <Link to='/checkout' className="max-w-[525px] justify-center mx-auto flex pt-[50px]">
                                <div className="w-[203px] h-[52px] bg-[#191A23] rounded-[14px] font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-center text-[#fff] pt-[15px]">Mua khóa học</div>
                            </Link>
                        </div>
                    </div>
                </LayoutHeader>
            </div>

            {/* <div className="max-w-[1398px] pl-[24px] pr-[24px] mx-auto mt-[280px] border border-black font-poppins">
                <div className="max-w-[1253px] mx-auto">
                    <h1 className="font-semibold text-[50px] leading-[75px] ">Kiến thức đầy đủ và chi tiết nhất</h1>
                    <p className="italic font-normal text-[25px] leading-[40px] text-[#c92d2d] pt-[20px]">Với hơn 300 bài học, bài tập và thử thách, đây sẽ là khóa học đầy đủ và chi tiết nhất mà bạn có thể tìm thấy trên internet.</p>
                </div>

                <div className="max-w-[1250px] min-h-[484px] mx-auto flex justify-between p-6 bg-white shadow-lg rounded-lg">
                    <div className="flex min-w-[250px] items-center">
                        <div className="w-[13px] h-[13px] rounded-full bg-[#000] mr-3"></div>
                        <h2 className="font-semibold text-[20px] leading-[28px]">{detailscourse.title}</h2>
                    </div>
                    <div className="flex flex-col justify-between ml-6">
                        <p className="font-normal text-[16px] leading-[24px] mb-2">
                            <strong>Mô tả:</strong> {detailscourse.description}
                        </p>
                        <p className="font-normal text-[16px] leading-[24px] mb-2">
                            <strong>Giá:</strong> {detailscourse.price} VND
                        </p>
                        <p className="font-normal text-[16px] leading-[24px] mb-2">
                            <strong>Video Demo:</strong> <a href={detailscourse.demo_video_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Xem Video</a>
                        </p>
                       
                    </div>
                </div>


            </div> */}

            <div className="max-w-[1398px] mx-auto pl-[24px] pr-[24px] font-poppins">
                <div className="max-w-[862px] mx-auto text-center pt-[135px]">
                    <h1 className="font-semibold text-[50px] leading-[76px]">Bạn có thể học mọi lúc, mọi nơi, trên mọi thiết bị</h1>
                </div>
                <div className="pt-[63px]">
                    <img src={img_map} alt="abc"></img>
                </div>
                <div className="max-w-[983px] mx-auto text-center pt-[68px]">
                    <p className="font-normal text-[25px] leading-[28px]">Mạng lưới phân phối nội dung tại 33 quốc gia, bạn có thể xem các bài học video tốc độ cao ngay cả khi đang ở nước ngoài.</p>
                </div>
            </div>

            <div className="mt-[10px]">
                <Footer />
            </div>
        </>
    )
}

export default CourseFee;