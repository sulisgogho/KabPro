'use client';

import { Bell, Search, User, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
      router.refresh(); // Force a full re-evaluation of the router cache
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 h-20 flex items-center justify-between px-8 z-10 sticky top-0 shadow-sm">
      <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-full w-96 transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:bg-white">
        <Search className="w-5 h-5 text-slate-400" />
        <input type="text" placeholder="Cari menu atau data..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700" />
      </div>
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
          <div className="text-right hidden md:block">
            <div className="text-sm font-bold text-slate-800">Admin</div>
            <div className="text-xs text-slate-500">Superuser</div>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer hover:scale-105 transition-transform">
            <User className="w-5 h-5" />
          </div>
          <button 
            onClick={handleLogout}
            className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2 text-sm font-bold"
          >
            <LogOut className="w-5 h-5" />
            <span className="hidden md:inline">Keluar</span>
          </button>
        </div>
      </div>
    </header>
  );
}
