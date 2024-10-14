import { Link } from "react-router-dom";
import logo from '../../assets/Home/logo.png'
import img_home from '../../assets/Home/img_home.png'
import bg_home from '../../assets/Home/bg_home.png'

function Home(){
    return(
        <>
        <div className="max-w-screen-2xl mx-auto">
           <div className="bg-no-repeat" style={{ backgroundImage: `url(${bg_home})` }}>
           <div className="max-w-[1188px] mx-auto pl-[24px] pr-[24px] flex justify-between pt-[24px] font-poppins">
                <div>
                    <img src={logo} alt="abc"></img>
                </div>
                <div className="pt-[20px] min-w-[256px]">
                    <ul className="max-w-[256px] flex mx-auto gap-[28px]">
                        <li className="font-semibold text-[16px] leading-[24px] tracking-[1.6px] max-w-[85px] pt-[15px]">
                            <Link to='/signup'>Đăng ký</Link>
                        </li>
                        <li className=" pt-[15px] min-w-[149px] h-[52px] rounded-[14px] bg-[#71BC9F] text-center font-semibold text-[16px] leading-[24px] tracking-[1.6px] max-w-[85px]">
                            <Link to='signin'>Đăng nhập</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1388px] mx-auto pl-[24px] pr-[24px] flex justify-between pt-[66px] font-poppins">
                <div className="max-w-[614.46px]">
                    <h1 className="font-semibold text-[50px] leading-[75px] max-w-[540px]">Học lập trình cùng CODE TECHNOLOGY</h1>
                    <p className="font-normal text-[16px] leading-[28px] tracking-[1.6px] pt-[36px]">Với sự đa dạng khóa học và đội ngũ chuyên gia hàng đầu giảng dạy, mở ra con đường thành công ngay trong tầm tay bạn.</p>

                    {/* <div className="pt-[48px]">
                        <button className="w-[139px] h-[52px] rounded-[14px] font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-center text-[#ffffff] bg-black">Chi tiết</button>
                    </div> */}
                </div>

                <div className="pr-[5px]">
                    <img src={img_home} alt=""></img>
                </div>
            </div>  
           </div>
        </div>
        </>
    )
}
export default Home;