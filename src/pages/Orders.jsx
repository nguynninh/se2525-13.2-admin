import React from 'react';
import { CheckCircle, Clock, Truck, XCircle, Package2 } from 'lucide-react';

const statusStyles = {
  pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  confirmed: 'bg-blue-50 text-blue-700 border-blue-200',
  shipping: 'bg-purple-50 text-purple-700 border-purple-200',
  completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  cancelled: 'bg-rose-50 text-rose-700 border-rose-200',
};

const statusIcon = (status) => {
  if (status === 'pending') return <Clock className="w-4 h-4" />;
  if (status === 'confirmed') return <CheckCircle className="w-4 h-4" />;
  if (status === 'shipping') return <Truck className="w-4 h-4" />;
  if (status === 'completed') return <Package2 className="w-4 h-4" />;
  return <XCircle className="w-4 h-4" />;
};

const Orders = () => {
  const orders = [];
  const statusCounters = [];
  const shipments = [];
  const shippingRates = [];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {statusCounters.length === 0 ? (
          <div className="border rounded-xl px-4 py-3 text-sm text-gray-600 bg-white lg:col-span-5">
            Chưa có dữ liệu trạng thái đơn.
          </div>
        ) : (
          statusCounters.map((item) => (
            <div
              key={item.label}
              className={`border rounded-xl px-4 py-3 flex items-center gap-3 ${statusStyles[item.status]}`}
            >
              <div className="w-10 h-10 rounded-lg bg-white/60 grid place-items-center">
                {statusIcon(item.status)}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                <p className="text-lg font-bold">{item.value}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div>
              <p className="text-sm text-gray-500">Orders</p>
              <p className="text-lg font-semibold text-gray-900">Seller order pipeline</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 border rounded-lg hover:bg-gray-50">
                Filter
              </button>
              <button className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg">
                Update status
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Order</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Customer</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Total</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Payment</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600">Updated</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-4 py-6 text-center text-sm text-gray-600">
                      Chưa có đơn hàng.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-900">{order.id}</td>
                      <td className="px-4 py-3 text-gray-800">{order.customer}</td>
                      <td className="px-4 py-3 text-gray-900 font-semibold">{order.total}</td>
                      <td className="px-4 py-3 text-gray-700">{order.payment}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border ${statusStyles[order.status]}`}
                        >
                          {statusIcon(order.status)}
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-700">{order.updatedAt}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-gray-500">Shipments</p>
                <p className="font-semibold text-gray-900">Admin / Seller tracking</p>
              </div>
              <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">Create</button>
            </div>
            <div className="space-y-3">
              {shipments.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-lg p-3 text-sm text-gray-600">
                  Chưa có shipment.
                </div>
              ) : (
                shipments.map((shipment) => (
                  <div key={shipment.id} className="border border-gray-100 rounded-lg px-3 py-2">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-gray-900">{shipment.id}</p>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${statusStyles[shipment.status]}`}>
                        {shipment.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Order: {shipment.orderId}</p>
                    <p className="text-xs text-gray-500">Carrier: {shipment.carrier}</p>
                    <p className="text-xs text-gray-500">ETA: {shipment.eta}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-gray-900">Shipping rates</p>
              <button className="text-sm font-semibold text-gray-700 hover:text-gray-900">Edit</button>
            </div>
            <div className="space-y-2">
              {shippingRates.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-lg p-3 text-sm text-gray-600">
                  Chưa có cấu hình phí.
                </div>
              ) : (
                shippingRates.map((rate) => (
                  <div key={rate.name} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">{rate.name}</p>
                      <p className="text-xs text-gray-500">ETA: {rate.eta}</p>
                    </div>
                    <p className="font-semibold text-gray-900">{rate.fee}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
