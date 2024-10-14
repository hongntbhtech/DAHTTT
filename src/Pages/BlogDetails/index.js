import LayoutHeader from "../../layout/LayoutHeader";
import img_blogdetails from "../../assets/BlogDetails/img_blogdetails.png"
import Footer from "../../components/Footer";
function BlogDetail() {
    return (
        <>
            <div>
                <LayoutHeader></LayoutHeader>
            </div>

            <div className="max-w-[1288px] pl-[24px] pr-[24px] mx-auto font-poppins">
                <div className="pt-[90px]">
                    <p className="font-bold text-[50px] leading-[75px] text-center">Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày</p>
                </div>

                <div className="pt-[25px]">
                    <p className="font-bold text-[30px] leading-[45px]">Tác giả: Lý Cao Nguyên</p>
                </div>

                <div className="pt-[20px]">
                    <p className="font-normal text-[20px] leading-[30px]">Xin chào mọi người mình là Lý Cao Nguyên, mình đã làm một dự án website front-end với hơn 100 bài học và 200 bài viết.</p>
                </div>

                <div className="pt-[10px]">
                    <img src={img_blogdetails} alt="abc"></img>
                </div>

                <div className="pt-[10px]">
                    <p className="font-normal text-[16px] leading-[30px]">Bài viết này sẽ bao gồm các phần như sau:</p>
                    <p className="font-normal text-[16px] leading-[30px]">1 - Tại sao mình lại làm một dự án trong một thời gian ngắn như vậy?</p>
                    <p className="font-normal text-[16px] leading-[30px]">2 - Lúc mất dữ liệu mình ra sao?</p>
                    <p className="font-normal text-[16px] leading-[30px]">3 - Cách mình đã làm để hoàn thành dự án trong 15 ngày</p>
                </div>

                <div className="pt-[10px]">
                    <p className="font-bold">1. Tại sao mình lại làm một dự án trong một thời gian ngắn như vậy?</p>
                    <p>Lí do mình làm một dự án trong thời gian ngắn như vậy là gì một số lỗi trong quá trình xây dựng mà gần đến ngày dự thi. Laptop của mình vào một ngày đẹp trời thì bị hỏng (mình không dùng github) nên tất cả code cũng bay theo hư vô khi laptop được sửa và trở lại bình thường mặc dù đã ra sức khôi phục dữ liệu.</p>
                </div>

                <div className="pt-[10px]">
                    <p className="font-bold">2. Lúc mất dữ liệu mình ra sao? </p>
                    <p>Lúc mất dữ liệu là mình đã sắp hoàn thành dự án rồi (chỉ còn phần tin tức nữa là xong). Nên là mình bị suy sụp và buồn trong một khoảng thời gian 2 ngày. Mình định bỏ cuộc nhưng lý trí không cho và bắt buộc mình phải ngồi lại chiếc bàn học cùng với chiếc laptop và bàn phím bắt đầu code một trang web mới giống với cái cũ.</p>
                </div>

                <div className="pt-[10px]">
                    <p className="font-bold">3. Cách mình đã làm để hoàn thành dự án chỉ trong 15 ngày.</p>
                    <p className="italic font-bold">3.1, Lên kế hoạch, thiết kế logo, thiết kế layout, chuẩn bị nội dung cho dự án (5 ngày)</p>
                    <div>
                        <p>Mình đã lên kế hoạch cho dự án phác thảo một khung sườn website:</p>
                        <ul className="list-disc pl-[20px]">
                            <li>Thiết kế logo cho trang web bằng Canva.</li>
                            <li>Vẽ ra layout cho từng trang để dựa vào đó và code.</li>
                            <li>Chuẩn bị nội dung là lâu nhất, mình đã chuẩn bị toàn bộ nội dung Ngữ văn 9 để vào file Word.</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-[5px]">
                    <p className="italic font-bold">3.2, Code giao diện cho từng trang (2 ngày)</p>
                    <p>Từ những gì đã vạch ra mình bắt đầu code giao diện cho từng trang trên thanh menu như Trang chủ, Giới thiệu, Học văn, Soạn văn, Tài liệu,...</p>
                </div>

                <div className="pt-[5px]">
                    <p className="italic font-bold">3.3 Đưa nội dung lên website (5 ngày)</p>
                    <p>Từ những nội dung có sẵn trong file word mình bắt đầu copy và dán vào giao diện đã tạo trước đó. Vì số lượng khá nhiều nên quá trình này phải mất đến 7 ngày để đưa toàn bộ nội dung lên website.</p>
                </div>

                <div className="pt-[5px]">
                    <p className="italic font-bold">3.4 Phát sinh thêm một số tính năng do quá trình thực hiện nảy sinh ra ý tưởng mới (1 ngày)</p>
                    <p>Trong quá trình mình code thì mình đã nảy sinh ra những ý tưởng và bắt đầu thực hiện luôn, quá trình này mình làm rất nhanh chỉ 1 ngày là hoàn thành (mình làm từ 6:00 sáng cho đến 0:00 tối).</p>
                </div>

                <div className="pt-[5px]">
                    <p className="italic font-bold">3.5 Đưa website lên hosting (1 ngày)</p>
                    <p>Sau khi đã hoàn thành hết mọi công việc thì mình bắt đầu đẩy hết code lên hosting. Vì hosting miễn phí nên không gian lưu trữ không đủ mình phải tạo nhiều kho lưu trữ khác và chia ra để lưu trữ nên quá trình upload code lên hosting mình làm tận 1 ngày.</p>
                </div>

                <div className="pt-[5px]">
                    <p className="italic font-bold">3.6 Sửa lỗi xảy ra sau khi upload code và chạy thử nghiệm (1 ngày)</p>
                    <p>Mọi chuyện không bao giờ đơn giản như chúng ta nghĩ, khi upload lên hosting chạy thử nghiệm thì trang web bị lỗi ở một số chỗ nên mình phải sửa lại. Sau khi hoàn thành mình đăng công khai và share web trên trang cá nhân để mọi người đều thấy và truy cập web.</p>
                    <p>Cảm ơn mọi người đã đọc!</p>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default BlogDetail;