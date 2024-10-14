import LayoutHeader from "../../layout/LayoutHeader";
import Footer from '../../components/Footer';
function Profile() {
    return (
        <>
            <div>
                <LayoutHeader />
            </div>

            <div className="bg-white shadow-md rounded-lg border max-w-[1188px] pl-[24px] pr-[24px] mx-auto pt-[100px] mt-[100px] font-poppins">
                <div className="px-6 py-5">
                    <h3 className="text-lg font-medium text-gray-900">
                        Thông tin tài khoảng
                    </h3>

                </div>
                <div className="border-t border-gray-200">
                    <dl className="divide-y divide-gray-200">
                        <div className="grid grid-cols-3 gap-4 px-6 py-5">
                            <dt className="text-sm font-medium text-gray-500">
                                Họ và tên
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 col-span-2">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    defaultValue="John Doe"
                                />
                            </dd>
                        </div>
                        <div className="grid grid-cols-3 gap-4 px-6 py-5">
                            <dt className="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 col-span-2">
                                <input
                                    type="email"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    defaultValue="johndoe@example.com"
                                />
                            </dd>
                        </div>
                        <div className="grid grid-cols-3 gap-4 px-6 py-5">
                            <dt className="text-sm font-medium text-gray-500">
                                Số điện thoại
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 col-span-2">
                                <input
                                    type="tel"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    defaultValue="(123) 456-7890"
                                />
                            </dd>
                        </div>
                        <div className="grid grid-cols-3 gap-4 px-6 py-5">
                            <dt className="text-sm font-medium text-gray-500">
                                Địa chỉ
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 col-span-2">
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    defaultValue="123 Main St"
                                />
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-2 w-full mt-2"
                                    defaultValue="Anytown, USA 12345"
                                />
                            </dd>
                        </div>
                    </dl>
                </div>

            </div>

            <Footer />
        </>
    );
}

export default Profile;
