import React from 'react';
import { Store, MapPin, Phone, Mail, ShieldCheck, Users } from 'lucide-react';

const Shop = () => {
  const shop = {
    name: '—',
    slug: '—',
    status: 'pending',
    description: '',
    phone: '',
    email: '',
    address: '',
  };

  const favorites = [];

  const applications = [];

  const statusBadge = (status) => {
    const map = {
      active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      approved: 'bg-blue-50 text-blue-700 border-blue-200',
      rejected: 'bg-rose-50 text-rose-700 border-rose-200',
    };
    return <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${map[status]}`}>{status}</span>;
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gray-900 text-white grid place-items-center">
          <Store className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Shop & Seller</p>
          <p className="text-lg font-semibold text-gray-900">Thông tin shop & seller</p>
        </div>
        <button className="text-sm font-semibold text-white bg-gray-900 px-3 py-2 rounded-lg">Cập nhật shop</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 lg:col-span-2">
          <p className="text-sm text-gray-500 mb-2">Thông tin shop</p>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-900 text-white grid place-items-center text-lg font-bold">
              HS
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-gray-900">{shop.name}</p>
                {statusBadge(shop.status)}
              </div>
              <p className="text-sm text-gray-700">{shop.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-500" />{shop.address}</span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-500" />{shop.phone}</span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-500" />{shop.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-sm text-gray-500">Shop status</p>
              <p className="font-semibold text-gray-900">Trạng thái hiển thị</p>
            </div>
            <button className="text-sm font-semibold text-gray-700 border px-3 py-2 rounded-lg hover:bg-gray-50">Đổi trạng thái</button>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p>Slug: {shop.slug}</p>
            <p>Trạng thái: {shop.status || '—'}</p>
            <p>Hiển thị công khai: —</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-gray-100 grid place-items-center">
              <Users className="w-4 h-4 text-gray-800" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Yêu thích</p>
              <p className="text-xs text-gray-500">Danh sách người theo dõi</p>
            </div>
          </div>
          <div className="space-y-2">
            {favorites.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-lg p-3 text-sm text-gray-600">
                No followers yet.
              </div>
            ) : (
              favorites.map((fav) => (
                <div key={fav.user} className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2 text-sm">
                  <span className="font-semibold text-gray-900">{fav.user}</span>
                  <span className="text-xs text-gray-500">Từ {fav.since}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 lg:col-span-2">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-sm font-semibold text-gray-900">Seller applications</p>
              <p className="text-xs text-gray-500">Pending / History</p>
            </div>
            <span className="text-xs text-gray-500">Quản lý duyệt</span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase border-b border-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Mã</th>
                  <th className="px-3 py-2 text-left font-semibold">Người gửi</th>
                  <th className="px-3 py-2 text-left font-semibold">Trạng thái</th>
                  <th className="px-3 py-2 text-left font-semibold">Ngày</th>
                </tr>
              </thead>
              <tbody>
                {applications.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-3 py-4 text-center text-sm text-gray-600">
                      No applications yet.
                    </td>
                  </tr>
                ) : (
                  applications.map((app) => (
                    <tr key={app.id} className="border-b border-gray-100">
                      <td className="px-3 py-2 font-semibold text-gray-900">{app.id}</td>
                      <td className="px-3 py-2 text-gray-700">{app.user}</td>
                      <td className="px-3 py-2">{statusBadge(app.status)}</td>
                      <td className="px-3 py-2 text-gray-700">{app.created}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-gray-500">Quản trị user/seller</p>
            <p className="font-semibold text-gray-900">Kiểm duyệt tài khoản & shop</p>
          </div>
          <button className="text-sm font-semibold text-gray-700 border px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Kiểm duyệt
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-700">
          <div className="border border-gray-100 rounded-lg p-3">
            <p className="font-semibold text-gray-900">User</p>
            <p className="text-xs text-gray-500">List, detail, delete</p>
          </div>
          <div className="border border-gray-100 rounded-lg p-3">
            <p className="font-semibold text-gray-900">Seller</p>
            <p className="text-xs text-gray-500">Đổi trạng thái, xóa seller</p>
          </div>
          <div className="border border-gray-100 rounded-lg p-3">
            <p className="font-semibold text-gray-900">Shop admin</p>
            <p className="text-xs text-gray-500">List/featured/status/feature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
