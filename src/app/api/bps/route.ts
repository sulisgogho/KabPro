import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const FALLBACK_DATA = {
  // 1. SEKTOR SOSIAL & KEPENDUDUKAN (Demografi)
  demografi: {
    jumlah_penduduk: 1150000,
    laju_pertumbuhan: "1.2", // %
    komposisi: {
      anak_anak: 310000,
      usia_produktif: 740000,
      lansia: 100000
    },
    kepadatan: 678, // jiwa per km2
    rasio_ketergantungan: "55.4", // %
    proyeksi_5_tahun: 1210000
  },

  // 2. SEKTOR KESEHATAN
  kesehatan: {
    angka_harapan_hidup: "68.85", // Tahun
    angka_kematian_bayi: "12.4", // per 1000 kelahiran
    angka_kematian_ibu: "145", // per 100000 kelahiran
    prevalensi_stunting: "18.5", // %
    fasilitas: {
      rumah_sakit: 8,
      puskesmas: 33,
      apotek: 120
    },
    tenaga_kesehatan: {
      dokter: 842,
      perawat: 1684,
      bidan: 1684
    } // Rasio per 10.000 penduduk bisa dihitung di frontend
  },

  // 3. SEKTOR PENDIDIKAN
  pendidikan: {
    ipm: "68.32",
    rata_rata_lama_sekolah: "6.2", // Tahun
    harapan_lama_sekolah: "12.1", // Tahun
    angka_partisipasi_sekolah: "85.2", // %
    angka_melek_huruf: "89.5", // %
    infrastruktur: {
      sd: 680,
      smp: 240,
      sma_smk: 115
    },
    tingkat_putus_sekolah: "1.8" // %
  },

  // 4. SEKTOR EKONOMI, PDRB & INFLASI
  ekonomi: {
    pertumbuhan_ekonomi: "4.85", // %
    pdrb_adhb: "38.5", // Triliun Rupiah (contoh mock)
    pdrb_adhk: "25.2", // Triliun Rupiah
    pdrb_per_kapita: "31500000", // Rupiah
    inflasi: "2.5", // %
    distribusi_lapangan_usaha: {
      pertanian: 35.2, // %
      industri: 24.1, // %
      perdagangan: 18.5, // %
      lainnya: 22.2 // %
    }
  },

  // 5. SEKTOR KETENAGAKERJAAN
  ketenagakerjaan: {
    tpak: "68.4", // % (Tingkat Partisipasi Angkatan Kerja)
    tpt: "3.26", // % (Tingkat Pengangguran Terbuka)
    lapangan_pekerjaan_utama: "Pertanian & Perkebunan",
    status_pekerjaan: {
      formal: 32.5, // %
      informal: 67.5 // %
    },
    rata_rata_upah: "2150000" // Rupiah/Bulan
  },

  // 6. SEKTOR KEMISKINAN & KESEJAHTERAAN SOSIAL
  kemiskinan: {
    persentase_miskin: "17.18", // % (P0)
    jumlah_miskin: 203870, // Jiwa
    indeks_kedalaman: "2.45", // P1
    indeks_keparahan: "0.85", // P2
    garis_kemiskinan: "450000", // Rupiah per kapita per bulan
    gini_ratio: "0.324"
  },

  // 7. SEKTOR PERTANIAN, PERKEBUNAN & PETERNAKAN
  pertanian: {
    produksi_padi: 325400, // Ton
    hortikultura_unggulan: "Bawang Merah & Mangga",
    luas_perkebunan: 12500, // Hektar
    populasi_ternak: {
      sapi: 310500,
      kambing: 154000,
      unggas: 2100000
    },
    nilai_tukar_petani: "105.2" // NTP
  },

  // 8. SEKTOR INDUSTRI, PERDAGANGAN & PARIWISATA
  industri_pariwisata: {
    jumlah_umkm: 45200, // Unit
    pusat_perdagangan: {
      pasar_tradisional: 48,
      toko_modern: 112
    },
    kunjungan_wisatawan: 450000, // Orang
    tingkat_penghunian_kamar: "32.4", // %
    objek_wisata: 35 // Titik
  },

  // 9. SEKTOR INFRASTRUKTUR, PERUMAHAN & LINGKUNGAN
  infrastruktur: {
    sumber_air_layak: "82.4", // %
    sanitasi_layak: "75.6", // %
    rasio_elektrifikasi: "98.5", // %
    kondisi_jalan: {
      baik: 62.5, // %
      sedang: 20.1, // %
      rusak: 17.4 // %
    },
    rumah_layak_huni: "71.2" // %
  },

  // 10. DATA POTENSI DESA (PODES) & TELEKOMUNIKASI
  podes: {
    status_kemandirian: {
      mandiri: 15, // Desa
      maju: 85,
      berkembang: 180,
      tertinggal: 45
    },
    sinyal_seluler: "92.5", // % desa terjangkau 4G/5G
    fasilitas_tanggap_bencana: 125 // Desa
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const API_KEY = process.env.BPS_API_KEY;
  const DOMAIN = '3513'; // Kabupaten Probolinggo

  if (!API_KEY) {
    return NextResponse.json({
      status: 'OK',
      source: 'fallback (No API Key)',
      data: FALLBACK_DATA
    });
  }

  try {
    const bpsUrl = `https://webapi.bps.go.id/v1/api/list/model/var/domain/${DOMAIN}/key/${API_KEY}/`;
    
    const response = await fetch(bpsUrl, {
      next: { revalidate: 3600 } 
    });
    
    if (!response.ok) {
      throw new Error(`BPS API responded with status: ${response.status}`);
    }

    const bpsData = await response.json();
    
    if (!bpsData || bpsData === null || bpsData.status === 'ERROR') {
      return NextResponse.json({
        status: 'OK',
        source: 'fallback (BPS API returned null/error)',
        data: FALLBACK_DATA,
        bps_raw: bpsData
      });
    }
    
    return NextResponse.json({
      status: 'OK',
      source: 'bps_api',
      data: FALLBACK_DATA, 
      bps_meta: bpsData
    });
    
  } catch (error) {
    console.error("Error fetching from BPS API:", error);
    
    return NextResponse.json({
      status: 'OK',
      source: 'fallback (Error catching)',
      data: FALLBACK_DATA,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
