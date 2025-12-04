import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import {
  Activity,
  Bell,
  Ban,
  ClipboardList,
  CreditCard,
  BarChart3,
  FileText,
  FileWarning,
  Headset,
  Image as ImageIcon,
  Lock,
  LogOut,
  Globe2,
  Package,
  Percent,
  ShieldCheck,
  Settings,
  ShoppingBag,
  SlidersHorizontal,
  Tag,
  Truck,
  UserCog,
  Users,
  Wallet,
} from 'lucide-react';

const OverviewPage = () => {
  const overviewCards = [
    { label: 'Total users', value: '2.3M', change: '+1.2K today', icon: Users, accent: 'from-gray-200 to-gray-100' },
    { label: 'Active sellers', value: '18,420', change: '+128 new', icon: ShoppingBag, accent: 'from-gray-200 to-gray-100' },
    { label: 'Orders (24h)', value: '182K', change: 'up 8.4% WoW', icon: ClipboardList, accent: 'from-gray-200 to-gray-100' },
    { label: 'Payments processed', value: '$1.2M', change: '98.6% success', icon: CreditCard, accent: 'from-gray-200 to-gray-100' },
  ];

  const healthMeters = [
    { label: 'Live version', value: '3.12.4', detail: 'Order + Payment', color: 'text-gray-700' },
    { label: 'Cluster status', value: '5 regions', detail: 'SG / HN / Tokyo', color: 'text-gray-700' },
    { label: 'Open tickets', value: '19', detail: '5 P1, 14 P2', color: 'text-gray-700' },
  ];

  const systemSignals = [
    { label: 'Payments', state: 'On track', desc: '98.6% success', color: 'gray' },
    { label: 'Realtime orders', state: 'On track', desc: '182K / 24h', color: 'gray' },
    { label: 'Scheduled maintenance', state: 'Incoming', desc: '18:00 - 19:00', color: 'gray' },
  ];

  const schedules = [
    { title: 'Shop enforcement', window: 'Every 30 minutes', owner: 'Ops team' },
    { title: 'New seller sync', window: 'Every 5 minutes', owner: 'Data sync' },
    { title: 'Payment SDK rollout', window: 'Under observation', owner: 'Payment' },
  ];

  return (
    <div className="space-y-6">
      <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {healthMeters.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <p className="text-xs text-gray-500">{item.label}</p>
              <div className={`text-xl font-semibold mt-2 ${item.color}`}>{item.value}</div>
              <p className="text-[11px] text-gray-500 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {overviewCards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.accent} border border-gray-300 inline-flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-gray-500" />
              </div>
              <span className="text-[11px] text-gray-500">{card.change}</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">{card.label}</p>
            <div className="text-2xl font-bold mt-1">{card.value}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-gray-600" />
            <p className="text-sm font-semibold">System signals</p>
          </div>
          <div className="space-y-3">
            {systemSignals.map((signal, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      signal.color === 'gray' ? 'bg-gray-400' : 'bg-gray-500'
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium">{signal.label}</p>
                    <p className="text-xs text-gray-500">{signal.desc}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{signal.state}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gray-600" />
            <p className="text-sm font-semibold">Schedules & priorities</p>
          </div>
          <div className="space-y-3">
            {schedules.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <span className="text-[11px] text-gray-500">{item.window}</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">Owner: {item.owner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const UsersRolesPage = () => {
  const userStats = [
    { label: 'Total users', value: '2.3M', change: '+1.2K today', icon: Users, tone: 'from-gray-200 to-gray-100', border: 'border-gray-300' },
    { label: 'Active last 24h', value: '892K', change: '+4.2% WoW', icon: Activity, tone: 'from-gray-200 to-gray-100', border: 'border-gray-300' },
    { label: 'Admin accounts', value: '312', change: '8 pending invites', icon: UserCog, tone: 'from-gray-200 to-gray-100', border: 'border-gray-300' },
    { label: 'Suspended', value: '1,240', change: '72 reviewed today', icon: Ban, tone: 'from-gray-200 to-gray-100', border: 'border-gray-300' },
  ];

  const roleBreakdown = [
    { role: 'Platform admin', count: 58, trend: '+2 this week' },
    { role: 'Ops moderator', count: 164, trend: '+12 this week' },
    { role: 'Seller support', count: 486, trend: '+34 this week' },
    { role: 'Finance reviewer', count: 104, trend: '+5 this week' },
  ];

  const approvals = [
    { name: 'Tran Mai', role: 'Platform admin', status: 'Awaiting 2FA', age: '12m' },
    { name: 'Hoang Anh', role: 'Finance reviewer', status: 'Needs manager sign-off', age: '26m' },
    { name: 'Linh Bui', role: 'Ops moderator', status: 'Pending email verify', age: '33m' },
  ];

  const accessReviews = [
    { title: 'Finance reviewers', window: 'Quarterly', owner: 'Risk', next: 'Mar 12' },
    { title: 'Platform admins', window: 'Monthly', owner: 'Security', next: 'Feb 22' },
    { title: 'Ops moderators', window: 'Monthly', owner: 'Ops', next: 'Feb 28' },
  ];

  const quickActions = [
    { label: 'Invite new admin', desc: 'Create and send access invite', icon: ShieldCheck },
    { label: 'Update role policies', desc: 'Adjust scopes for a cohort', icon: UserCog },
    { label: 'Export user audit', desc: 'CSV of last 7 days changes', icon: ClipboardList },
    { label: 'Freeze risky accounts', desc: 'Bulk suspend flagged users', icon: Ban },
  ];

  return (
    <div className="space-y-4">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {userStats.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.tone} border ${card.border} inline-flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-gray-500" />
              </div>
              <span className="text-[11px] text-gray-500">{card.change}</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">{card.label}</p>
            <div className="text-2xl font-bold mt-1">{card.value}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gray-600" />
            <p className="text-sm font-semibold">Role breakdown</p>
          </div>
          <div className="space-y-3">
            {roleBreakdown.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{item.role}</p>
                  <p className="text-xs text-gray-500">{item.trend}</p>
                </div>
                <span className="text-lg font-semibold">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-gray-600" />
            <p className="text-sm font-semibold">Pending approvals</p>
          </div>
          <div className="space-y-3">
            {approvals.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                  <span className="text-xs text-gray-400">{item.age}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-gray-600" />
            <p className="text-sm font-semibold">Access reviews</p>
          </div>
          <div className="space-y-3">
            {accessReviews.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.window} - Owner: {item.owner}</p>
                </div>
                <span className="text-xs text-gray-400">Next: {item.next}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-4">
          <p className="text-sm font-semibold">Ops quick actions</p>
          <div className="space-y-2.5">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white text-left hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                <action.icon className="w-4 h-4 text-gray-600" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{action.label}</p>
                  <p className="text-xs text-gray-500">{action.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const SellersShopsPage = () => {
  const sellerStats = [
    { label: 'Total shops', value: '38,210', change: '+420 this week', icon: ShoppingBag, tone: 'from-gray-200 to-gray-100', border: 'border-gray-300' },
    { label: 'Pending review', value: '312', change: '64 P1 priority', icon: ClipboardList, tone: 'from-gray-200 to-gray-100', border: 'border-gray-300' },
    { label: 'KYC verified', value: '34,118', change: '92% verified', icon: ShieldCheck, tone: 'from-gray-200 to-gray-100', border: 'border-gray-300' },
    { label: 'Suspended', value: '1,204', change: '72 reviewed today', icon: Ban, tone: 'from-gray-200 to-gray-100', border: 'border-gray-300' },
  ];

  const approvalsQueue = [
    { name: 'Shop Alpha', status: 'Waiting docs', age: '12m', owner: 'Ops' },
    { name: 'Tokyo Mart', status: 'Manual review', age: '22m', owner: 'Risk' },
    { name: 'Eco Store', status: 'Flagged address', age: '35m', owner: 'Ops' },
  ];

  const activeShops = [
    { name: 'Urban Style', reason: 'Policy violation', age: '5m', owner: 'Ops' },
    { name: 'Eco Market', reason: 'High return rate', age: '18m', owner: 'Risk' },
    { name: 'Tech Hub', reason: 'Fraud suspicion', age: '25m', owner: 'Fraud' },
  ];

  const regionPerformance = [
    { region: 'SG', orders: '52K', growth: '+6.2% WoW' },
    { region: 'HN', orders: '41K', growth: '+4.8% WoW' },
    { region: 'HCM', orders: '38K', growth: '+5.1% WoW' },
    { region: 'Tokyo', orders: '22K', growth: '+3.4% WoW' },
  ];

  const opsSignals = [
    { label: 'Payouts', desc: '98.4% success', state: 'On track', color: 'gray' },
    { label: 'Fulfillment SLA', desc: '92% within 48h', state: 'Watch', color: 'gray' },
    { label: 'Returns', desc: '2.4% rate', state: 'Stable', color: 'gray' },
  ];

  const quickActions = [
    { label: 'Approve P1 shops', desc: 'Handle priority applications first', icon: ShieldCheck },
    { label: 'Freeze violation batch', desc: 'Bulk suspend flagged shops', icon: Ban },
    { label: 'Export seller metrics', desc: 'CSV for last 7 days', icon: ClipboardList },
    { label: 'Adjust payout window', desc: 'Switch cohort to T+2', icon: CreditCard },
  ];

  return (
    <div className="space-y-4">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {sellerStats.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.tone} border ${card.border} inline-flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-gray-500" />
              </div>
              <span className="text-[11px] text-gray-500">{card.change}</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">{card.label}</p>
            <div className="text-2xl font-bold mt-1">{card.value}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gray-600" />
            <p className="text-sm font-semibold">KYC / approvals</p>
          </div>
          <div className="space-y-3">
            {approvalsQueue.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">{item.age}</p>
                  <p className="text-[11px] text-gray-500">Owner: {item.owner}</p>
                  <div className="flex items-center gap-2 justify-end mt-2">
                    <button
                      onClick={() => alert(`Approved ${item.name}`)}
                      className="text-xs px-2.5 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-gray-600" />
            <p className="text-sm font-semibold">Ops signals</p>
          </div>
          <div className="space-y-3">
            {opsSignals.map((signal, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{signal.label}</p>
                  <p className="text-xs text-gray-500">{signal.desc}</p>
                </div>
                <span className="text-xs text-gray-300">{signal.state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-gray-600" />
            <p className="text-sm font-semibold">Regional performance</p>
          </div>
          <div className="space-y-2">
            {regionPerformance.map((row, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{row.region}</p>
                  <p className="text-xs text-gray-500">{row.growth}</p>
                </div>
                <span className="text-lg font-semibold">{row.orders}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-4">
          <p className="text-sm font-semibold">Seller quick actions</p>
          <div className="space-y-2.5">
            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white text-left hover:border-gray-400 hover:bg-gray-50 transition-colors"
              onClick={() => alert('Approving P1 shops')}
            >
              <ShieldCheck className="w-4 h-4 text-gray-600" />
              <div className="flex-1">
                <p className="text-sm font-semibold">Approve P1 shops</p>
                <p className="text-xs text-gray-500">Handle priority applications first</p>
              </div>
            </button>
            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white text-left hover:border-gray-400 hover:bg-gray-50 transition-colors"
              onClick={() => alert('Banning violating shops')}
            >
              <Ban className="w-4 h-4 text-gray-600" />
              <div className="flex-1">
                <p className="text-sm font-semibold">Ban violating shops</p>
                <p className="text-xs text-gray-500">Suspend flagged active shops</p>
              </div>
            </button>
            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white text-left hover:border-gray-400 hover:bg-gray-50 transition-colors"
              onClick={() => alert('Export seller metrics')}
            >
              <ClipboardList className="w-4 h-4 text-gray-600" />
              <div className="flex-1">
                <p className="text-sm font-semibold">Export seller metrics</p>
                <p className="text-xs text-gray-500">CSV for last 7 days</p>
              </div>
            </button>
            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white text-left hover:border-gray-400 hover:bg-gray-50 transition-colors"
              onClick={() => alert('Adjusting payout window')}
            >
              <CreditCard className="w-4 h-4 text-gray-600" />
              <div className="flex-1">
                <p className="text-sm font-semibold">Adjust payout window</p>
                <p className="text-xs text-gray-500">Switch cohort to T+2</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const OrdersPage = () => {
  const summary = [
    { label: 'Orders (today)', value: '1,820', change: '+12% vs yesterday', icon: ClipboardList },
    { label: 'Revenue (today)', value: '$420K', change: '+8.4% vs yesterday', icon: CreditCard },
    { label: 'Avg. processing time', value: '14m', change: '-2m vs last week', icon: Truck },
    { label: 'Returns', value: '38', change: '1.9% of orders', icon: Package },
  ];

  const orders = [
    { id: '#876364', name: 'T-Shirt Groot Black', price: '$100.00', status: 'Shipped', time: '10:32 AM' },
    { id: '#876368', name: 'Sepatu Nike', price: '$800.00', status: 'Processing', time: '10:21 AM' },
    { id: '#876412', name: 'T-Shirt Love Kills', price: '$100.00', status: 'Packaging', time: '09:58 AM' },
    { id: '#876621', name: 'Tas Selempang Pria', price: '$80.00', status: 'Shipped', time: '09:20 AM' },
  ];

  const statusBreakdown = [
    { label: 'Shipped', value: '1,120', note: '62% of daily volume' },
    { label: 'Processing', value: '540', note: 'Batching pick-pack' },
    { label: 'Packaging', value: '160', note: 'Awaiting handoff' },
    { label: 'Returns', value: '38', note: 'Need inspection' },
  ];

  const statusTone = (status) => {
    if (status === 'Shipped') return 'bg-green-50 text-green-700 border-green-200';
    if (status === 'Processing' || status === 'Packaging') return 'bg-amber-50 text-amber-700 border-amber-200';
    return 'bg-gray-50 text-gray-700 border-gray-200';
  };

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {summary.map((card, idx) => (
          <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 border border-gray-300 inline-flex items-center justify-center">
                <card.icon className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-[11px] text-gray-500">{card.change}</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">{card.label}</p>
            <div className="text-2xl font-bold mt-1">{card.value}</div>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-semibold text-gray-800">Recent orders</p>
            <p className="text-xs text-gray-500">Latest transactions across fulfillment states.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1">
              {['All', 'Shipped', 'Processing', 'Returns'].map((tag) => (
                <span key={tag} className="text-xs text-gray-600 px-2 py-1 rounded-md hover:bg-white">
                  {tag}
                </span>
              ))}
            </div>
            <button className="text-xs text-gray-600 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 hover:border-gray-300">
              Export CSV
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <div className="grid grid-cols-5 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-600">
            <span>Order ID</span>
            <span className="col-span-2">Product</span>
            <span>Price</span>
            <span className="text-right">Status</span>
          </div>
          <div>
            {orders.map((row, idx) => (
              <div key={idx} className="grid grid-cols-5 items-center px-4 py-3 border-t border-gray-100 text-sm text-gray-700">
                <span className="font-medium text-gray-800">{row.id}</span>
                <span className="col-span-2">{row.name}</span>
                <span>{row.price}</span>
                <div className="flex justify-end">
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${statusTone(row.status)}`}>{row.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statusBreakdown.map((item, idx) => (
          <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-gray-800">{item.label}</p>
            <div className="text-2xl font-bold mt-1 text-gray-800">{item.value}</div>
            <p className="text-xs text-gray-500 mt-1">{item.note}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const PaymentsPage = () => {
  const stats = [
    { label: "Processed today", value: "$1.2M", change: "+8.4% vs yesterday", icon: CreditCard },
    { label: "Success rate", value: "98.6%", change: "+0.4% vs last week", icon: ShieldCheck },
    { label: "Settlement pending", value: "$320K", change: "T+1 review", icon: Wallet },
    { label: "Chargebacks", value: "12", change: "0.4% of txns", icon: FileWarning },
  ];

  const gateways = [
    { name: "Stripe", status: "Active", uptime: "99.98%", volume: "$820K" },
    { name: "PayPal", status: "Degraded", uptime: "99.2%", volume: "$260K" },
    { name: "Local bank", status: "Active", uptime: "99.9%", volume: "$140K" },
  ];

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((card, idx) => (
          <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 border border-gray-300 inline-flex items-center justify-center">
                <card.icon className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-[11px] text-gray-500">{card.change}</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">{card.label}</p>
            <div className="text-2xl font-bold mt-1">{card.value}</div>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-semibold text-gray-800">Cong thanh toan</p>
            <p className="text-xs text-gray-500">Trang thai, uptime va san luong theo cong.</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <div className="grid grid-cols-4 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-600">
            <span>Cong</span>
            <span>Trang thai</span>
            <span>Uptime</span>
            <span className="text-right">Volume hom nay</span>
          </div>
          {gateways.map((g, idx) => (
            <div key={idx} className="grid grid-cols-4 items-center px-4 py-3 border-t border-gray-100 text-sm text-gray-700">
              <span className="font-medium text-gray-800">{g.name}</span>
              <span className="text-xs px-2 py-1 rounded-full border border-gray-200 bg-gray-50">{g.status}</span>
              <span>{g.uptime}</span>
              <span className="text-right">{g.volume}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const SettingsPage = () => {
  const basics = [
    { title: 'Branding', desc: 'Logo, colors, domain, and header text.', icon: Users },
    { title: 'Localization', desc: 'Timezone, currency, and locale defaults.', icon: Globe2 },
    { title: 'Notifications', desc: 'Email, push, webhook templates and rules.', icon: Bell },
  ];

  const security = [
    { title: 'Roles & permissions', desc: 'Granular scopes for ops, finance, support.', icon: ShieldCheck },
    { title: 'Authentication', desc: 'MFA, SSO providers, session policies.', icon: CreditCard },
    { title: 'Audit log', desc: 'Track admin actions and sensitive changes.', icon: ClipboardList },
  ];

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {basics.map((item, idx) => (
          <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 inline-flex items-center justify-center">
              <item.icon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {security.map((item, idx) => (
          <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 inline-flex items-center justify-center">
              <item.icon className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 inline-flex items-center justify-center">
            <LogOut className="w-5 h-5 text-gray-600" />
          </div>
          <div className="space-y-2 flex-1">
            <p className="text-sm font-semibold text-gray-800">Sign out</p>
            <p className="text-xs text-gray-600">End this admin session safely.</p>
            <button className="text-xs px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors">
              Sign out now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const NotificationsPage = () => {
  const alerts = [
    { title: 'Payment gateway degraded', detail: 'PayPal latency elevated', time: '5m ago' },
    { title: 'High return rate', detail: 'Shoes category 3.2% > threshold', time: '18m ago' },
    { title: 'New admin invite', detail: 'Sent to ops@company.com', time: '25m ago' },
  ];

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
        {alerts.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-500">{item.detail}</p>
            </div>
            <span className="text-xs text-gray-400">{item.time}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

const PromosPage = () => {
  const promos = [
    { name: 'Flash sale', detail: '10% off sitewide', status: 'Active' },
    { name: 'New user coupon', detail: '$5 off first order', status: 'Scheduled' },
    { name: 'Seller fee waiver', detail: '0% commission 7 days', status: 'Draft' },
  ];

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
        {promos.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.name}</p>
              <p className="text-xs text-gray-500">{item.detail}</p>
            </div>
            <span className="text-xs text-gray-500">{item.status}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

const ReportsPage = () => {
  const reports = [
    { title: 'Revenue by month', period: 'Jan - Feb', size: '1.2 MB' },
    { title: 'Fulfillment performance', period: 'This week', size: '860 KB' },
    { title: 'Refunds / disputes', period: '30 days', size: '640 KB' },
  ];

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
        {reports.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-500">{item.period}</p>
            </div>
            <span className="text-xs text-gray-500">{item.size}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

const CmsPage = () => {
  const blocks = [
    { title: 'Home banner', desc: 'Hero image, CTA, and copy' },
    { title: 'Landing pages', desc: 'Campaign pages and SEO meta' },
    { title: 'Announcements', desc: 'System messages and alerts' },
  ];

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
        {blocks.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <p className="text-sm font-semibold text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const ConfigPage = () => {
  const items = [
    { title: 'Locale', desc: 'Timezone, currency, number/date format' },
    { title: 'Integrations', desc: 'Payments, shipping, CRM, analytics' },
    { title: 'Feature flags', desc: 'Rollout and beta toggles' },
  ];

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <p className="text-sm font-semibold text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const SecurityPage = () => {
  const items = [
    { title: 'MFA & SSO', desc: 'Enforce MFA, configure SSO providers' },
    { title: 'Session policy', desc: 'Session lifetime, device limits' },
    { title: 'Audit & compliance', desc: 'Access logs and data handling' },
  ];

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <p className="text-sm font-semibold text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const SupportPage = () => {
  const tickets = [
    { title: 'P1 - Payment fail spike', owner: 'Ops', age: '8m' },
    { title: 'P2 - Order refund delay', owner: 'Finance', age: '22m' },
    { title: 'P2 - Seller onboarding help', owner: 'Support', age: '35m' },
  ];

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm space-y-3">
        {tickets.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-500">Owner: {item.owner}</p>
            </div>
            <span className="text-xs text-gray-400">{item.age}</span>
          </div>
        ))}
      </section>
    </div>
  );
};
const App = () => {
  const [activePage, setActivePage] = useState('overview');

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <OverviewPage />;
      case 'users':
        return <UsersRolesPage />;
      case 'sellers':
        return <SellersShopsPage />;
      case 'orders':
        return <OrdersPage />;
      case 'payments':
        return <PaymentsPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'promos':
        return <PromosPage />;
      case 'reports':
        return <ReportsPage />;
      case 'cms':
        return <CmsPage />;
      case 'config':
        return <ConfigPage />;
      case 'security':
        return <SecurityPage />;
      case 'support':
        return <SupportPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar active={activePage} onSelect={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto px-6 py-8 lg:px-12 bg-gray-100">
          <div className="w-full mx-auto space-y-8">{renderPage()}</div>
        </main>
      </div>
    </div>
  );
};

export default App;


