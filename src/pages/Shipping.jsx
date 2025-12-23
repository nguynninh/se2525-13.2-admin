import React from 'react';
import { Truck, Navigation, Map, Edit } from 'lucide-react';

const Shipping = () => {
  const shipments = [];

  const rates = [];

  const addresses = [];

  const statusBadge = (status) => {
    const map = {
      shipping: 'bg-purple-50 text-purple-700 border-purple-200',
      completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
    };
    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border ${map[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gray-900 text-white grid place-items-center">
          <Truck className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Shipments & Rates</p>
          <p className="text-lg font-semibold text-gray-900">Quản lý vận chuyển</p>
        </div>
        <button className="text-sm font-semibold text-white bg-gray-900 px-3 py-2 rounded-lg">Tạo shipment</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-gray-900">Danh sách shipment</p>
            <span className="text-xs text-gray-500">Theo đơn hàng</span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase border-b border-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Mã</th>
                  <th className="px-3 py-2 text-left font-semibold">Đơn</th>
                  <th className="px-3 py-2 text-left font-semibold">Hãng</th>
                  <th className="px-3 py-2 text-left font-semibold">Trạng thái</th>
                  <th className="px-3 py-2 text-left font-semibold">ETA</th>
                </tr>
              </thead>
              <tbody>
                {shipments.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-3 py-4 text-center text-sm text-gray-600">
                      Chưa có shipment.
                    </td>
                  </tr>
                ) : (
                  shipments.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="px-3 py-2 font-semibold text-gray-900">{item.id}</td>
                      <td className="px-3 py-2 text-gray-700">{item.orderId}</td>
                      <td className="px-3 py-2 text-gray-700">{item.carrier}</td>
                      <td className="px-3 py-2">{statusBadge(item.status)}</td>
                      <td className="px-3 py-2 text-gray-700">{item.eta}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-semibold text-gray-900">Phí vận chuyển</p>
              <p className="text-xs text-gray-500">Quản lý cấu hình phí</p>
            </div>
            <button className="text-sm font-semibold text-gray-700 border px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-1">
              <Edit className="w-4 h-4" />
              Sửa
            </button>
          </div>
          <div className="space-y-2">
            {rates.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-lg p-3 text-sm text-gray-600">
                Chưa có cấu hình phí.
              </div>
            ) : (
              rates.map((rate) => (
                <div key={rate.name} className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">{rate.name}</p>
                    <p className="text-xs text-gray-500">{rate.eta}</p>
                  </div>
                  <p className="font-semibold text-gray-900">{rate.fee}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-gray-100 grid place-items-center">
              <Navigation className="w-4 h-4 text-gray-800" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Địa chỉ giao hàng</p>
              <p className="text-xs text-gray-500">Quản lý địa chỉ</p>
            </div>
          </div>
          <div className="space-y-2">
            {addresses.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-lg p-3 text-sm text-gray-600">
                Chưa có địa chỉ.
              </div>
            ) : (
              addresses.map((addr) => (
                <div key={addr.address} className="border border-gray-100 rounded-lg p-3 text-sm">
                  <p className="font-semibold text-gray-900">{addr.receiver} ({addr.phone})</p>
                  <p className="text-gray-700">{addr.address}</p>
                  {addr.default && <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full inline-block mt-1">Default</span>}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 lg:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-gray-100 grid place-items-center">
              <Map className="w-4 h-4 text-gray-800" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Địa lý</p>
              <p className="text-xs text-gray-500">Danh sách tỉnh/thành, quận/huyện</p>
            </div>
          </div>
          <div className="text-sm text-gray-700 space-y-1">
            <p>Hỗ trợ dropdown tỉnh/thành và quận/huyện cho form địa chỉ giao hàng.</p>
            <p>Lưu ý cache dữ liệu địa lý để giảm số lần gọi API.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
