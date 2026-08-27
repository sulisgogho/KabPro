import Image from "next/image";
import Link from "next/link";

export default function KebudayaanPage() {
  const categories = [
    {
      title: "Upacara Adat",
      description: "Yadnya Kasada, Entas-Entas, dan ritual sakral masyarakat Tengger."
    },
    {
      title: "Seni Tari",
      description: "Tari Kiprah Glipang, Tari Rerantika, dan tarian tradisional lainnya."
    },
    {
      title: "Tradisi Pesisir",
      description: "Petik Laut dan tradisi ungkapan syukur masyarakat nelayan Pantura."
    },
    {
      title: "Seni Pertunjukan",
      description: "Ludruk, Ketoprak, dan kesenian rakyat yang masih dilestarikan."
    }
  ];

  const culturalItems = [
    {
      id: 1,
      title: "Upacara Kasada",
      image: "https://images.unsplash.com/photo-1549473889-14f410d83298?q=80&w=800&auto=format&fit=crop",
      url: "#"
    },
    {
      id: 2,
      title: "Tari Kiprah Glipang",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
      url: "#"
    },
    {
      id: 3,
      title: "Tradisi Petik Laut",
      image: "https://images.unsplash.com/photo-1621644787948-4e334a1a5b81?q=80&w=800&auto=format&fit=crop",
      url: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[350px] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1549473889-14f410d83298?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            INFORMASI KEBUDAYAAN
          </h1>
          <p className="text-lg text-slate-200">
            Mengenal seni, tradisi, dan warisan budaya yang tumbuh dan berkembang di Kabupaten Probolinggo
          </p>
        </div>
      </section>

      {/* First Section (Categories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h3 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3">Budaya Kabupaten Probolinggo</h3>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Menelusuri Kekayaan Budaya Probolinggo</h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-12">
          Kabupaten Probolinggo memiliki beragam seni dan tradisi yang menjadi bagian dari kehidupan masyarakat. Mulai dari budaya masyarakat pegunungan Tengger, hingga tradisi pesisir pantai utara yang terus dilestarikan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-slate-100 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg text-slate-900 mb-2">{cat.title}</h4>
              <p className="text-sm text-slate-600">{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Second Section (Gallery/Cards) */}
      <section className="w-full bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3">Ragam Budaya</h3>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Seni dan Tradisi Khas Probolinggo</h2>
          <p className="text-slate-600 max-w-3xl mx-auto mb-12">
            Kenali berbagai kesenian dan tradisi yang menjadi bagian dari kekayaan budaya masyarakat Kabupaten Probolinggo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalItems.map((item) => (
              <div key={item.id} className="relative h-[450px] w-full rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Bottom Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between shadow-lg">
                  <span className="font-bold text-slate-900 text-sm ml-2">{item.title}</span>
                  <Link 
                    href={item.url}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Section (Call to Action / Quote) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-blue-50/50 rounded-3xl p-10 md:p-16 text-center border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Melestarikan Budaya, Menjaga Identitas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Pelestarian budaya bukan hanya tentang menjaga warisan masa lalu, tetapi juga memperkenalkannya kepada generasi muda agar tetap hidup dan berkembang di masa depan.
          </p>
        </div>
      </section>
    </main>
  );
}
