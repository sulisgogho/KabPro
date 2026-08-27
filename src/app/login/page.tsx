'use client';

import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Terjadi kesalahan');
      }

      // Berhasil login, arahkan
      router.push('/admin');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex w-full">
      
      {/* Left Column (Image/Branding) */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 flex-col justify-between p-12 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] border-[60px] border-slate-800/50 rounded-full pointer-events-none blur-3xl" />
        
        <div className="relative z-10">
          <Link href="/" className="inline-block bg-white p-3 rounded-2xl shadow-lg">
            <img src="/image/Logo-Kabpro.svg" alt="Kabupaten Probolinggo" className="w-16 h-16 object-contain" />
          </Link>
        </div>
        
        <div className="relative z-10 mt-auto text-white max-w-xl">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Portal Administrasi<br />
            <span className="text-blue-400">Pemerintah Kabupaten Probolinggo</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Sistem terpadu untuk mengelola informasi publik, layanan masyarakat, berita, dokumen, dan data wisata secara efektif dan transparan.
          </p>
        </div>
      </div>

      {/* Right Column (Login Form) */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-12 lg:p-24 relative">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Selamat Datang</h2>
            <p className="text-slate-500">Silakan masuk menggunakan kredensial admin Anda.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 mt-8">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-200">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Username</label>
              <div className="relative flex items-center">
                <User className="absolute left-4 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username admin..." 
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none bg-slate-50/50 transition-all font-medium text-slate-700" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Lupa password?</a>
              </div>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 w-5 h-5 text-slate-400" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full border border-slate-200 rounded-2xl pl-12 pr-12 py-4 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none bg-slate-50/50 transition-all font-medium text-slate-700" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transition-all group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Memproses...' : 'Masuk ke Dashboard'} 
              {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
          
          <div className="text-center mt-12">
            <p className="text-sm text-slate-400 font-medium">
              &copy; {new Date().getFullYear()} Pemerintah Kabupaten Probolinggo.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
