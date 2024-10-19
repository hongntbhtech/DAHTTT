import React from "react";
import { Link } from "react-router-dom";

function Mentors({ mentor, onSubmit, onCancel }) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Sửa chi tiết mentor
                </h2>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="w-full">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Tên mentor
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={mentor ? mentor.name : ""}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Nhập tên mentor"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                defaultValue={mentor ? mentor.email : ""}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Nhập email"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="major"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Chuyên ngành
                            </label>
                            <input
                                type="text"
                                name="major"
                                id="major"
                                defaultValue={mentor ? mentor.major : ""}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Nhập chuyên ngành"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="experience"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Kinh nghiệm
                            </label>
                            <input
                                type="text"
                                name="experience"
                                id="experience"
                                defaultValue={mentor ? mentor.experience : ""}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Nhập kinh nghiệm"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="employee_id"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                ID nhân viên
                            </label>
                            <input
                                type="number"
                                name="employee_id"
                                id="employee_id"
                                defaultValue={mentor ? mentor.employee_id : ""}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Nhập ID nhân viên"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex mt-8 max-w-[500px] justify-between mx-auto">
            <div>
              <Link to="/admin/addmentor">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Cập nhật
                </button>
              </Link>
            </div>
            <div>
              <Link to="/admin/addmentor">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Hủy
                </button>
              </Link>
            </div>
            <div>
             <Link to="/admin/addmentor">
             <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Thêm người hướng dẫn
                </button>
             </Link>
            </div>
          </div>
                </form>
            </div>
        </section>
    );
}

export default Mentors;
