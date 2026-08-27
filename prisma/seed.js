const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const user = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
    },
  });
  console.log('User admin upserted.');

  // Seed Berita
  const dummyBerita = [
    {
      slug: "pimpin-upacara-hut-ke-81-ri-bupati-ingatkan-kerja-nyata",
      img: "https://images.unsplash.com/photo-1543164912-84184ce117bb?auto=format&fit=crop&q=80&w=800",
      title: "Pimpin Upacara HUT ke-81 RI, Bupati Ingatkan Kerja Nyata Untuk Masyarakat",
      cat: "Pemerintahan",
      date: new Date("2026-08-17T00:00:00Z"),
      content: `<p>Pemerintah Kabupaten Probolinggo menggelar upacara peringatan Hari Ulang Tahun (HUT) ke-81 Kemerdekaan Republik Indonesia di Alun-alun Kota Kraksaan. Upacara yang berlangsung khidmat ini dipimpin langsung oleh Bupati Probolinggo.</p><br/><p>Dalam amanatnya, Bupati mengingatkan seluruh jajaran pemerintahan dan Aparatur Sipil Negara (ASN) untuk terus bekerja nyata dan mengedepankan pelayanan publik. "Kemerdekaan ini bukan hanya sekadar seremoni, tetapi panggilan untuk mengisi pembangunan dengan kerja nyata," tegas Bupati.</p><br/><p>Upacara ini dihadiri oleh jajaran Forkopimda, tokoh masyarakat, serta perwakilan pelajar se-Kabupaten Probolinggo. Semangat kemerdekaan diharapkan mampu mendorong kolaborasi antar instansi dalam mewujudkan Probolinggo yang semakin maju, sejahtera, dan berdaya saing.</p>`
    },
    {
      slug: "perbaikan-jalan-akses-wisata-bromo-dikebut",
      img: "https://images.unsplash.com/photo-1577002660505-8b38dfd50d7e?auto=format&fit=crop&q=80&w=400",
      title: "Perbaikan Jalan Akses Wisata Bromo Dikebut",
      cat: "Pembangunan",
      date: new Date("2026-08-16T00:00:00Z"),
      content: `<p>Pemerintah Kabupaten Probolinggo melalui Dinas Pekerjaan Umum dan Penataan Ruang (PUPR) terus mempercepat perbaikan infrastruktur jalan menuju kawasan wisata Gunung Bromo, khususnya melalui jalur Sukapura.</p><br/><p>Proyek perbaikan ini bertujuan untuk meningkatkan kenyamanan wisatawan serta memperlancar mobilitas ekonomi warga sekitar. Menurut Kepala Dinas PUPR, perbaikan difokuskan pada pelebaran jalan dan penambalan titik-titik rawan longsor.</p><br/><p>"Kami targetkan perbaikan selesai sebelum musim libur akhir tahun, sehingga wisatawan dapat menikmati perjalanan yang aman dan nyaman," ungkapnya.</p>`
    },
    {
      slug: "panen-mangga-serentak-tingkatkan-ekonomi",
      img: "https://images.unsplash.com/photo-1550828520-4cb496926fc9?auto=format&fit=crop&q=80&w=400",
      title: "Panen Mangga Serentak Tingkatkan Ekonomi",
      cat: "Kesejahteraan",
      date: new Date("2026-08-15T00:00:00Z"),
      content: `<p>Musim panen mangga jenis arumanis dan manalagi di Kabupaten Probolinggo tahun ini menunjukkan peningkatan hasil yang signifikan. Para petani di sentra penghasil mangga, seperti Kecamatan Paiton dan Kraksaan, menyambut gembira hasil panen yang melimpah.</p><br/><p>Pemerintah daerah terus mendukung para petani melalui program bimbingan penyuluhan pertanian dan bantuan pupuk bersubsidi. Hal ini diharapkan mampu mempertahankan kualitas mangga Probolinggo yang sudah terkenal hingga ke luar daerah.</p><br/><p>Dengan melimpahnya hasil panen, roda perekonomian masyarakat petani turut bergerak positif. Pemerintah juga memfasilitasi jalur distribusi agar harga jual tetap stabil dan menguntungkan petani.</p>`
    },
    {
      slug: "festival-tari-glipang-pukau-ribuan-warga",
      img: "https://images.unsplash.com/photo-1506744626753-1fa44df31c7f?auto=format&fit=crop&q=80&w=400",
      title: "Festival Tari Glipang Pukau Ribuan Warga",
      cat: "Pariwisata",
      date: new Date("2026-08-15T08:00:00Z"),
      content: `<p>Dalam rangka melestarikan kebudayaan lokal, Pemerintah Kabupaten Probolinggo sukses menggelar Festival Tari Glipang yang dihadiri ribuan warga dan wisatawan. Tari Glipang, yang merupakan tarian tradisional khas Probolinggo, dibawakan dengan apik oleh puluhan sanggar tari dari berbagai kecamatan.</p><br/><p>Festival ini tidak hanya menjadi ajang hiburan, tetapi juga sarana edukasi bagi generasi muda untuk lebih mencintai warisan budaya leluhur. Penampilan enerjik para penari yang diiringi musik tradisional berhasil memukau seluruh penonton yang hadir.</p><br/><p>Bupati Probolinggo dalam sambutannya menegaskan komitmen pemerintah untuk menjadikan Festival Tari Glipang sebagai agenda pariwisata tahunan berskala nasional.</p>`
    },
    {
      slug: "penghargaan-layanan-dukcapil-terbaik-nasional",
      img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
      title: "Penghargaan Layanan Dukcapil Terbaik Nasional",
      cat: "Pemerintahan",
      date: new Date("2026-08-14T00:00:00Z"),
      content: `<p>Dinas Kependudukan dan Pencatatan Sipil (Dukcapil) Kabupaten Probolinggo kembali meraih penghargaan bergengsi di tingkat nasional atas inovasi layanan administrasi kependudukan yang cepat dan terintegrasi digital.</p><br/><p>Penghargaan ini diberikan oleh Kementerian Dalam Negeri sebagai bentuk apresiasi atas keberhasilan Dukcapil Probolinggo dalam mempermudah akses warga untuk mengurus KTP, KK, dan Akta Kelahiran tanpa antrean panjang berkat aplikasi layanan daring.</p><br/><p>Keberhasilan ini menjadi motivasi bagi seluruh ASN di Kabupaten Probolinggo untuk terus meningkatkan standar pelayanan publik demi kepuasan dan kesejahteraan masyarakat.</p>`
    }
  ];

  for (const b of dummyBerita) {
    await prisma.berita.upsert({
      where: { slug: b.slug },
      update: {},
      create: {
        slug: b.slug,
        judul: b.title,
        konten: b.content,
        kategori: b.cat,
        gambarUrl: b.img,
        tanggal: b.date,
      }
    });
  }
  console.log('Berita dummy data upserted.');

  // Seed Video
  const dummyVideo = [
    {
      slug: "progres-pembangunan-tol-probowangi-2026",
      youtubeId: "dQw4w9WgXcQ",
      title: "Progres Pembangunan Tol Probowangi 2026",
      cat: "Infrastruktur",
      date: new Date("2026-08-10T00:00:00Z"),
    }
  ];

  await prisma.video.deleteMany({});
  for (const v of dummyVideo) {
    await prisma.video.create({
      data: {
        judul: v.title,
        youtubeId: v.youtubeId,
        kategori: v.cat,
        tanggal: v.date,
      }
    });
  }
  console.log('Video dummy data seeded.');

  // Seed Agenda
  const dummyAgenda = [
    {
      judul: "Rapat Koordinasi Forkopimda",
      deskripsi: "Rapat untuk membahas keamanan dan ketertiban masyarakat.",
      lokasi: "Pendopo Kabupaten",
      tanggalPelaksanaan: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 1), // Tomorrow
    },
    {
      judul: "Audiensi Masyarakat",
      deskripsi: "Audiensi terbuka bagi masyarakat untuk menyampaikan aspirasi.",
      lokasi: "Kantor Bupati",
      tanggalPelaksanaan: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 2),
    },
    {
      judul: "Peninjauan Proyek Jalan",
      deskripsi: "Bupati dan jajaran meninjau proyek perbaikan jalan desa.",
      lokasi: "Kecamatan Kraksaan",
      tanggalPelaksanaan: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3),
    }
  ];

  await prisma.agenda.deleteMany({});
  for (const a of dummyAgenda) {
    await prisma.agenda.create({
      data: a
    });
  }
  console.log('Agenda dummy data seeded.');

  // Seed Event
  const dummyEvent = [
    {
      judul: "Festival Kesenian Probolinggo",
      deskripsi: "Festival kesenian yang menampilkan beragam budaya lokal Probolinggo.",
      lokasi: "Alun-alun Kraksaan",
      gambarUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600",
      tanggalPelaksanaan: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 5),
    }
  ];

  await prisma.event.deleteMany({});
  for (const e of dummyEvent) {
    await prisma.event.create({
      data: e
    });
  }
  console.log('Event dummy data seeded.');

  // Seed Pariwisata
  const { dummyPariwisata, dummyTaman } = require('./seed-data.js');

  await prisma.pariwisata.deleteMany({});
  for (const p of dummyPariwisata) {
    const { map, ...dataWithoutMap } = p;
    await prisma.pariwisata.create({ data: { ...dataWithoutMap, linkMaps: map } });
  }
  console.log('Pariwisata dummy data seeded.');

  // Seed Taman
  await prisma.taman.deleteMany({});
  for (const t of dummyTaman) {
    const { map, ...dataWithoutMap } = t;
    await prisma.taman.create({ data: { ...dataWithoutMap, linkMaps: map } });
  }
  console.log('Taman dummy data seeded.');

  // Seed Layanan
  const dummyLayanan = [
    {
      nama: "Portal Perizinan Terpadu",
      deskripsi: "Sistem informasi layanan perizinan terpadu Kabupaten Probolinggo untuk mempermudah masyarakat.",
      kategori: "Administrasi",
      linkLayanan: "https://dpmptsp.probolinggokab.go.id/",
    },
    {
      nama: "Kanal Aduan Lapor",
      deskripsi: "Sampaikan keluhan dan aspirasi Anda secara langsung dan cepat ditanggapi oleh instansi terkait.",
      kategori: "Pengaduan",
      linkLayanan: "https://www.lapor.go.id/",
    }
  ];

  await prisma.layanan.deleteMany({});
  for (const l of dummyLayanan) {
    await prisma.layanan.create({ data: l });
  }
  console.log('Layanan dummy data seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
