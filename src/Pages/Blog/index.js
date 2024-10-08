import LayoutHeader from "../../layout/LayoutHeader";
function Blog(){
    return(
        <>
        <div>
            <LayoutHeader></LayoutHeader>
        </div>

        <div className="max-[1188px] pl-[24px] pr-[24px] mx-auto">
            <h1 className="font-bold text-[50px] leading-[75px]">
                Blog nổi bật
            </h1>

            <div>
                <p className="font-semibold text-[20px] leading-[30px] ">Tin tức và thông tin</p>
                <p>Mình đã làm thế nào để hoàn thành  một dự án website chỉ trong 15 ngày</p>
            </div>
        </div>
        </>
    )
}

export default Blog;