import React from 'react';
import Link from 'next/link';
import { LucideIcon, Plus } from 'lucide-react';

interface AdminPageHeaderProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  actionLabel?: string;
  actionHref?: string;
}

export function AdminPageHeader({
  title,
  description,
  Icon,
  actionLabel,
  actionHref,
}: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-slate-500">{description}</p>
        </div>
      </div>
      {actionLabel && actionHref && (
        <Link 
          href={actionHref}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-semibold shadow-sm hover:shadow-md transition-all w-fit"
        >
          <Plus className="w-5 h-5" /> {actionLabel}
        </Link>
      )}
    </div>
  );
}
