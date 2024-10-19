import { Link } from "react-router-dom";

function Fields({ field, onSubmit, onCancel }){
    return (
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Sửa chi tiết mảng
            </h2>
            <form onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            
                <div className="w-full">
                  <label
                    htmlFor="instructor_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tên mảng
                  </label>
                  <input
                    type="text"
                    name="instructor_name"
                    id="instructor_name"
                    // defaultValue={course ? course.instructor_name : ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Instructor name"
                    required
                  />
                </div>
    
    
                <div className="w-full">
                  <label
                    htmlFor="instructor_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tên nhân viên
                  </label>
                  <input
                    type="text"
                    name="instructor_name"
                    id="instructor_name"
                    // defaultValue={course ? course.instructor_name : ""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Instructor name"
                    required
                  />
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
                    // defaultValue={course ? course.description : ""}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"
                  ></textarea>
                </div>
                
              </div>
              <div className="flex mt-8 max-w-[500px] justify-between mx-auto">
            <div>
              <Link to="/admin/addfield">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Cập nhật
                </button>
              </Link>
            </div>
            <div>
              <Link to="/admin/addfield">
                {" "}
                <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Hủy
                </button>
              </Link>
            </div>
            <div>
             <Link to="/admin/addfield">
             <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
                  Thêm mảng
                </button>
             </Link>
            </div>
          </div>
            </form>
          </div>
        </section>
      );
}

export default Fields;