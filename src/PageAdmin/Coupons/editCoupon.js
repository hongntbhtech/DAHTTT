import { Link } from "react-router-dom";

function Coupons({ coupon, employees, onSubmit, onCancel }){
    return (
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Sửa thông tin mã giảm giá
            </h2>
            <form onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mã giảm giá
                  </label>
                  <input
                    type="text"
                    name="code"
                    id="code"
                    defaultValue={coupon ? coupon.code : ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Nhập mã giảm giá"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="active"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Trạng thái
                  </label>
                  <select
                    id="active"
                    name="active"
                    defaultValue={coupon ? coupon.active : true}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Ngừng kích hoạt</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mô tả
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    defaultValue={coupon ? coupon.description : ""}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Nhập mô tả cho mã giảm giá"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="employee_id"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nhân viên
                  </label>
                  <select
                    id="employee_id"
                    name="employee_id"
                    defaultValue={coupon ? coupon.employee_id : ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="" disabled>
                      Chọn nhân viên
                    </option>
                    {/* {employees.map((employee) => (
                      <option key={employee.id} value={employee.id}>
                        {employee.name}
                      </option>
                    ))} */}
                  </select>
                </div>
              </div>
              <div className="flex mt-8 max-w-[500px] justify-between mx-auto">
            <div>
              <Link to="/admin/addcoupon">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Cập nhật
                </button>
              </Link>
            </div>
            <div>
              <Link to="/admin/addcoupon">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Hủy
                </button>
              </Link>
            </div>
            <div>
             <Link to="/admin/addcoupon">
             <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Thêm bài viết
                </button>
             </Link>
            </div>
          </div>
            </form>
          </div>
        </section>
      );
}

export default Coupons;