import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import {
  Activity,
  Ban,
  ClipboardList,
  CreditCard,
  ShieldCheck,
  ShoppingBag,
  UserCog,
  Users,
} from 'lucide-react';

const OverviewPage = () => {
  const overviewCards = [
    { label: 'Total users', value: '2.3M', change: '+1.2K today', icon: Users, accent: 'from-gray-500/25 to-gray-500/0' },
    { label: 'Active sellers', value: '18,420', change: '+128 new', icon: ShoppingBag, accent: 'from-gray-500/25 to-gray-500/0' },
    { label: 'Orders (24h)', value: '182K', change: 'up 8.4% WoW', icon: ClipboardList, accent: 'from-gray-500/25 to-gray-500/0' },
    { label: 'Payments processed', value: '$1.2M', change: '98.6% success', icon: CreditCard, accent: 'from-gray-500/25 to-gray-500/0' },
  ];

  const healthMeters = [
    { label: 'Live version', value: '3.12.4', detail: 'Order + Payment', color: 'text-gray-200' },
    { label: 'Cluster status', value: '5 regions', detail: 'SG / HN / Tokyo', color: 'text-gray-200' },
    { label: 'Open tickets', value: '19', detail: '5 P1, 14 P2', color: 'text-gray-200' },
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
      <section className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6 shadow-xl shadow-gray-950/30">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {healthMeters.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-800 bg-gray-900/80 p-4 shadow-inner shadow-gray-950/30"
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
            className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 shadow-lg shadow-gray-950/30"
          >
            <div className="flex items-start justify-between">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.accent} border border-gray-800/70 inline-flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-gray-100" />
              </div>
              <span className="text-[11px] text-gray-300">{card.change}</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">{card.label}</p>
            <div className="text-2xl font-bold mt-1">{card.value}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-4">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-gray-200" />
            <p className="text-sm font-semibold">System signals</p>
          </div>
          <div className="space-y-3">
            {systemSignals.map((signal, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/70 px-4 py-3">
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

        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gray-200" />
            <p className="text-sm font-semibold">Schedules & priorities</p>
          </div>
          <div className="space-y-3">
            {schedules.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3">
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
    { label: 'Total users', value: '2.3M', change: '+1.2K today', icon: Users, tone: 'from-gray-500/15 to-gray-500/0', border: 'border-gray-500/30' },
    { label: 'Active last 24h', value: '892K', change: '+4.2% WoW', icon: Activity, tone: 'from-gray-500/15 to-gray-500/0', border: 'border-gray-500/30' },
    { label: 'Admin accounts', value: '312', change: '8 pending invites', icon: UserCog, tone: 'from-gray-500/15 to-gray-500/0', border: 'border-gray-500/30' },
    { label: 'Suspended', value: '1,240', change: '72 reviewed today', icon: Ban, tone: 'from-gray-500/15 to-gray-500/0', border: 'border-gray-500/30' },
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
      <div>
        <p className="text-xs tracking-[0.32em] text-gray-300/80 uppercase">Users & Roles</p>
        <h2 className="text-2xl font-bold mt-1">Access oversight</h2>
        <p className="text-sm text-gray-400">Monitor account health, permissions, and approvals.</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {userStats.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 shadow-lg shadow-gray-950/30"
          >
            <div className="flex items-start justify-between">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.tone} border ${card.border} inline-flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-gray-100" />
              </div>
              <span className="text-[11px] text-gray-300">{card.change}</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">{card.label}</p>
            <div className="text-2xl font-bold mt-1">{card.value}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-4">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gray-200" />
            <p className="text-sm font-semibold">Role breakdown</p>
          </div>
          <div className="space-y-3">
            {roleBreakdown.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/70 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{item.role}</p>
                  <p className="text-xs text-gray-500">{item.trend}</p>
                </div>
                <span className="text-lg font-semibold">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30 space-y-3">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-gray-200" />
            <p className="text-sm font-semibold">Pending approvals</p>
          </div>
          <div className="space-y-3">
            {approvals.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3">
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
        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30 space-y-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-gray-200" />
            <p className="text-sm font-semibold">Access reviews</p>
          </div>
          <div className="space-y-3">
            {accessReviews.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.window} - Owner: {item.owner}</p>
                </div>
                <span className="text-xs text-gray-400">Next: {item.next}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30 space-y-4">
          <p className="text-sm font-semibold">Ops quick actions</p>
          <div className="space-y-2.5">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-800 bg-gray-900/60 text-left hover:border-gray-500/60 hover:bg-gray-800/70 transition-colors"
              >
                <action.icon className="w-4 h-4 text-gray-200" />
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
    { label: 'Total shops', value: '38,210', change: '+420 this week', icon: ShoppingBag, tone: 'from-gray-500/15 to-gray-500/0', border: 'border-gray-500/30' },
    { label: 'Pending review', value: '312', change: '64 P1 priority', icon: ClipboardList, tone: 'from-gray-500/15 to-gray-500/0', border: 'border-gray-500/30' },
    { label: 'KYC verified', value: '34,118', change: '92% verified', icon: ShieldCheck, tone: 'from-gray-500/15 to-gray-500/0', border: 'border-gray-500/30' },
    { label: 'Suspended', value: '1,204', change: '72 reviewed today', icon: Ban, tone: 'from-gray-500/15 to-gray-500/0', border: 'border-gray-500/30' },
  ];

  const kycQueue = [
    { name: 'Shop Alpha', status: 'Waiting docs', age: '12m', owner: 'Ops' },
    { name: 'Tokyo Mart', status: 'Manual review', age: '22m', owner: 'Risk' },
    { name: 'Eco Store', status: 'Flagged address', age: '35m', owner: 'Ops' },
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
      <div>
        <p className="text-xs tracking-[0.32em] text-gray-300/80 uppercase">Sellers & Shops</p>
        <h2 className="text-2xl font-bold mt-1">Marketplace supply health</h2>
        <p className="text-sm text-gray-400">Track onboarding, KYC, and operational performance for shops.</p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {sellerStats.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5 shadow-lg shadow-gray-950/30"
          >
            <div className="flex items-start justify-between">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.tone} border ${card.border} inline-flex items-center justify-center`}>
                <card.icon className="w-5 h-5 text-gray-100" />
              </div>
              <span className="text-[11px] text-gray-300">{card.change}</span>
            </div>
            <p className="text-sm text-gray-400 mt-4">{card.label}</p>
            <div className="text-2xl font-bold mt-1">{card.value}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-4">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gray-200" />
            <p className="text-sm font-semibold">KYC / approvals</p>
          </div>
          <div className="space-y-3">
            {kycQueue.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-gray-800 bg-gray-900/70 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.status}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">{item.age}</p>
                  <p className="text-[11px] text-gray-500">Owner: {item.owner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30 space-y-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-gray-200" />
            <p className="text-sm font-semibold">Ops signals</p>
          </div>
          <div className="space-y-3">
            {opsSignals.map((signal, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3">
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
        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30 space-y-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-gray-200" />
            <p className="text-sm font-semibold">Regional performance</p>
          </div>
          <div className="space-y-2">
            {regionPerformance.map((row, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/60 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{row.region}</p>
                  <p className="text-xs text-gray-500">{row.growth}</p>
                </div>
                <span className="text-lg font-semibold">{row.orders}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 shadow-lg shadow-gray-950/30 space-y-4">
          <p className="text-sm font-semibold">Seller quick actions</p>
          <div className="space-y-2.5">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-800 bg-gray-900/60 text-left hover:border-gray-500/60 hover:bg-gray-800/70 transition-colors"
              >
                <action.icon className="w-4 h-4 text-gray-200" />
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

const PlaceholderPage = ({ title }) => (
  <div className="rounded-2xl border border-dashed border-gray-800 bg-gray-900/50 p-10 text-center text-gray-400">
    <p className="text-sm">"{title}" page will be designed next.</p>
  </div>
);

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
        return <PlaceholderPage title="Orders" />;
      case 'payments':
        return <PlaceholderPage title="Payments" />;
      case 'reports':
        return <PlaceholderPage title="Reports" />;
      case 'settings':
        return <PlaceholderPage title="Settings" />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-50">
      <Sidebar active={activePage} onSelect={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto px-6 py-8 lg:px-10 bg-gray-900">
          <div className="w-full max-w-7xl mx-auto space-y-8">{renderPage()}</div>
        </main>
      </div>
    </div>
  );
};

export default App;
