import LayoutHeader from "../../layout/LayoutHeader";
import img_nodejs from '../../assets/HomeClient/img_node.png'
function Checkout() {
    return (
        <>
            <div>
                <LayoutHeader></LayoutHeader>
            </div>

            <div className="flex max-w-[1188px] pl-[24px] pr-[24px] mx-auto pt-[100px] font-poppins">
                <div className="container mx-auto ">
                    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
                        <div className="md:flex">
                            <div className="w-full px-6 py-8 md:p-8">
                                <h2 className="text-2xl font-bold text-gray-800">Thông tin mua hàng</h2>
                                <p className="mt-4 text-gray-600">Hãy điền vào form bên dưới để hoàn thành đơn.</p>
                                <form className="mt-6">
                                    <div className="mb-6">
                                        <label className="block text-gray-800 font-bold mb-2" for="name">
                                            Họ và tên
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-800 font-bold mb-2" for="cvv">
                                            Ngày sinh
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="date" placeholder="***" />
                                    </div>
                                    <div classNameName="mb-6">
                                        <label classNameName="block text-gray-800 font-bold mb-2" for="email">
                                            Email
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-800 font-bold mb-2" for="card_number">
                                            Số điện thoại
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number" type="text" placeholder="**** **** **** 1234" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-800 font-bold mb-2" for="expiration_date">
                                            Địa chỉ
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiration_date" type="text" placeholder="Ba Vi" />
                                    </div>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-bold text-[30px] text-center leading-[45px]">Đơn hàng</h1>
                    <div className="flex">
                        <div>
                            <img src={img_nodejs} alt="abc"></img>
                        </div>
                        <div className="pt-[50px]">
                            <p className="font-bold text-[20px] leading-[30px]">Khóa học Node JS nâng cao</p>
                            <p className="font-normal text-[20px] pt-[10px]">Người hướng dẫn: Sơn Đặng</p>
                        </div>
                    </div>

                    <div className="w-[560px] h-[1px] bg-[#000]">

                    </div>

                    <div className="max-w-[510px] flex justify-between pt-[50px]">
                        <div>
                            <p>Tổng chi phí:</p>
                        </div>
                        <div>
                            <p>3.200.000đ</p>
                        </div>
                    </div>

                    <div className="text-right pt-[50px]">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Thanh toán
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;