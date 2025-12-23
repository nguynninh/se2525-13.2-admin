import React from 'react';
import { MessageCircleQuestion, Star, Check, Clock } from 'lucide-react';

const QA = () => {
  const questions = [];

  const reviews = [];

  const statusBadge = (status) => {
    const map = {
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      answered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    };
    const Icon = status === 'pending' ? Clock : Check;
    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border ${map[status]}`}>
        <Icon className="w-4 h-4" />
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gray-900 text-white grid place-items-center">
            <MessageCircleQuestion className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Q&A / Review</p>
            <p className="font-semibold text-gray-900">/questions /reviews</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="text-sm font-semibold text-white bg-gray-900 px-3 py-2 rounded-lg">Trả lời nhanh</button>
          <button className="text-sm font-semibold text-gray-700 border px-3 py-2 rounded-lg hover:bg-gray-50">Lọc</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-gray-900">Câu hỏi sản phẩm</p>
            <span className="text-xs text-gray-500">Quản lý Q&A</span>
          </div>
          <div className="space-y-3">
            {questions.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-lg p-3 text-sm text-gray-600">
                Chưa có câu hỏi.
              </div>
            ) : (
              questions.map((item) => (
                <div key={`${item.user}-${item.product}`} className="border border-gray-100 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-gray-900">{item.product}</p>
                    {statusBadge(item.status)}
                  </div>
                  <p className="text-sm text-gray-700 mb-1">"{item.question}"</p>
                  <p className="text-xs text-gray-500">Từ: {item.user} • {item.updated}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-gray-900">Đánh giá sản phẩm</p>
            <span className="text-xs text-gray-500">Quản lý review</span>
          </div>
          <div className="space-y-3">
            {reviews.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-lg p-3 text-sm text-gray-600">
                Chưa có đánh giá.
              </div>
            ) : (
              reviews.map((item) => (
                <div key={`${item.user}-${item.product}`} className="border border-gray-100 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-gray-900">{item.product}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-4 h-4 ${idx < item.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                          fill={idx < item.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{item.comment}</p>
                  <p className="text-xs text-gray-500">Từ: {item.user} • {item.updated}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QA;
