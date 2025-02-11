function Coupons() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Thêm mã giảm giá
          </h2>
          <form action="#">
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nhập mã giảm giá"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="active"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Trạng thái
                </label>
                <select
                  id="active"
                  name="active"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="true">Kích hoạt</option>
                  <option value="false">Ngừng kích hoạt</option>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                >
                  <option value="" disabled>
                    Chọn nhân viên
                  </option>
                  {/* Replace with actual employee data */}
                  <option value="1">Nhân viên 1</option>
                  <option value="2">Nhân viên 2</option>
                  <option value="3">Nhân viên 3</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[#71BC9F] rounded-lg"
            >
              Thêm bài viết
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Coupons;
