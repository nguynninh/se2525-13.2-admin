import React from 'react';
import { Search, Bell, ShieldCheck, Globe2 } from 'lucide-react';

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/40">
          Production
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-50">Commerce Admin Console</h1>
          <p className="text-xs text-slate-400">Monitor shops, servers, and deployment traffic in real time.</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search admin, shop, server..."
            className="pl-10 pr-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        </div>
        <button className="p-2 rounded-lg border border-slate-700 bg-slate-800 hover:border-cyan-400 transition-colors">
          <Bell className="w-4 h-4 text-slate-200" />
        </button>
        <button className="p-2 rounded-lg border border-slate-700 bg-slate-800 hover:border-emerald-400 transition-colors">
          <ShieldCheck className="w-4 h-4 text-emerald-300" />
        </button>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 bg-slate-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-400 flex items-center justify-center text-slate-950 font-semibold">
            AD
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-100">Ops Admin</p>
            <p className="text-xs text-slate-500 inline-flex items-center gap-1">
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
