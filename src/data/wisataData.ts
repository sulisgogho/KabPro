export interface Wisata {
  id: string;
  name: string;
  description: string;
  address: string;
  mapUrl: string;
  image: string;
}

export interface Taman {
  id: string;
  name: string;
  mapUrl: string;
  image: string;
}

export const wisataData: Wisata[] = [
  {
    id: "w-1",
    name: "Gunung Bromo",
    description: "Gunung Bromo merupakan ikon pariwisata bertaraf internasional di kawasan Taman Nasional Bromo Tengger Semeru yang terkenal dengan panorama matahari terbit, lautan pasir berbisik, kawah aktif, serta Bukit Teletubbies.",
    address: "Desa Ngadisari / Wonotoro, Kecamatan Sukapura, Kabupaten Probolinggo, Jawa Timur.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd637aaab794a41:0xada40d36ecd2a5dd?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/bromo.jpg"
  },
  {
    id: "w-2",
    name: "Air Terjun Madakaripura",
    description: "Air Terjun Madakaripura memiliki ketinggian sekitar 200 meter dan berada di ujung lembah ngarai sempit yang konon menjadi tempat pertapaan Patih Gajah Mada.",
    address: "Dusun Tersono, Desa Sapih / Negororejo, Kecamatan Lumbang, Kabupaten Probolinggo, Jawa Timur 67183.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd64a8134d45011:0x8d14c8dbff7a3823?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/madakaripura.jpg"
  },
  {
    id: "w-3",
    name: "Wisata Pantai Bentar",
    description: "Wisata Pantai Bentar terletak tepat di jalur utama Pantura dan menawarkan panorama laut tenang, jembatan kayu dermaga yang menjorok ke laut, hutan bakau, serta fenomena migrasi hiu paus pada periode tertentu.",
    address: "Jalur Pantura Mayangan, Karang Anyar, Desa Curahsawo, Kecamatan Gending, Kabupaten Probolinggo, Jawa Timur 67211.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd7ad8fcd0c6733:0xc8746415d15bb65a?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/bentar.jpg"
  },
  {
    id: "w-4",
    name: "Snorkeling Gili Ketapang",
    description: "Pulau karang kecil di Selat Madura ini terkenal dengan pasir putih bersih dan perairan jernih, menjadikannya lokasi favorit untuk kegiatan snorkeling, berenang bersama ikan badut (clownfish), dan wisata bahari.",
    address: "Desa Gili Ketapang, Kecamatan Sumberasih, Kabupaten Probolinggo, Jawa Timur 67251.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd7ad8fcd0c6733:0xc8746415d15bb65a?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/giliketapang.jpg"
  },
  {
    id: "w-5",
    name: "Ranu Agung",
    description: "Danau kawah vulkanik alami yang dikelilingi dinding tebing batu memanjang mirip benteng alami, dengan fasilitas getek bambu untuk mengelilingi perairan tenangnya.",
    address: "Dusun Krajan, Desa Ranuagung, Kecamatan Tiris, Kabupaten Probolinggo, Jawa Timur 67287.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd7ad8fcd0c6733:0xc8746415d15bb65a?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/ranuagung.jpg"
  },
  {
    id: "w-6",
    name: "Air Terjun Jaran Goyang",
    description: "Wisata alam air terjun alami di lereng pegunungan dengan udara sejuk, aliran air jernih, dan taman wisata keluarga di sekitarnya.",
    address: "Jl. Goyangan, Dusun Kramat, Desa Guyangan, Kecamatan Krucil, Kabupaten Probolinggo, Jawa Timur 67288.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd6f99110468cef:0x655a94210215cadb?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/jarangoyang.jpg"
  },
  {
    id: "w-7",
    name: "Candi Jabung",
    description: "Situs purbakala peninggalan Kerajaan Majapahit abad ke-14 yang terbuat dari bata merah dengan struktur menara silindris yang khas dan bernilai sejarah tinggi.",
    address: "Dusun Candi, Desa Jabung Candi, Kecamatan Paiton, Kabupaten Probolinggo, Jawa Timur 67291.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd70160580ad9d1:0x83ef4864691e539?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/candijabung.jpg"
  },
  {
    id: "w-8",
    name: "SONGA Adventure Rafting",
    description: "Pusat arung jeram (rafting) ternama di Jawa Timur yang menyusuri Sungai Pekalen dengan rute arung jeram menantang melintasi puluhan jeram alami, tebing tinggi, dan goa kelelawar.",
    address: "Dusun Krajan 1, Desa Condong, Kecamatan Gading, Kabupaten Probolinggo, Jawa Timur 67292.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd7ab48cb6fcd7f:0xf7ffb6872ec6b3a8?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/songa.jpg"
  },
  {
    id: "w-9",
    name: "Ranu Segaran",
    description: "Danau alami vulkanik yang tenang di kawasan Tiris dengan suasana asri dan sejuk, sering menjadi tujuan bersantai warga, pemancingan, serta berdekatan dengan sumber mata air panas alami Tiris.",
    address: "Dusun Paras, Desa Segaran, Kecamatan Tiris, Kabupaten Probolinggo, Jawa Timur 67287.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd6f81b69324839:0xafe2147e1df0290f?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/ranusegaran.jpg"
  },
  {
    id: "w-10",
    name: "Pantai Duta",
    description: "Destinasi wisata bahari di wilayah timur Probolinggo yang menawarkan hutan cemara laut rindang, tanaman mangrove, hamparan pasir luas, serta pemandangan matahari terbenam.",
    address: "Dusun Gilin, Desa Randutatah, Kecamatan Paiton, Kabupaten Probolinggo, Jawa Timur 67291.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd704026d1b27e7:0x7eca90a4004b621e?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/pantaiduta.jpg"
  },
  {
    id: "w-11",
    name: "Bermi Eco Park",
    description: "Taman rekreasi keluarga di dataran tinggi lereng Pegunungan Argopuro yang menyajikan taman bunga, wahana bermain, jembatan gantung, flying fox, dan kolam renang alami yang menyegarkan.",
    address: "Jl. Ayerdingin, Dusun Selatan, Desa Bermi, Kecamatan Krucil, Kabupaten Probolinggo, Jawa Timur 67288.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd6f129d81b4b89:0x6b208da6673d8407?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/bermiecopark.jpg"
  },
  {
    id: "w-12",
    name: "Wisata Ronggojalu",
    description: "Kawasan wisata sumber mata air alami yang sangat jernih dan rindang, difungsikan sebagai kolam pemandian terbuka yang asri serta tempat rekreasi akhir pekan keluarga.",
    address: "Blok Arisan, Desa Banjarsawah, Kecamatan Tegalsiwalan, Kabupaten Probolinggo, Jawa Timur 67274.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd65387239408c7:0x7bdfa4f88ed8ffde?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/ronggojalu.jpg"
  },
  {
    id: "w-13",
    name: "Tirto Ageng",
    description: "Pemandian mata air alami yang terletak di lereng perbukitan Lumbang, memiliki air pegunungan yang sangat jernih dan dikelilingi pepohonan besar yang rindang.",
    address: "Dusun Tengger, Desa Lumbang, Kecamatan Lumbang, Kabupaten Probolinggo, Jawa Timur 67255.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd64b3bf12a5faf:0xd6cb5b2ea33c1b55?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/tirtoageng.jpg"
  },
  {
    id: "w-14",
    name: "Candi Kedaton",
    description: "Situs candi purbakala berbahan batu andesit peninggalan Kerajaan Majapahit yang dihiasi relief cerita Arjunawiwaha, Garudeya, dan Bhomantaka di kawasan perbukitan Tiris.",
    address: "Dusun Lawang Kedaton, Desa Andungbiru, Kecamatan Tiris, Kabupaten Probolinggo, Jawa Timur 67287.",
    mapUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x2dd6f7795daa6e93:0x441608a0d0fcabf8?entry=gemini&utm_source=gemini&utm_campaign=gem-default",
    image: "/wisata/candi kedaton.jpg"
  },
  {
    id: "w-15",
    name: "Seruni Point Bromo",
    description: "Gardu pandang megah berarsitektur pilar klasik candi Tengger (dikenal juga sebagai Puncak Penanjakan 2) yang menjadi titik favorit wisatawan untuk menyaksikan pemandangan kawah Gunung Bromo dan matahari terbit.",
    address: "Desa Ngadisari, Kecamatan Sukapura, Kabupaten Probolinggo, Jawa Timur 67254.",
    mapUrl: "https://maps.app.goo.gl/NhPWzdpPZ95fJbFs7",
    image: "/wisata/seruni point.webp"
  },
  {
    id: "w-16",
    name: "Pantai Bohay (Binor Harmony)",
    description: "Wisata bahari di perbatasan timur Probolinggo yang menawarkan kafe tepi laut, wahana snorkeling, perahu wisata, serta pemandangan gemerlap lampu kompleks PLTU Paiton pada malam hari.",
    address: "Dusun Pesisir, Desa Bhinor, Kecamatan Paiton, Kabupaten Probolinggo, Jawa Timur 67291.",
    mapUrl: "https://maps.app.goo.gl/Vmu8JngxYXptNGmN8",
    image: "/wisata/pantai bohay.jfif"
  },
  {
    id: "w-17",
    name: "Pantai Tambak Sari",
    description: "Pantai pesisir yang tenang dengan deretan pohon cemara laut dan hamparan hutan bakau, sering dijadikan tempat rekreasi santai warga untuk menikmati matahari terbenam.",
    address: "Dusun Pandean, Desa Sukokerto, Kecamatan Pajarakan, Kabupaten Probolinggo, Jawa Timur 67281.",
    mapUrl: "https://maps.app.goo.gl/xcxJgAxpMHzkEEtb9",
    image: "/wisata/pantai tambak sari.jfif"
  },
  {
    id: "w-18",
    name: "Air Terjun Hyang Darungan",
    description: "Air terjun alami di kaki Pegunungan Argopuro yang asri dan sejuk dengan suasana hutan tropis pegunungan yang masih terjaga keasriannya.",
    address: "Desa Kalianan / Bremi, Kecamatan Krucil, Kabupaten Probolinggo, Jawa Timur 67288.",
    mapUrl: "https://maps.app.goo.gl/zn2EcZzEisTvp7Nz9",
    image: "/wisata/air terjun hyang darungan.jfif"
  },
  {
    id: "w-19",
    name: "Air Terjun Triban",
    description: "Destinasi air terjun tersembunyi dengan aliran air pegunungan yang dingin dan jernih, dikelilingi tebing hijau di jalur perbukitan Sukapura/Lumbang.",
    address: "Dusun Krajan, Desa Ngepung, Kecamatan Sukapura, Kabupaten Probolinggo, Jawa Timur 67254.",
    mapUrl: "https://maps.app.goo.gl/9eTyetz2aQ1S6pBF6",
    image: "/wisata/air terjun triban.jfif"
  },
  {
    id: "w-20",
    name: "Bukit Kembang (Kembang Hill B29 Sukapura)",
    description: "Destinasi bukit wisata keluarga di lereng Bromo dengan taman bunga warna-warni, gardu pandang perbukitan Tengger, dan spot foto berlatar perbukitan hijau.",
    address: "Desa Sapikerep, Kecamatan Sukapura, Kabupaten Probolinggo, Jawa Timur 67254.",
    mapUrl: "https://maps.app.goo.gl/zyiXK9cPU2m1oBvQA",
    image: "/wisata/bukit kembang.jfif"
  },
  {
    id: "w-21",
    name: "Air Terjun Kali Pedati",
    description: "Air terjun alami tersembunyi setinggi sekitar 20 meter di kawasan hutan Tiris dengan debit air jernih dan formasi tebing bebatuan alami.",
    address: "Dusun Krajan, Desa Kalianan, Kecamatan Krucil, Kabupaten Probolinggo, Jawa Timur 67288.",
    mapUrl: "https://maps.app.goo.gl/jnk1Te6UCMAJ6TQb7",
    image: "/wisata/air terjun kalipedati.jfif"
  },
  {
    id: "w-22",
    name: "Air Terjun Purba Tirai Bidadari",
    description: "Air terjun bertingkat dengan relief tebing batu purba eksotis dan kolam alami yang kerap dijadikan arena bermain air dan petualangan alam.",
    address: "Dusun lalangan, Curah Gadung, Jangkang, Kec. Tiris, Kabupaten Probolinggo, Jawa Timur 67287",
    mapUrl: "https://maps.app.goo.gl/eqMu5KKgfWRmq9fU9",
    image: "/wisata/airterjun tirai bidadari.jpg"
  },
  {
    id: "w-23",
    name: "Pantai Bahak",
    description: "Kawasan pantai pesisir dengan deretan tambak, hutan bakau, dan pemandangan perahu nelayan tradisional saat fajar maupun senja.",
    address: "Desa Curah Dringu, Kecamatan Dringu, Kabupaten Probolinggo, Jawa Timur 67271.",
    mapUrl: "https://maps.app.goo.gl/yZXpcERX9kFC8SmX6",
    image: "/wisata/pantai bahak.jpg"
  },
  {
    id: "w-24",
    name: "Pemandian Sumber Mata Air Tiris (Mata Air Panas Tiris)",
    description: "Sumber air hangat alami berbalut belerang ringan yang berada tidak jauh dari aliran sungai dan Danau Segaran Tiris.",
    address: "Dusun Segaran, Desa Segaran, Kecamatan Tiris, Kabupaten Probolinggo, Jawa Timur 67287.",
    mapUrl: "https://maps.app.goo.gl/4Y7XqPUSeNcMd82b6",
    image: "/wisata/airpanastiris.jfif"
  },
  {
    id: "w-25",
    name: "Puncak P30 Bromo",
    description: "Titik gardu pandang berketinggian 3.000 mdpl di jalur pendakian Bromo-Semeru yang menawarkan sudut pandang 360 derajat ke kaldera Tengger dan Gunung Semeru.",
    address: "Kawasan Hutan Lindung Tengger, Kecamatan Sukapura / Sumber, Kabupaten Probolinggo, Jawa Timur 67254.",
    mapUrl: "https://maps.app.goo.gl/m5HoUoAHKdpyvNt76",
    image: "/wisata/puncak P30.jfif"
  },
  {
    id: "w-26",
    name: "Bukit Batu Gligir",
    description: "Destinasi wisata perbukitan di kawasan timur Probolinggo (kaki Pegunungan Argopuro) yang berada di ketinggian sekitar 600 mdpl. Tempat ini populer sebagai area camping ground, berburu panorama matahari terbit/terbenam, serta melihat gemerlap pemandangan PLTU Paiton dari ketinggian di malam hari.",
    address: "Dusun Alas Kembang / Krajan, Desa Tambakukir (berbatasan dengan Blimbing, Pakuniran), Kecamatan Kotaanyar, Kabupaten Probolinggo, Jawa Timur 67293.",
    mapUrl: "https://maps.app.goo.gl/mJxK8cacwXebwaeR7",
    image: "/wisata/batu gligir.jfif"
  },
  {
    id: "w-27",
    name: "Sungai Rabunan",
    description: "Surga tersembunyi (hidden gem) di pedalaman kaki Gunung Argopuro yang menyajikan aliran sungai pegunungan yang sangat jernih dan segar, tebing alami, serta air terjun dengan bebatuan besar di tengah alam asri.",
    address: "Dusun Rabunan, Desa Batur, Kecamatan Gading, Kabupaten Probolinggo, Jawa Timur 67292.",
    mapUrl: "https://maps.app.goo.gl/9QTe4kHU7c8e1tW56",
    image: "/wisata/sungai rabunan.jfif"
  }
];

export const tamanData: Taman[] = [
  {
    id: "t-1",
    name: "SL Park Kraksaan",
    mapUrl: "https://maps.app.goo.gl/NCcgmTfSUMcZgj7M9",
    image: "/wisata/sl park kraksaan.jpg"
  },
  {
    id: "t-2",
    name: "Alun-alun Kraksaan",
    mapUrl: "https://maps.app.goo.gl/pffLFmML56pbHmrC8",
    image: "/wisata/alun-alun kraksaan.jpg"
  },
  {
    id: "t-3",
    name: "Hutan Kota Kraksaan",
    mapUrl: "https://maps.app.goo.gl/wxjZasVfSrC3MbpN7",
    image: "/wisata/hutan kota kraksaan.jpg"
  }
];
