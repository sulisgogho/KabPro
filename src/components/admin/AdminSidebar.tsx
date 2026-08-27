'use client';

import Link from 'next/link';
import { LayoutDashboard, Newspaper, Settings, Info, Briefcase, Landmark, Calendar, Image as ImageIcon, Video, MapPin, Trophy, FileText, TreePine, Map, LogOut } from 'lucide-react';
import { logout } from '@/actions/auth';

const navItems = [
  { title: "Dashboard", href: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
  { title: "Berita", href: "/admin/berita", icon: <Newspaper className="w-5 h-5" /> },
  { title: "Video", href: "/admin/video", icon: <Video className="w-5 h-5" /> },
  { title: "Dokumen", href: "/admin/dokumen", icon: <FileText className="w-5 h-5" /> },
  { title: "Agenda", href: "/admin/agenda", icon: <Calendar className="w-5 h-5" /> },
  { title: "Event", href: "/admin/event", icon: <Calendar className="w-5 h-5" /> },
  { title: "Pariwisata", href: "/admin/pariwisata", icon: <Map className="w-5 h-5" /> },
  { title: "Taman", href: "/admin/taman", icon: <TreePine className="w-5 h-5" /> },
  { title: "Layanan", href: "/admin/layanan", icon: <Briefcase className="w-5 h-5" /> },
  { title: "Pemerintah Kab", href: "/admin/pemerintah", icon: <Landmark className="w-5 h-5" /> },
  { title: "Kecamatan", href: "/admin/kecamatan", icon: <MapPin className="w-5 h-5" /> },
  { title: "Prestasi", href: "/admin/prestasi", icon: <Trophy className="w-5 h-5" /> },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col transition-all duration-300 shadow-xl z-20">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
          <img src="/image/Logo-Kabpro.svg" alt="Logo Kabpro" className="w-8 h-8 object-contain" />
        </div>
        <div className="font-bold text-lg leading-tight">Admin Portal<br/><span className="text-sm font-normal text-slate-400">Kab. Probolinggo</span></div>
      </div>
      <nav className="flex-1 py-4 px-4 flex flex-col gap-1 overflow-y-auto overflow-x-hidden slim-scroll">
        {navItems.map((item, idx) => (
          <Link key={idx} href={item.href} className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-colors text-slate-300 hover:text-white">
            {item.icon}
            <span className="font-medium text-sm">{item.title}</span>
          </Link>
        ))}
      </nav>
      <div className="p-6 border-t border-slate-800 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-slate-300 hover:text-white">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Ke Website Publik</span>
        </Link>
        <form action={logout}>
          <button 
            type="submit"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 transition-colors text-slate-300 hover:text-red-500"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout Admin</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
