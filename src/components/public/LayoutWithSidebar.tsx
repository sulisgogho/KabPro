import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  isActive?: boolean;
}

interface LayoutWithSidebarProps {
  title: string;
  breadcrumb: { name: string; href: string }[];
  sidebarTitle: string;
  sidebarItems: SidebarItem[];
  children: React.ReactNode;
  heroImage?: string;
}

export default function LayoutWithSidebar({
  title,
  breadcrumb,
  sidebarTitle,
  sidebarItems,
  children,
  heroImage = "https://images.unsplash.com/photo-1596422846543-74c6fc1e4ab0?w=1920&auto=format&fit=crop&q=80"
}: LayoutWithSidebarProps) {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Background */}
      <div 
        className="w-full h-[400px] bg-slate-800 relative"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      {/* Main Container Overlapping Hero */}
      <div className="max-w-[1440px] mx-auto px-6 -mt-32 relative z-10">
        
        {/* White Card Wrapper */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 min-h-[600px]">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium mb-12 border-b border-slate-100 pb-6">
            <Link href="/" className="text-orange-500 hover:underline">Beranda</Link>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="w-4 h-4 text-slate-400" />
                {index === breadcrumb.length - 1 ? (
                  <span className="text-slate-500">{item.name}</span>
                ) : (
                  <Link href={item.href} className="text-orange-500 hover:underline">{item.name}</Link>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Sidebar */}
            <div className="w-full lg:w-[280px] shrink-0">
              <h2 className="text-xl font-bold text-slate-800 mb-6">{sidebarTitle}</h2>
              <div className="flex flex-col relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-slate-100">
                {sidebarItems.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href}
                    className={`
                      py-4 pl-6 relative font-bold text-sm transition-colors
                      ${item.isActive 
                        ? 'text-orange-500 before:absolute before:left-[-1px] before:top-0 before:bottom-0 before:w-[4px] before:bg-orange-500 before:rounded-r-full' 
                        : 'text-slate-500 hover:text-slate-800'}
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-extrabold text-slate-800 mb-8">{title}</h1>
              <div>
                {children}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
