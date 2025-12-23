import React from 'react';
import { PackageCheck, Users2, Truck, CreditCard, MessageCircle, ShieldCheck, ShoppingCart } from 'lucide-react';
import AreaChart from '../components/AreaChart';

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
    <div className={`w-10 h-10 rounded-lg grid place-items-center ${color}`}>
      <Icon className="w-5 h-5 text-gray-900" />
    </div>
    <div className="min-w-0">
      <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">{label}</p>
      <p className="text-xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const statCards = [
    { icon: ShoppingCart, label: 'Đơn hàng hôm nay', value: '—', color: 'bg-gray-100' },
    { icon: PackageCheck, label: 'Đang giao', value: '—', color: 'bg-amber-100' },
    { icon: Users2, label: 'Khách quay lại', value: '—', color: 'bg-emerald-100' },
    { icon: CreditCard, label: 'Doanh thu', value: '—', color: 'bg-indigo-100' },
  ];

  const quickActions = [
    { title: 'Quản lý sản phẩm', desc: 'Sản phẩm & danh mục', action: 'Tạo mới' },
    { title: 'Đơn & trạng thái', desc: 'Seller orders & status', action: 'Xử lý' },
    { title: 'Shipment & phí VC', desc: 'Quản lý vận chuyển & phí', action: 'Cập nhật' },
    { title: 'Q&A / Review', desc: 'Hỏi đáp & đánh giá sản phẩm', action: 'Trả lời' },
  ];

  const recentOrders = [];

  const statusBadge = (status) => {
    const map = {
      shipping: 'bg-purple-50 text-purple-700 border-purple-200',
      confirmed: 'bg-blue-50 text-blue-700 border-blue-200',
      completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      cancelled: 'bg-rose-50 text-rose-700 border-rose-200',
    };
    return (
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${map[status]}`}>
        {status || '—'}
      </span>
    );
  };

  const supportCards = [
    { title: 'Bảo mật & session', desc: 'Đăng nhập, refresh token, đăng xuất', icon: ShieldCheck },
    { title: 'Khách & địa chỉ', desc: 'Hồ sơ người dùng, địa chỉ giao hàng', icon: Users2 },
    { title: 'Chat & tương tác', desc: 'Review / Q&A phản hồi nhanh', icon: MessageCircle },
  ];

  return (
    <div className="space-y-4 bg-content-bg min-h-screen p-3 lg:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {statCards.map((card) => (
          <StatCard key={card.label} icon={card.icon} label={card.label} value={card.value} color={card.color} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 xl:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-gray-500">Đơn hàng</p>
              <p className="text-lg font-semibold text-gray-900">Seller order / status / history</p>
            </div>
            <button className="px-3 py-2 text-sm font-semibold text-white bg-gray-900 rounded-lg">
              Tạo shipment
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs uppercase border-b border-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Mã đơn</th>
                  <th className="px-3 py-2 text-left font-semibold">Khách hàng</th>
                  <th className="px-3 py-2 text-left font-semibold">Tổng</th>
                  <th className="px-3 py-2 text-left font-semibold">Trạng thái</th>
                  <th className="px-3 py-2 text-left font-semibold">Cập nhật</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-3 py-6 text-center text-sm text-gray-600">
                      Chưa có đơn hàng.
                    </td>
                  </tr>
                ) : (
                  recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100">
                      <td className="px-3 py-2 font-semibold text-gray-900">{order.id}</td>
                      <td className="px-3 py-2 text-gray-700">{order.customer}</td>
                      <td className="px-3 py-2 font-semibold text-gray-900">{order.total}</td>
                      <td className="px-3 py-2">{statusBadge(order.status)}</td>
                      <td className="px-3 py-2 text-gray-600">{order.updated}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-900 text-white grid place-items-center">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Vận chuyển</p>
              <p className="font-semibold text-gray-900">/shipments /shipping-rates</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Đang giao</span>
              <span className="font-semibold text-gray-900">—</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Đã giao</span>
              <span className="font-semibold text-gray-900">—</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Tỉ lệ giao thành công</span>
              <span className="font-semibold text-gray-900">—</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Lối tắt tính năng</p>
              <p className="font-semibold text-gray-900">Bám theo API seller/admin</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickActions.map((item) => (
              <div key={item.title} className="border border-gray-100 rounded-lg p-3 hover:border-gray-200">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500 mb-2">{item.desc}</p>
                <button className="text-xs font-semibold text-gray-700 border px-3 py-1.5 rounded-lg hover:bg-gray-50">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
          <p className="text-sm text-gray-500">Hỗ trợ</p>
          <div className="space-y-3">
            {supportCards.map((card) => (
              <div key={card.title} className="flex items-start gap-3">
                {(() => {
                  const Icon = card.icon;
                  return (
                    <div className="w-9 h-9 rounded-lg bg-gray-100 grid place-items-center">
                      <Icon className="w-4 h-4 text-gray-800" />
                    </div>
                  );
                })()}
                <div>
                  <p className="font-semibold text-gray-900">{card.title}</p>
                  <p className="text-xs text-gray-600">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AreaChart />
    </div>
  );
};

export default Dashboard;
