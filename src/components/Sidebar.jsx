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
  Bell,
  BarChart3,
  Tag,
  FileText,
  Globe2,
  Headset,
} from 'lucide-react';

const Sidebar = ({ active = 'overview', onSelect }) => {
  const primary = [
    { icon: LayoutDashboard, label: 'Overview', key: 'overview' },
    { icon: Users, label: 'Users & Roles', key: 'users' },
    { icon: Store, label: 'Sellers & Shops', key: 'sellers' },
    { icon: ClipboardList, label: 'Orders', key: 'orders' },
    { icon: CreditCard, label: 'Payments', key: 'payments' },
    { icon: Bell, label: 'Notifications', key: 'notifications' },
    { icon: Tag, label: 'Promos', key: 'promos' },
    { icon: BarChart3, label: 'Reports', key: 'reports' },
    { icon: FileText, label: 'CMS', key: 'cms' },
    { icon: Settings, label: 'Config', key: 'config' },
    { icon: ShieldCheck, label: 'Security', key: 'security' },
    { icon: Headset, label: 'Support', key: 'support' },
    { icon: LogOut, label: 'Sign out', key: 'signout' },
  ];

  return (
    <div className="w-72 bg-white border-r border-gray-200 min-h-screen p-6 flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-gray-200 to-gray-400 rounded-2xl flex items-center justify-center text-gray-900 font-bold shadow-sm shadow-gray-300/60">
            AD
          </div>
          <div>
            <p className="text-sm text-gray-500">Marketplace</p>
            <p className="text-lg font-semibold text-gray-800">Super Admin</p>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-gray-500 px-1">Primary navigation</p>
          <nav className="space-y-2">
            {primary.map((item, i) => (
              <button
                key={i}
                onClick={() => {
                  if (item.key === 'signout') {
                    window.alert('You have signed out.');
                    return;
                  }
                  onSelect?.(item.key);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all border ${
                  active === item.key
                    ? 'bg-gray-100 border-gray-300 text-gray-900 shadow-sm'
                    : 'bg-white border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

      </div>

      {/* Sign out moved into primary navigation */}
    </div>
  );
};

export default Sidebar;
