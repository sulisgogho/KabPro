import { Activity, Phone, MapPin, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function KesehatanPage() {
  const hospitals = [
    {
      id: 1,
      name: "RSUD Waluyo Jati",
      type: "RS Daerah",
      phone: "(0335) 841118",
      address: "Jl. dr. Sutomo No.1, Kraksaan, Kabupaten Probolinggo",
      facilities: ["IGD 24 Jam", "Rawat Inap", "Rawat Jalan", "ICU / NICU", "Laboratorium", "Radiologi"],
      url: "#",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "RSUD Tongas",
      type: "RS Daerah",
      phone: "(0335) 511118",
      address: "Jl. Raya Tongas No.229, Tongas, Kabupaten Probolinggo",
      facilities: ["IGD 24 Jam", "Poliklinik", "Apotek", "Rawat Inap", "Ruang Operasi", "Ambulans"],
      url: "#",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "RSU Rizani",
      type: "RS Swasta",
      phone: "(0335) 773444",
      address: "Jl. Raya Surabaya - Situbondo Km 135, Paiton, Kabupaten Probolinggo",
      facilities: ["IGD 24 Jam", "Spesialis", "Laboratorium", "Farmasi", "Rawat Inap", "Radiologi"],
      url: "#",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "RS Graha Sehat",
      type: "RS Swasta",
      phone: "(0335) 846500",
      address: "Jl. Panglima Sudirman No.2, Kraksaan, Kabupaten Probolinggo",
      facilities: ["IGD 24 Jam", "Rawat Inap", "Poli Spesialis", "Radiologi", "Fisioterapi", "Apotek"],
      url: "#",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FASILITAS KESEHATAN
          </h1>
          <p className="text-lg text-slate-200">
            Informasi layanan kesehatan dan rumah sakit di wilayah Kabupaten Probolinggo
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Layanan Kesehatan Probolinggo</h2>
          <p className="text-slate-600 max-w-3xl">
            Dapatkan informasi terkait fasilitas pelayanan kesehatan terbaik yang mencakup Rumah Sakit Daerah dan Swasta di Kabupaten Probolinggo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row h-full relative">
              {/* Type Badge */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                hospital.type === 'RS Daerah' ? 'bg-blue-600 text-white' : 'bg-orange-500 text-white'
              }`}>
                {hospital.type}
              </div>

              {/* Image Section */}
              <div className="w-full md:w-2/5 h-48 md:h-auto relative">
                <Image 
                  src={hospital.image} 
                  alt={hospital.name} 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="w-full md:w-3/5 p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{hospital.name}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    {hospital.phone}
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-slate-600 mb-6">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                  <p>{hospital.address}</p>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-orange-500" />
                    Fasilitas Tersedia
                  </h4>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {hospital.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href={hospital.url}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-colors"
                >
                  Akses Website Resmi
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
