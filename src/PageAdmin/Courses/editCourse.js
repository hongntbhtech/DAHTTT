// CourseForm.js
import React from "react";
import { Link } from "react-router-dom";

function Courses({ course, onSubmit, onCancel }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Sửa chi tiết khóa học
        </h2>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tên khóa học
              </label>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={course ? course.title : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type course title"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="instructor_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Người hướng dẫn
              </label>
              <input
                type="text"
                name="instructor_name"
                id="instructor_name"
                defaultValue={course ? course.instructor_name : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Instructor name"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Giá
              </label>
              <input
                type="number"
                name="price"
                id="price"
                defaultValue={course ? course.price : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required
              />
            </div>
            <div>
              <label
                htmlFor="course_field_id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mảng khóa học
              </label>
              <select
                id="course_field_id"
                name="course_field_id"
                defaultValue={course ? course.field_id : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="" disabled>
                  Chọn ngôn ngữ
                </option>
                <option value="1">Field 1</option>
                <option value="2">Field 2</option>
                <option value="3">Field 3</option>
                <option value="4">Field 4</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="course_language_id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ngôn ngữ
              </label>
              <select
                id="course_language_id"
                name="course_language_id"
                defaultValue={course ? course.language_id : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="" disabled>
                  Select language
                </option>
                <option value="1">English</option>
                <option value="2">Spanish</option>
                <option value="3">French</option>
                <option value="4">German</option>
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
                rows="8"
                defaultValue={course ? course.description : ""}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="demo_video_url"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Demo Video URL
              </label>
              <input
                type="url"
                name="demo_video_url"
                id="demo_video_url"
                defaultValue={course ? course.demo_video_url : ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter video URL"
              />
            </div>
          </div>
          <div className="flex mt-8 max-w-[500px] justify-between mx-auto">
            <div>
              <Link to="/admin/addcourse">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Cập nhật
                </button>
              </Link>
            </div>
            <div>
              <Link to="/admin/addcourse">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Hủy
                </button>
              </Link>
            </div>
            <div>
             <Link to="/admin/addcourse">
             <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Thêm khóa học
                </button>
             </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Courses;
