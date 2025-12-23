import React, { useEffect, useState, useCallback } from 'react';
import { Store, MapPin, Phone, Mail, Users, RefreshCcw } from 'lucide-react';
import { getMyShop, getSellerProfile } from '../api/seller';

const fallbackShop = {
  name: 'N/A',
  slug: 'N/A',
  status: 'pending',
  description: '',
  phone: '',
  email: '',
  address: '',
};

const Shop = () => {
  const [shop, setShop] = useState(fallbackShop);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const statusBadge = (status = 'pending') => {
    const map = {
      active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      approved: 'bg-blue-50 text-blue-700 border-blue-200',
      rejected: 'bg-rose-50 text-rose-700 border-rose-200',
      inactive: 'bg-gray-100 text-gray-700 border-gray-200',
    };
    const styles = map[status] || map.pending;
    return <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${styles}`}>{status}</span>;
  };

  const loadShopData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [sellerData, shopData] = await Promise.all([getSellerProfile(), getMyShop()]);
      if (sellerData) setSeller(sellerData);
      if (shopData) setShop(shopData);
    } catch (err) {
      setError(err.message || 'Unable to load shop data.');
      setShop(fallbackShop);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadShopData();
  }, [loadShopData]);

  const favorites = shop?.favorites || [];

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gray-900 text-white grid place-items-center">
          <Store className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Shop & Seller</p>
          <p className="text-lg font-semibold text-gray-900">Shop & seller info</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={loadShopData}
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 border px-3 py-2 rounded-lg hover:bg-gray-50"
            disabled={loading}
          >
            <RefreshCcw className="w-4 h-4" />
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 lg:col-span-2">
          <p className="text-sm text-gray-500 mb-2">Shop details</p>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-900 text-white grid place-items-center text-lg font-bold">
              HS
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-gray-900">{shop?.name || 'N/A'}</p>
                {statusBadge(shop?.status)}
              </div>
              <p className="text-sm text-gray-700">{shop?.description || 'No description yet.'}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-500" />{shop?.address || 'N/A'}</span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-500" />{shop?.phone || 'N/A'}</span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-500" />{shop?.email || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-sm text-gray-500">Shop status</p>
              <p className="font-semibold text-gray-900">Current status</p>
            </div>
            <button className="text-sm font-semibold text-gray-700 border px-3 py-2 rounded-lg hover:bg-gray-50" disabled>
              Update status
            </button>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p>Slug: {shop?.slug || 'N/A'}</p>
            <p>Status: {shop?.status || 'N/A'}</p>
            <p>Owner: {seller?.user?.email || seller?.user?.name || 'N/A'}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-lg bg-gray-100 grid place-items-center">
            <Users className="w-4 h-4 text-gray-800" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Followers</p>
            <p className="text-xs text-gray-500">Danh sach nguoi theo doi</p>
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
                <span className="text-xs text-gray-500">Since {fav.since}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
