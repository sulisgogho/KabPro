"use client";

import { useState } from "react";
import { ChevronDown, MapPin, GraduationCap, ExternalLink, BookOpen, Users, Briefcase, Search } from "lucide-react";
import Image from "next/image";

export default function PendidikanPage() {
  const [openLevel, setOpenLevel] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const educationLevels = [
    {
      id: 0,
      name: "Tingkat SD/Sederajat",
      schools: [
        {
          id: 101,
          name: "SDN Patokan 1 Kraksaan",
          address: "Jl. Panglima Sudirman, Patokan, Kraksaan, Kabupaten Probolinggo",
          url: "#",
          stats: { classes: 12, teachers: 15, staffs: 4 }
        },
        {
          id: 102,
          name: "SDN Sidomukti 1",
          address: "Jl. Raya Sidomukti, Kraksaan, Kabupaten Probolinggo",
          url: "#",
          stats: { classes: 18, teachers: 22, staffs: 5 }
        }
      ]
    },
    {
      id: 1,
      name: "Tingkat SMP/Sederajat",
      schools: [
        {
          id: 201,
          name: "SMP Negeri 1 Kraksaan",
          address: "Jl. Dr. Wahidin Sudirohusodo No.1, Kraksaan, Kabupaten Probolinggo",
          url: "#",
          stats: { classes: 24, teachers: 45, staffs: 10 }
        },
        {
          id: 202,
          name: "SMP Negeri 1 Paiton",
          address: "Jl. Raya Paiton, Sumberanyar, Paiton, Kabupaten Probolinggo",
          url: "#",
          stats: { classes: 21, teachers: 38, staffs: 8 }
        }
      ]
    },
    {
      id: 2,
      name: "Tingkat SMA/SMK/Sederajat",
      schools: [
        {
          id: 301,
          name: "SMA Negeri 1 Kraksaan",
          address: "Jl. Rengganis No.1, Kraksaan Wetan, Kraksaan, Kabupaten Probolinggo",
          url: "#",
          stats: { classes: 30, teachers: 55, staffs: 15 }
        },
        {
          id: 302,
          name: "SMK Negeri 1 Kraksaan",
          address: "Jl. Tenis No.2, Patokan, Kraksaan, Kabupaten Probolinggo",
          url: "#",
          stats: { classes: 42, teachers: 75, staffs: 20 }
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            Informasi Pendidikan
          </h1>
          <p className="text-lg text-slate-200">
            Daftar lembaga pendidikan dan sekolah unggulan di wilayah Kabupaten Probolinggo
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Fasilitas Pendidikan Daerah</h2>
          <p className="text-slate-600 max-w-3xl">
            Akses informasi sekolah-sekolah di berbagai tingkatan mulai dari Sekolah Dasar hingga Sekolah Menengah Atas di Kabupaten Probolinggo.
          </p>
        </div>

        <div className="mb-8 relative max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
            placeholder="Cari nama sekolah atau alamat..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-4">
          {educationLevels
            .map(level => {
              // Filter schools based on search query
              const filteredSchools = level.schools.filter(school => 
                school.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                school.address.toLowerCase().includes(searchQuery.toLowerCase())
              );
              return { ...level, schools: filteredSchools };
            })
            .filter(level => level.schools.length > 0) // Only show levels that have matching schools
            .map((level) => {
            const isOpen = openLevel === level.id || searchQuery.length > 0;

            return (
              <div 
                key={level.id} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-blue-200 shadow-sm' : 'border-slate-200'}`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenLevel(isOpen ? -1 : level.id)}
                  className={`w-full flex items-center justify-between p-6 rounded-2xl transition-colors ${
                    isOpen ? 'bg-blue-50/50' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {level.id + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{level.name}</h3>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'border-blue-300 text-blue-600 rotate-180' : 'border-slate-200 text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      {level.schools.map((school) => (
                        <div key={school.id} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 h-full">
                          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                            <GraduationCap className="w-6 h-6" />
                          </div>
                          
                          <div className="flex flex-col h-full flex-grow">
                            <h4 className="font-bold text-lg text-slate-900 mb-2">{school.name}</h4>
                            
                            <div className="flex items-start gap-2 text-sm text-slate-600 mb-4">
                              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                              <p>{school.address}</p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2 mb-6 mt-auto">
                              <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                                <BookOpen className="w-4 h-4 text-blue-500 mb-1" />
                                <span className="font-bold text-slate-900 text-sm">{school.stats.classes}</span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Kelas</span>
                              </div>
                              <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                                <Users className="w-4 h-4 text-blue-500 mb-1" />
                                <span className="font-bold text-slate-900 text-sm">{school.stats.teachers}</span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Guru</span>
                              </div>
                              <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 flex flex-col items-center justify-center text-center">
                                <Briefcase className="w-4 h-4 text-blue-500 mb-1" />
                                <span className="font-bold text-slate-900 text-sm">{school.stats.staffs}</span>
                                <span className="text-[10px] text-slate-500 uppercase tracking-wider">Tendik</span>
                              </div>
                            </div>

                            <a 
                              href={school.url}
                              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-colors w-full mt-auto"
                            >
                              Kunjungi Website
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
