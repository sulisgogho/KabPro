"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, BookOpen, Activity, Map, ArrowRight, Loader2, TrendingUp, DollarSign, 
  HeartPulse, Target, Store, Briefcase, AlertCircle, Wheat, ShoppingBag, Home, Signal
} from 'lucide-react';

export default function PublicDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const sidebarItems = [
    { name: 'Overview', icon: <Map className="w-4 h-4" /> },
    { name: 'Sosial & Kependudukan', icon: <Users className="w-4 h-4" /> },
    { name: 'Kesehatan', icon: <HeartPulse className="w-4 h-4" /> },
    { name: 'Pendidikan', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Ekonomi, PDRB & Inflasi', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Ketenagakerjaan', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Kemiskinan & Kesejahteraan', icon: <AlertCircle className="w-4 h-4" /> },
    { name: 'Pertanian & Peternakan', icon: <Wheat className="w-4 h-4" /> },
    { name: 'Industri & Pariwisata', icon: <ShoppingBag className="w-4 h-4" /> },
    { name: 'Infrastruktur & Lingkungan', icon: <Home className="w-4 h-4" /> },
    { name: 'Potensi Desa & Telekomunikasi', icon: <Signal className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/bps?t=' + new Date().getTime());
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Failed to fetch BPS data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center py-32 space-y-4">
          <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
          <p className="text-slate-500 font-medium">Memuat data 10 Sektor BPS Probolinggo...</p>
        </div>
      );
    }

    if (!data || !data.demografi || !data.kesehatan || !data.podes) {
      return (
        <div className="flex flex-col items-center justify-center py-32 space-y-4">
          <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
          <p className="text-slate-500 font-medium">Menyesuaikan sinkronisasi 10 sektor data terbaru...</p>
        </div>
      );
    }

    // --- RENDER HELPERS ---
    const renderHeader = (title: string, desc: string) => (
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-6 border-b border-slate-100">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">{title}</h2>
          <p className="text-slate-500 font-medium mt-2">{desc}</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm font-bold text-slate-400 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
          Data BPS Terbaru
        </div>
      </div>
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Card = ({ title, value, unit, subtitle, icon, highlightColor = 'blue' }: any) => (
      <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50 relative overflow-hidden group">
        <div className={`absolute top-0 right-0 w-24 h-24 bg-${highlightColor}-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg bg-${highlightColor}-100 text-${highlightColor}-600 flex items-center justify-center`}>
              {icon}
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</p>
          </div>
          <div className="flex items-baseline gap-1">
            <h3 className="text-3xl font-black text-slate-800">{value}</h3>
            {unit && <span className="text-sm font-bold text-slate-500">{unit}</span>}
          </div>
          {subtitle && <p className="text-xs font-medium text-slate-400 mt-2">{subtitle}</p>}
        </div>
      </div>
    );

    // --- SECTION RENDERERS ---
    
    // 1. Demografi
    const renderDemografi = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Users className="w-6 h-6 text-blue-600" /> Sektor Sosial & Kependudukan (Demografi)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Total Penduduk" value={data.demografi.jumlah_penduduk.toLocaleString('id-ID')} unit="jiwa" subtitle={`Pertumbuhan: ${data.demografi.laju_pertumbuhan}% per tahun`} icon={<Users />} highlightColor="blue" />
          <Card title="Kepadatan Penduduk" value={data.demografi.kepadatan} unit="jiwa/km²" icon={<Map />} highlightColor="amber" />
          <Card title="Rasio Ketergantungan" value={data.demografi.rasio_ketergantungan} unit="%" subtitle="Beban penduduk produktif" icon={<Activity />} highlightColor="rose" />
          
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50 sm:col-span-2 lg:col-span-3">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Komposisi Penduduk</h4>
            <div className="flex flex-wrap gap-8">
              <div><p className="text-xs text-slate-500 mb-1">Anak-anak</p><p className="font-bold text-lg">{data.demografi.komposisi.anak_anak.toLocaleString('id-ID')}</p></div>
              <div><p className="text-xs text-slate-500 mb-1">Usia Produktif</p><p className="font-bold text-lg text-emerald-600">{data.demografi.komposisi.usia_produktif.toLocaleString('id-ID')}</p></div>
              <div><p className="text-xs text-slate-500 mb-1">Lansia</p><p className="font-bold text-lg">{data.demografi.komposisi.lansia.toLocaleString('id-ID')}</p></div>
              <div><p className="text-xs text-slate-500 mb-1">Proyeksi 5 Tahun</p><p className="font-bold text-lg text-blue-600">{data.demografi.proyeksi_5_tahun.toLocaleString('id-ID')}</p></div>
            </div>
          </div>
        </div>
      </div>
    );

    // 2. Kesehatan
    const renderKesehatan = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><HeartPulse className="w-6 h-6 text-rose-500" /> Sektor Kesehatan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Angka Harapan Hidup" value={data.kesehatan.angka_harapan_hidup} unit="Tahun" icon={<HeartPulse />} highlightColor="rose" />
          <Card title="Prevalensi Stunting" value={data.kesehatan.prevalensi_stunting} unit="%" icon={<Activity />} highlightColor="amber" />
          <Card title="Angka Kematian Bayi" value={data.kesehatan.angka_kematian_bayi} unit="/1000" icon={<AlertCircle />} highlightColor="slate" />
          <Card title="Angka Kematian Ibu" value={data.kesehatan.angka_kematian_ibu} unit="/100.000" icon={<AlertCircle />} highlightColor="slate" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
           <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Fasilitas Kesehatan</h4>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2"><span className="text-slate-600">Rumah Sakit</span><span className="font-bold">{data.kesehatan.fasilitas.rumah_sakit}</span></div>
              <div className="flex justify-between border-b pb-2"><span className="text-slate-600">Puskesmas</span><span className="font-bold">{data.kesehatan.fasilitas.puskesmas}</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Apotek</span><span className="font-bold">{data.kesehatan.fasilitas.apotek}</span></div>
            </div>
          </div>
           <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Tenaga Kesehatan</h4>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2"><span className="text-slate-600">Dokter</span><span className="font-bold">{data.kesehatan.tenaga_kesehatan.dokter}</span></div>
              <div className="flex justify-between border-b pb-2"><span className="text-slate-600">Perawat</span><span className="font-bold">{data.kesehatan.tenaga_kesehatan.perawat}</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Bidan</span><span className="font-bold">{data.kesehatan.tenaga_kesehatan.bidan}</span></div>
            </div>
          </div>
        </div>
      </div>
    );

    // 3. Pendidikan
    const renderPendidikan = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-blue-500" /> Sektor Pendidikan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-white">
            <p className="text-xs font-black text-blue-200 uppercase tracking-wider mb-2">Indeks Pembangunan Manusia</p>
            <h3 className="text-4xl font-black mb-1">{data.pendidikan.ipm}</h3>
            <p className="text-xs text-blue-100">Nilai capaian pendidikan daerah</p>
          </div>
          <Card title="Angka Melek Huruf" value={data.pendidikan.angka_melek_huruf} unit="%" icon={<BookOpen />} highlightColor="emerald" />
          <Card title="Tingkat Putus Sekolah" value={data.pendidikan.tingkat_putus_sekolah} unit="%" icon={<AlertCircle />} highlightColor="rose" />
          
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50 sm:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Lama & Partisipasi Sekolah</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-slate-500">Rata-Rata Lama Sekolah</span><span className="font-bold">{data.pendidikan.rata_rata_lama_sekolah} Tahun</span></div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-blue-500 h-1.5 rounded-full w-[50%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-slate-500">Harapan Lama Sekolah</span><span className="font-bold">{data.pendidikan.harapan_lama_sekolah} Tahun</span></div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full w-[100%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-slate-500">Angka Partisipasi Sekolah</span><span className="font-bold">{data.pendidikan.angka_partisipasi_sekolah}%</span></div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Infrastruktur Sekolah</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2"><span className="text-slate-600">SD / Sederajat</span><span className="font-bold">{data.pendidikan.infrastruktur.sd}</span></div>
                  <div className="flex justify-between border-b pb-2"><span className="text-slate-600">SMP / Sederajat</span><span className="font-bold">{data.pendidikan.infrastruktur.smp}</span></div>
                  <div className="flex justify-between"><span className="text-slate-600">SMA / SMK</span><span className="font-bold">{data.pendidikan.infrastruktur.sma_smk}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    // 4. Ekonomi, PDRB & Inflasi
    const renderEkonomi = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><TrendingUp className="w-6 h-6 text-emerald-500" /> Sektor Ekonomi, PDRB & Inflasi</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Pertumbuhan Ekonomi" value={data.ekonomi.pertumbuhan_ekonomi} unit="%" icon={<TrendingUp />} highlightColor="emerald" />
          <Card title="PDRB Per Kapita" value={parseInt(data.ekonomi.pdrb_per_kapita).toLocaleString('id-ID')} unit="Rp" subtitle="Pendapatan rata-rata per tahun" icon={<DollarSign />} highlightColor="emerald" />
          <Card title="Laju Inflasi / IHK" value={data.ekonomi.inflasi} unit="%" icon={<Activity />} highlightColor="amber" />
          
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Nilai PDRB</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-500 mb-1">PDRB Atas Dasar Harga Berlaku</p>
                <p className="font-bold text-xl text-slate-800">{data.ekonomi.pdrb_adhb} Triliun</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">PDRB Atas Dasar Harga Konstan</p>
                <p className="font-bold text-xl text-slate-800">{data.ekonomi.pdrb_adhk} Triliun</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50 sm:col-span-2">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Distribusi PDRB Lapangan Usaha</h4>
            <div className="flex flex-wrap gap-6">
              <div className="bg-slate-50 p-4 rounded-xl flex-1 text-center"><p className="text-xs text-slate-500 mb-1">Pertanian</p><p className="font-bold text-lg text-emerald-600">{data.ekonomi.distribusi_lapangan_usaha.pertanian}%</p></div>
              <div className="bg-slate-50 p-4 rounded-xl flex-1 text-center"><p className="text-xs text-slate-500 mb-1">Industri</p><p className="font-bold text-lg text-blue-600">{data.ekonomi.distribusi_lapangan_usaha.industri}%</p></div>
              <div className="bg-slate-50 p-4 rounded-xl flex-1 text-center"><p className="text-xs text-slate-500 mb-1">Perdagangan</p><p className="font-bold text-lg text-amber-600">{data.ekonomi.distribusi_lapangan_usaha.perdagangan}%</p></div>
              <div className="bg-slate-50 p-4 rounded-xl flex-1 text-center"><p className="text-xs text-slate-500 mb-1">Lainnya</p><p className="font-bold text-lg text-slate-600">{data.ekonomi.distribusi_lapangan_usaha.lainnya}%</p></div>
            </div>
          </div>
        </div>
      </div>
    );

    // 5. Ketenagakerjaan
    const renderKetenagakerjaan = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Briefcase className="w-6 h-6 text-indigo-500" /> Sektor Ketenagakerjaan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Partisipasi Angkatan Kerja" value={data.ketenagakerjaan.tpak} unit="%" icon={<Users />} highlightColor="blue" />
          <Card title="Tingkat Pengangguran (TPT)" value={data.ketenagakerjaan.tpt} unit="%" icon={<AlertCircle />} highlightColor="rose" />
          <Card title="Rata-rata Upah Sebulan" value={parseInt(data.ketenagakerjaan.rata_rata_upah).toLocaleString('id-ID')} unit="Rp" icon={<DollarSign />} highlightColor="emerald" />
          
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50 sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
               <h4 className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Lapangan Pekerjaan Utama</h4>
               <h3 className="text-2xl font-black text-slate-800">{data.ketenagakerjaan.lapangan_pekerjaan_utama}</h3>
               <p className="text-sm text-slate-500 mt-1">Sektor yang paling banyak menyerap tenaga kerja lokal.</p>
            </div>
            <div className="flex-1 w-full bg-slate-50 p-4 rounded-xl border border-slate-100">
               <h4 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wide">Status Pekerjaan</h4>
               <div className="flex justify-between mb-1"><span className="text-sm font-bold text-indigo-600">Formal ({data.ketenagakerjaan.status_pekerjaan.formal}%)</span><span className="text-sm font-bold text-amber-500">Informal ({data.ketenagakerjaan.status_pekerjaan.informal}%)</span></div>
               <div className="w-full flex rounded-full h-2 overflow-hidden">
                 <div className="bg-indigo-600 h-2" style={{ width: `${data.ketenagakerjaan.status_pekerjaan.formal}%` }}></div>
                 <div className="bg-amber-500 h-2" style={{ width: `${data.ketenagakerjaan.status_pekerjaan.informal}%` }}></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );

    // 6. Kemiskinan
    const renderKemiskinan = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-red-500" /> Sektor Kemiskinan & Kesejahteraan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Penduduk Miskin" value={data.kemiskinan.persentase_miskin} unit="%" subtitle={`${data.kemiskinan.jumlah_miskin.toLocaleString('id-ID')} jiwa`} icon={<Users />} highlightColor="red" />
          <Card title="Garis Kemiskinan" value={parseInt(data.kemiskinan.garis_kemiskinan).toLocaleString('id-ID')} unit="Rp/kapita" icon={<DollarSign />} highlightColor="slate" />
          <Card title="Indeks Kedalaman (P1)" value={data.kemiskinan.indeks_kedalaman} icon={<Activity />} highlightColor="amber" />
          <Card title="Indeks Keparahan (P2)" value={data.kemiskinan.indeks_keparahan} icon={<Target />} highlightColor="rose" />
          
          <div className="bg-indigo-900 p-6 rounded-2xl shadow-lg text-white sm:col-span-2 lg:col-span-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-black text-indigo-300 uppercase tracking-wider mb-2">Gini Ratio (Ketimpangan)</p>
              <h3 className="text-4xl font-black mb-1 text-white">{data.kemiskinan.gini_ratio}</h3>
              <p className="text-xs text-indigo-200">Indikator pemerataan pendapatan masyarakat kabupaten.</p>
            </div>
          </div>
        </div>
      </div>
    );

    // 7. Pertanian
    const renderPertanian = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Wheat className="w-6 h-6 text-emerald-600" /> Sektor Pertanian & Peternakan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Produksi Padi" value={data.pertanian.produksi_padi.toLocaleString('id-ID')} unit="Ton" icon={<Wheat />} highlightColor="emerald" />
          <Card title="Luas Perkebunan" value={data.pertanian.luas_perkebunan.toLocaleString('id-ID')} unit="Hektar" icon={<Map />} highlightColor="emerald" />
          <Card title="Nilai Tukar Petani" value={data.pertanian.nilai_tukar_petani} icon={<TrendingUp />} highlightColor="blue" />
          
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50">
            <h4 className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">Hortikultura Unggulan</h4>
            <h3 className="text-xl font-bold text-slate-800">{data.pertanian.hortikultura_unggulan}</h3>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50 sm:col-span-2">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Populasi Peternakan</h4>
            <div className="flex flex-wrap gap-8">
              <div><p className="text-xs text-slate-500 mb-1">Sapi / Kerbau</p><p className="font-bold text-lg text-amber-700">{data.pertanian.populasi_ternak.sapi.toLocaleString('id-ID')}</p></div>
              <div><p className="text-xs text-slate-500 mb-1">Kambing / Domba</p><p className="font-bold text-lg text-amber-600">{data.pertanian.populasi_ternak.kambing.toLocaleString('id-ID')}</p></div>
              <div><p className="text-xs text-slate-500 mb-1">Unggas</p><p className="font-bold text-lg text-rose-500">{data.pertanian.populasi_ternak.unggas.toLocaleString('id-ID')}</p></div>
            </div>
          </div>
        </div>
      </div>
    );

    // 8. Industri & Pariwisata
    const renderIndustri = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><ShoppingBag className="w-6 h-6 text-pink-500" /> Sektor Industri, Perdagangan & Pariwisata</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Jumlah UMKM" value={data.industri_pariwisata.jumlah_umkm.toLocaleString('id-ID')} unit="Unit" icon={<Store />} highlightColor="blue" />
          <Card title="Kunjungan Wisatawan" value={data.industri_pariwisata.kunjungan_wisatawan.toLocaleString('id-ID')} unit="Orang" icon={<Map />} highlightColor="emerald" />
          <Card title="Objek Wisata Resmi" value={data.industri_pariwisata.objek_wisata} unit="Titik" icon={<Target />} highlightColor="rose" />
          <Card title="Penghunian Hotel" value={data.industri_pariwisata.tingkat_penghunian_kamar} unit="%" icon={<Home />} highlightColor="amber" />
          
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50 sm:col-span-2 lg:col-span-4">
            <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wide">Sarana Perdagangan</h4>
            <div className="flex gap-8">
              <div className="flex-1 bg-slate-50 p-4 rounded-xl text-center"><p className="text-xs text-slate-500 mb-1">Pasar Tradisional</p><p className="font-bold text-2xl text-slate-800">{data.industri_pariwisata.pusat_perdagangan.pasar_tradisional}</p></div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl text-center"><p className="text-xs text-slate-500 mb-1">Toko Modern</p><p className="font-bold text-2xl text-slate-800">{data.industri_pariwisata.pusat_perdagangan.toko_modern}</p></div>
            </div>
          </div>
        </div>
      </div>
    );

    // 9. Infrastruktur
    const renderInfrastruktur = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Home className="w-6 h-6 text-slate-600" /> Sektor Infrastruktur & Lingkungan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-6">
             <Card title="Air Layak" value={data.infrastruktur.sumber_air_layak} unit="%" icon={<Activity />} highlightColor="blue" />
             <Card title="Sanitasi Layak" value={data.infrastruktur.sanitasi_layak} unit="%" icon={<HeartPulse />} highlightColor="emerald" />
             <Card title="Elektrifikasi" value={data.infrastruktur.rasio_elektrifikasi} unit="%" icon={<Target />} highlightColor="amber" />
             <Card title="Rumah Layak" value={data.infrastruktur.rumah_layak_huni} unit="%" icon={<Home />} highlightColor="indigo" />
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-slate-50">
            <h4 className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-wide">Kondisi Jalan Kabupaten</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-slate-500">Baik</span><span className="font-bold text-emerald-600">{data.infrastruktur.kondisi_jalan.baik}%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${data.infrastruktur.kondisi_jalan.baik}%` }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-slate-500">Sedang</span><span className="font-bold text-amber-500">{data.infrastruktur.kondisi_jalan.sedang}%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{ width: `${data.infrastruktur.kondisi_jalan.sedang}%` }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-slate-500">Rusak / Rusak Berat</span><span className="font-bold text-rose-500">{data.infrastruktur.kondisi_jalan.rusak}%</span></div>
                <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-rose-500 h-2 rounded-full" style={{ width: `${data.infrastruktur.kondisi_jalan.rusak}%` }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    // 10. Podes
    const renderPodes = () => (
      <div className="mb-16">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Signal className="w-6 h-6 text-sky-500" /> Data Potensi Desa (Podes) & Telekomunikasi</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Sinyal Seluler (4G/5G)" value={data.podes.sinyal_seluler} unit="%" subtitle="Desa terjangkau internet" icon={<Signal />} highlightColor="sky" />
          <Card title="Fasilitas Tanggap Bencana" value={data.podes.fasilitas_tanggap_bencana} unit="Desa" subtitle="Memiliki peringatan dini" icon={<AlertCircle />} highlightColor="amber" />
          
          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg text-white sm:col-span-2 lg:col-span-3">
            <h4 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wide">Status Kemandirian Desa</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Mandiri</p>
                <p className="font-black text-2xl text-emerald-400">{data.podes.status_kemandirian.mandiri}</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Maju</p>
                <p className="font-black text-2xl text-blue-400">{data.podes.status_kemandirian.maju}</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Berkembang</p>
                <p className="font-black text-2xl text-amber-400">{data.podes.status_kemandirian.berkembang}</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Tertinggal</p>
                <p className="font-black text-2xl text-rose-400">{data.podes.status_kemandirian.tertinggal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    // --- TAB SWITCHER ---
    switch(activeTab) {
      case 'Overview':
        return (
          <>
            {renderHeader('Dashboard 10 Sektor', 'Ringkasan Seluruh Indikator BPS')}
            {renderDemografi()}
            {renderKesehatan()}
            {renderPendidikan()}
            {renderEkonomi()}
            {renderKetenagakerjaan()}
            {renderKemiskinan()}
            {renderPertanian()}
            {renderIndustri()}
            {renderInfrastruktur()}
            {renderPodes()}
          </>
        );
      case 'Sosial & Kependudukan': return <>{renderHeader('Sosial & Kependudukan', 'Demografi, Rasio, & Proyeksi')} {renderDemografi()}</>;
      case 'Kesehatan': return <>{renderHeader('Kesehatan', 'Harapan Hidup, Kematian, Fasilitas, & Tenaga')} {renderKesehatan()}</>;
      case 'Pendidikan': return <>{renderHeader('Pendidikan', 'IPM, Partisipasi, & Infrastruktur Sekolah')} {renderPendidikan()}</>;
      case 'Ekonomi, PDRB & Inflasi': return <>{renderHeader('Ekonomi, PDRB & Inflasi', 'Pertumbuhan Makro & PDRB Daerah')} {renderEkonomi()}</>;
      case 'Ketenagakerjaan': return <>{renderHeader('Ketenagakerjaan', 'TPAK, TPT, Lapangan & Status Pekerjaan')} {renderKetenagakerjaan()}</>;
      case 'Kemiskinan & Kesejahteraan': return <>{renderHeader('Kemiskinan & Kesejahteraan', 'Penduduk Miskin, Garis Kemiskinan, & Gini Ratio')} {renderKemiskinan()}</>;
      case 'Pertanian & Peternakan': return <>{renderHeader('Pertanian & Peternakan', 'Produksi, Populasi, & NTP')} {renderPertanian()}</>;
      case 'Industri & Pariwisata': return <>{renderHeader('Industri & Pariwisata', 'UMKM, Perdagangan, & Kunjungan Wisatawan')} {renderIndustri()}</>;
      case 'Infrastruktur & Lingkungan': return <>{renderHeader('Infrastruktur & Lingkungan', 'Air, Sanitasi, Listrik, & Jalan')} {renderInfrastruktur()}</>;
      case 'Potensi Desa & Telekomunikasi': return <>{renderHeader('Potensi Desa & Telekomunikasi', 'Status Desa, Sinyal, & Tanggap Bencana')} {renderPodes()}</>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-[#113883] py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wavy" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wavy)" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-4 lg:px-8">
          <div className="text-center md:text-left text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">Katalog Data BPS</h1>
            <p className="text-xl text-blue-100 font-medium">Dashboard 10 Sektor Indikator Data Terintegrasi Kabupaten Probolinggo</p>
          </div>
          
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-amber-400 overflow-hidden bg-slate-900 shadow-2xl relative group shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
            <div className="relative text-center z-10">
              <span className="text-white font-black text-3xl drop-shadow-lg tracking-wider">COMMAND<br/><span className="text-amber-400">CENTER</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 lg:px-8 py-8 md:py-12 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 space-y-1 sticky top-8">
            <h3 className="px-4 py-2 text-xs font-black text-slate-400 uppercase tracking-widest mb-2 border-b border-slate-50">10 Sektor BPS</h3>
            {sidebarItems.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTab(item.name)}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all flex items-center gap-3 ${
                  activeTab === item.name
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'
                }`}
              >
                <div className={`${activeTab === item.name ? 'text-blue-600' : 'text-slate-400'}`}>
                  {item.icon}
                </div>
                <span className="text-sm">{item.name}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 min-h-[800px]">
          {renderContent()}
        </div>

      </main>
    </div>
  );
}
