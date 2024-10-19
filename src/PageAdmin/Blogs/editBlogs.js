import React from "react";
import { Link } from "react-router-dom";

function Blogs({ blog, employees, onSubmit, onCancel }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Sửa chi tiết bài viết
        </h2>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tiêu đề
              </label>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={blog ? blog.title : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nhập tiêu đề bài viết"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nội dung
              </label>
              <textarea
                id="content"
                name="content"
                rows="8"
                defaultValue={blog ? blog.content : ""}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nội dung bài viết"
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="image_url"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                URL hình ảnh
              </label>
              <input
                type="url"
                name="image_url"
                id="image_url"
                defaultValue={blog ? blog.image_url : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Nhập URL hình ảnh"
              />
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
                defaultValue={blog ? blog.employee_id : ""}
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
              <Link to="/admin/addblog">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Cập nhật
                </button>
              </Link>
            </div>
            <div>
              <Link to="/admin/addblog">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Hủy
                </button>
              </Link>
            </div>
            <div>
             <Link to="/admin/addblog">
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

export default Blogs;
