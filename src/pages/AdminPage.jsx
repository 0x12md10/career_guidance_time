import { useState, useEffect, useCallback } from 'react';
import {
  LogIn, LogOut, Download, RefreshCw, Search,
  Users, CheckCircle2, AlertCircle, Loader2, ChevronUp, ChevronDown,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const COLUMNS = [
  { key: 'createdAt', label: 'Registered At' },
  { key: 'name', label: 'Name' },
  { key: 'phone', label: 'Phone' },
  { key: 'email', label: 'Email' },
  { key: 'standard', label: 'Grade' },
  { key: 'school', label: 'School' },
  { key: 'city', label: 'City' },
  { key: 'parentName', label: 'Parent Name' },
  { key: 'parentPhone', label: 'Parent Phone' },
  { key: 'howHeard', label: 'Source' },
];

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

function SortIcon({ col, sortKey, sortDir }) {
  if (sortKey !== col) return <ChevronUp size={12} className="text-white/20" />;
  return sortDir === 'asc'
    ? <ChevronUp size={12} className="text-brand-400" />
    : <ChevronDown size={12} className="text-brand-400" />;
}

// ─── Login screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/admin/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || !data.token) throw new Error(data.message || 'Invalid password');
      onLogin(data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-xl shadow-brand-500/20">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
        </div>
        <h1 className="text-white text-2xl font-bold text-center mb-1">Admin Portal</h1>
        <p className="text-white/40 text-sm text-center mb-8">SIGARAM THODU — T.I.M.E Tirunelveli</p>

        <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-6">
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-4">
              <AlertCircle size={14} className="text-red-400 shrink-0" />
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}
          <label className="block text-white/60 text-xs mb-1.5 font-medium">Admin Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full bg-dark-700 border border-white/10 focus:border-brand-500 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors mb-4"
            autoFocus
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 disabled:opacity-60 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
            {loading ? 'Verifying…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Main admin dashboard ──────────────────────────────────────────────────────
function Dashboard({ token, onLogout }) {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState('createdAt');
  const [sortDir, setSortDir] = useState('desc');
  const [exporting, setExporting] = useState(false);

  const PAGE_SIZE = 25;

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({
        page,
        limit: PAGE_SIZE,
        search,
        sortKey,
        sortDir,
      });
      const res = await fetch(`${API_BASE}/admin/registrations?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { onLogout(); return; }
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setRows(data.registrations);
      setTotal(data.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token, page, search, sortKey, sortDir, onLogout]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Reset to page 1 when search changes
  useEffect(() => { setPage(1); }, [search]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
    setPage(1);
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      const res = await fetch(`${API_BASE}/admin/export?search=${encodeURIComponent(search)}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { onLogout(); return; }
      if (!res.ok) throw new Error('Export failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sigaram_registrations_${new Date().toISOString().slice(0, 10)}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setExporting(false);
    }
  };

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Header */}
      <header className="bg-dark-800/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-xs">T</div>
            <span className="text-white font-semibold text-sm">Admin — SIGARAM THODU</span>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors"
          >
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats bar */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-xl px-4 py-2.5">
            <Users size={16} className="text-brand-400" />
            <span className="text-white font-semibold">{total.toLocaleString()}</span>
            <span className="text-white/50 text-sm">total registrations</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search by name, phone, email, school, city…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-dark-700 border border-white/10 focus:border-brand-500 text-white placeholder-white/30 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none transition-colors"
            />
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 text-sm px-4 py-2.5 rounded-xl transition-colors"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="flex items-center gap-2 bg-green-600/80 hover:bg-green-500/80 disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            {exporting ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
            {exporting ? 'Exporting…' : 'Download Excel'}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-4">
            <AlertCircle size={14} className="text-red-400 shrink-0" />
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {/* Table */}
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-3 py-3 text-left text-white/40 text-xs font-medium w-8">#</th>
                  {COLUMNS.map((col) => (
                    <th
                      key={col.key}
                      className="px-3 py-3 text-left text-white/40 text-xs font-medium whitespace-nowrap cursor-pointer hover:text-white/70 transition-colors select-none"
                      onClick={() => handleSort(col.key)}
                    >
                      <span className="flex items-center gap-1">
                        {col.label}
                        <SortIcon col={col.key} sortKey={sortKey} sortDir={sortDir} />
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={COLUMNS.length + 1} className="px-4 py-12 text-center text-white/30">
                      <Loader2 size={20} className="animate-spin mx-auto mb-2" />
                      Loading…
                    </td>
                  </tr>
                )}
                {!loading && rows.length === 0 && (
                  <tr>
                    <td colSpan={COLUMNS.length + 1} className="px-4 py-12 text-center text-white/30">
                      No registrations found.
                    </td>
                  </tr>
                )}
                {!loading && rows.map((row, idx) => (
                  <tr
                    key={row._id}
                    className="border-b border-white/5 hover:bg-white/3 transition-colors"
                  >
                    <td className="px-3 py-3 text-white/30 text-xs">
                      {(page - 1) * PAGE_SIZE + idx + 1}
                    </td>
                    <td className="px-3 py-3 text-white/60 text-xs whitespace-nowrap">{formatDate(row.createdAt)}</td>
                    <td className="px-3 py-3 text-white font-medium whitespace-nowrap">{row.name}</td>
                    <td className="px-3 py-3 text-white/70 whitespace-nowrap font-mono text-xs">{row.phone}</td>
                    <td className="px-3 py-3 text-white/60 whitespace-nowrap text-xs">{row.email}</td>
                    <td className="px-3 py-3 text-white/70 text-center">
                      <span className="bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full text-xs">{row.standard}</span>
                    </td>
                    <td className="px-3 py-3 text-white/60 max-w-[180px] truncate">{row.school}</td>
                    <td className="px-3 py-3 text-white/60 whitespace-nowrap">{row.city}</td>
                    <td className="px-3 py-3 text-white/50">{row.parentName || '—'}</td>
                    <td className="px-3 py-3 text-white/50 font-mono text-xs">{row.parentPhone || '—'}</td>
                    <td className="px-3 py-3 text-white/40 text-xs whitespace-nowrap">{row.howHeard || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
              <span className="text-white/40 text-xs">
                Page {page} of {totalPages} — {total} total
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 disabled:opacity-30 rounded-lg text-white/70 transition-colors"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 disabled:opacity-30 rounded-lg text-white/70 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Success hint */}
        {!loading && rows.length > 0 && (
          <p className="flex items-center gap-1.5 text-white/30 text-xs mt-3">
            <CheckCircle2 size={12} className="text-green-500/60" />
            Click any column header to sort. Use the search bar to filter.
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Root admin page (handles auth state) ─────────────────────────────────────
export default function AdminPage() {
  const [token, setToken] = useState(() => sessionStorage.getItem('admin_token'));

  const handleLogin = (t) => {
    sessionStorage.setItem('admin_token', t);
    setToken(t);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    setToken(null);
  };

  if (!token) return <LoginScreen onLogin={handleLogin} />;
  return <Dashboard token={token} onLogout={handleLogout} />;
}
