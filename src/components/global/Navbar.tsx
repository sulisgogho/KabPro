"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, Menu, X, ChevronDown, ExternalLink,
  MessageSquareWarning, FileCheck, Users, Landmark,
  Activity, Map, TreePine, Briefcase, GraduationCap, Wheat, Library,
  Target, Network, UserCircle, Building, MapPin, Trophy, Newspaper, Video, FileText
} from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  type DropdownItem = {
    name: string;
    href: string;
    icon?: React.ReactNode;
    external?: boolean;
    desc?: string;
  };

  type NavLink = {
    name: string;
    href?: string;
    dropdown?: DropdownItem[];
    external?: boolean;
  };

  const navLinks: NavLink[] = [
    { name: 'Beranda', href: '/' },
    { 
      name: 'Layanan', 
      dropdown: [
        { name: 'Kanal Aduan', href: '/pengaduan', icon: <MessageSquareWarning className="w-5 h-5 text-slate-600" /> },
        { name: 'Perizinan', href: '/layanan/perizinan', icon: <FileCheck className="w-5 h-5 text-slate-600" /> },
        { name: 'Kependudukan', href: '/layanan/kependudukan', icon: <Users className="w-5 h-5 text-slate-600" /> },
        { name: 'Pajak', href: 'https://bppkad.probolinggokab.go.id/layanan-bppkad/', external: true, icon: <Landmark className="w-5 h-5 text-slate-600" /> },
      ]
    },
    { 
      name: 'Informasi', 
      dropdown: [
        { name: 'Kesehatan', href: '/informasi/kesehatan', icon: <Activity className="w-5 h-5 text-slate-600" /> },
        { name: 'Pariwisata', href: '/informasi/pariwisata', icon: <Map className="w-5 h-5 text-slate-600" /> },
        { 
          name: 'Taman', 
          href: '/informasi/taman',
          icon: <TreePine className="w-5 h-5 text-slate-600" />
        },
        { name: 'Ketenagakerjaan', href: 'https://disnaker.probolinggokab.go.id/', external: true, icon: <Briefcase className="w-5 h-5 text-slate-600" /> },
        { name: 'Pendidikan', href: '/informasi/pendidikan', icon: <GraduationCap className="w-5 h-5 text-slate-600" /> },
        { name: 'Aman Pangan', href: 'https://dishanpanprobolinggokab.org/', external: true, icon: <Wheat className="w-5 h-5 text-slate-600" /> },
        { name: 'Kebudayaan', href: '/informasi/kebudayaan', icon: <Library className="w-5 h-5 text-slate-600" /> },
      ]
    },
    { 
      name: 'Publikasi', 
      dropdown: [
        { name: 'Berita', href: '/publikasi/berita', icon: <Newspaper className="w-5 h-5 text-slate-600" /> },
        { name: 'Video', href: '/publikasi/video', icon: <Video className="w-5 h-5 text-slate-600" /> },
        { name: 'Dokumen', href: '/publikasi/dokumen', icon: <FileText className="w-5 h-5 text-slate-600" /> },
      ]
    },
    { name: 'Dashboard', href: '/dashboard' },
    { 
      name: 'Pemerintah Kabupaten', 
      dropdown: [
        { name: 'Visi Misi & Kegiatan Strategis', href: '/pemerintah/visi-misi', icon: <Target className="w-5 h-5 text-slate-600" /> },
        { name: 'Struktur Organisasi', href: '/pemerintah/struktur-organisasi', icon: <Network className="w-5 h-5 text-slate-600" /> },
        { name: 'Bupati', href: '/pemerintah/bupati', icon: <UserCircle className="w-5 h-5 text-slate-600" /> },
        { name: 'Perangkat Daerah', href: '/pemerintah/perangkat-daerah', icon: <Building className="w-5 h-5 text-slate-600" /> },
        { name: 'Kecamatan', href: '/pemerintah/kecamatan', icon: <MapPin className="w-5 h-5 text-slate-600" /> },
        { name: 'Peta dan Batas Wilayah', href: '/pemerintah/peta-batas-wilayah', icon: <Map className="w-5 h-5 text-slate-600" /> },
        { name: 'Prestasi', href: '/pemerintah/prestasi', icon: <Trophy className="w-5 h-5 text-slate-600" /> },
      ]
    },
    { name: 'PPID', href: 'https://ppid.probolinggokab.go.id/ppid-pelaksana', external: true },
  ];

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) setOpenDropdown(null);
    else setOpenDropdown(name);
  };

  return (
    <div className="absolute top-0 w-full z-50 px-4 pt-6 flex justify-center">
      <header className="bg-white/95 backdrop-blur-xl shadow-lg border border-white/40 rounded-[2rem] px-6 py-3 w-full max-w-[1440px] flex justify-between items-center transition-all duration-300 relative">
        {/* Logo Brand */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group z-10 shrink-0">
          <div className="w-11 h-12 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform drop-shadow-sm">
            <img src="/image/Logo-Kabpro.svg" alt="Logo Kabupaten Probolinggo" className="w-full h-full object-contain" />
          </div>
          <div className="text-sm sm:text-base font-extrabold text-slate-800 leading-tight tracking-tight">
            Pemerintah Kabupaten<br />
            <span className="text-blue-700">Probolinggo</span>
          </div>
        </Link>

        {/* Navigasi Utama (Desktop) */}
        <nav className="hidden xl:flex items-center gap-6 text-[14px] font-bold text-slate-600 tracking-wide static">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group/navItem">
                  <button className="flex items-center gap-1 hover:text-blue-700 transition-colors py-4">
                    <span className={`relative ${isActive ? 'text-blue-700 after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-700 after:rounded-full' : ''}`}>
                      {link.name}
                    </span>
                  </button>
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/navItem:opacity-100 group-hover/navItem:visible transition-all duration-300 w-max max-w-[1000px] z-50">
                    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 flex flex-col gap-4">
                      <div className={`grid gap-x-8 gap-y-6 ${link.dropdown.length > 4 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                        {link.dropdown.map((sublink) => (
                          <Link 
                            key={sublink.name} 
                            href={sublink.href}
                            target={sublink.external ? "_blank" : "_self"}
                            className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors min-w-[240px] group/item"
                          >
                            <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center group-hover/item:bg-blue-50 group-hover/item:text-blue-700 transition-colors">
                              {sublink.icon}
                            </div>
                            <div className="flex flex-col pt-1">
                              <span className="font-bold text-slate-800 text-[15px] group-hover/item:text-blue-700 flex items-center gap-1 transition-colors">
                                {sublink.name}
                                {sublink.external && <ExternalLink className="w-3 h-3 text-slate-400" />}
                              </span>
                              {sublink.desc && (
                                <span className="text-[12px] text-slate-500 mt-1 font-medium leading-relaxed max-w-[200px]">
                                  {sublink.desc}
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href || '#'}
                target={link.external ? "_blank" : "_self"}
                className={`relative transition-colors py-4 flex items-center gap-1 hover:text-blue-700`}
              >
                <span className={`relative ${isActive ? 'text-blue-700 after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-700 after:rounded-full' : ''}`}>
                  {link.name}
                </span>
                {link.external && <ExternalLink className="w-3 h-3 text-slate-400" />}
              </Link>
            );
          })}
        </nav>

        {/* Pencarian & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center bg-slate-100/80 hover:bg-slate-100 transition-colors rounded-full px-4 py-2 border border-slate-200/50">
            <Search className="w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Cari..."
              className="bg-transparent outline-none px-2 w-28 xl:w-32 focus:w-48 transition-all duration-300 text-[14px] text-slate-700 placeholder-slate-400 font-medium"
            />
          </div>

          <button
            className="xl:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 mx-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-2 xl:hidden max-h-[80vh] overflow-y-auto z-50">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button 
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full flex items-center justify-between p-3 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === link.name && (
                        <div className="pl-4 pr-2 py-2 flex flex-col gap-2 border-l-2 border-slate-100 ml-4 mb-2">
                          {link.dropdown.map((sublink) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              target={sublink.external ? "_blank" : "_self"}
                              className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3"
                              onClick={() => !sublink.external && setIsMobileMenuOpen(false)}
                            >
                              <div className="w-10 h-10 shrink-0 rounded-lg bg-slate-100 flex items-center justify-center">
                                {React.cloneElement(sublink.icon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4 text-slate-600' })}
                              </div>
                              <div className="flex flex-col pt-0.5">
                                <span className="font-bold text-slate-700 text-[14px] flex items-center gap-1">
                                  {sublink.name}
                                  {sublink.external && <ExternalLink className="w-3 h-3 text-slate-400" />}
                                </span>
                                {sublink.desc && (
                                  <span className="text-[11px] text-slate-500 mt-0.5 font-medium">{sublink.desc}</span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                      <Link
                      href={link.href || '#'}
                      target={link.external ? "_blank" : "_self"}
                      className={`p-3 rounded-xl font-bold flex items-center justify-between ${
                        pathname === link.href ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                      onClick={() => !link.external && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      {link.external && <ExternalLink className="w-4 h-4 text-slate-400" />}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 flex items-center bg-slate-100 rounded-xl px-4 py-3 border border-slate-200">
              <Search className="w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Cari..."
                className="bg-transparent outline-none px-3 w-full text-base text-slate-700 font-medium"
              />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
