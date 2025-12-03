import React from 'react';
import { Search, Bell, ShieldCheck, Globe2 } from 'lucide-react';

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="px-3 py-1 rounded-full bg-gray-700/40 text-gray-200 text-xs font-semibold border border-gray-500/40">
          Production
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-50">Commerce Admin Console</h1>
          <p className="text-xs text-gray-400">Monitor shops, servers, and deployment traffic in real time.</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search admin, shop, server..."
            className="pl-10 pr-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/60"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        </div>
        <button className="p-2 rounded-lg border border-gray-700 bg-gray-800 hover:border-gray-500 transition-colors">
          <Bell className="w-4 h-4 text-gray-200" />
        </button>
        <button className="p-2 rounded-lg border border-gray-700 bg-gray-800 hover:border-gray-500 transition-colors">
          <ShieldCheck className="w-4 h-4 text-gray-200" />
        </button>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700 bg-gray-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-gray-950 font-semibold">
            AD
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-100">Ops Admin</p>
            <p className="text-xs text-gray-500 inline-flex items-center gap-1">
              <Globe2 className="w-3 h-3" />
              VN - APAC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
