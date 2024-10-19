import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function Coupons() {
  const [coupons, setCoupons] = React.useState([
    {
      id: 1,
      code: "Discount10",
      active: true,
      employee_id: 1,
      description: "Giảm giá 10%",
    },
    {
      id: 2,
      code: "Discount20",
      active: true,
      employee_id: 2,
      description: "Giảm giá 20%",
    },
  ]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/editcoupon/${id}`);
  };

  const handleDelete = (id) => {
    const updatedCoupons = coupons.filter((coupon) => coupon.id !== id);
    setCoupons(updatedCoupons);
    alert(`Đã xóa mã giảm giá với ID: ${id}`);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Danh sách mã giảm giá
        </h2>
        <Link to="/admin/addcoupon">
          {" "}
          <button className="mb-4 px-4 py-2 text-sm font-medium text-white bg-[#71BC9F] rounded-lg">
            Thêm mã giảm giá
          </button>
        </Link>
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="py-3 px-4 border-b">ID</th>
              <th className="py-3 px-4 border-b">Mã giảm giá</th>
              <th className="py-3 px-4 border-b">Trạng thái</th>
              <th className="py-3 px-4 border-b">Tên nhân viên</th>
              <th className="py-3 px-4 border-b">Mô tả</th>
              <th className="py-3 px-4 border-b">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr
                key={coupon.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <td className="py-2 px-4 border-b">{coupon.id}</td>
                <td className="py-2 px-4 border-b">{coupon.code}</td>
                <td className="py-2 px-4 border-b">
                  {coupon.active ? "Kích hoạt" : "Ngừng kích hoạt"}
                </td>
                <td className="py-2 px-4 border-b">{coupon.employee_id}</td>
                <td className="py-2 px-4 border-b">{coupon.description}</td>

                <td className="py-2 px-4 border-b">
                  <div className="flex justify-center">
                    <button
                      className="text-blue-500 hover:underline mr-2"
                      onClick={() => handleEdit(coupon.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(coupon.id)}
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Coupons;
