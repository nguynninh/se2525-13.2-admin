import React from 'react';
import {
  LayoutDashboard,
  Users,
  Store,
  BadgeCheck,
  PackageCheck,
  ClipboardList,
  CreditCard,
  Wallet,
  Percent,
  FileWarning,
  Activity,
  ShieldCheck,
  Settings,
  LogOut,
} from 'lucide-react';

const Sidebar = ({ active = 'overview', onSelect }) => {
  const primary = [
    { icon: LayoutDashboard, label: 'Overview', key: 'overview' },
    { icon: Users, label: 'Users & Roles', key: 'users' },
    { icon: Store, label: 'Sellers & Shops', key: 'sellers' },
    { icon: ClipboardList, label: 'Orders', key: 'orders' },
    { icon: CreditCard, label: 'Payments', key: 'payments' },
    { icon: FileWarning, label: 'Reports', key: 'reports' },
    { icon: Settings, label: 'Settings', key: 'settings' },
  ];

  const secondary = [
    { icon: Activity, label: 'Health & Logs' },
    { icon: ShieldCheck, label: 'Access control' },
    { icon: Percent, label: 'Service fees' },
    { icon: PackageCheck, label: 'Product moderation' },
    { icon: Wallet, label: 'Seller payouts' },
    { icon: BadgeCheck, label: 'Shop approvals' },
  ];

  return (
    <div className="w-72 bg-slate-950 border-r border-slate-900 min-h-screen p-6 flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-emerald-400 rounded-2xl flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/30">
            AD
          </div>
          <div>
            <p className="text-sm text-slate-300">Marketplace</p>
            <p className="text-lg font-semibold text-slate-50">Super Admin</p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-slate-500 px-1">Primary navigation</p>
          <nav className="space-y-2">
            {primary.map((item, i) => (
              <button
                key={i}
                onClick={() => onSelect?.(item.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all border ${
                  active === item.key
                    ? 'bg-slate-900/80 border-cyan-400/60 text-slate-50 shadow-lg shadow-cyan-500/10'
                    : 'bg-transparent border-slate-900 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-slate-500 px-1">Secondary actions</p>
          <nav className="space-y-1.5">
            {secondary.map((item, i) => (
              <button
                key={i}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-900 text-slate-400 hover:text-slate-50 hover:border-slate-700 hover:bg-slate-900/60 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm flex-1 text-left">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <button className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:text-slate-50 hover:border-slate-700 rounded-xl border border-slate-900 bg-slate-900/60 transition-colors">
        <LogOut className="w-5 h-5" />
        <span className="text-sm font-medium">Sign out</span>
      </button>
    </div>
  );
};

export default Sidebar;
