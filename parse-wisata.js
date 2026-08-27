const fs = require('fs');

const rawText = fs.readFileSync('c:/Users/sulis/Videos/Fullstack/kabpro/wisata dan taman.txt', 'utf8');

// Parse rawText to build the array
const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);

const pariwisata = [];
const taman = [];

let isTaman = false;

let currentObject = null;
let step = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line === 'Taman') {
    isTaman = true;
    continue;
  }
  
  if (!isTaman) {
    if (step === 0) {
      currentObject = { nama: line, kategori: "Alam" }; // Default category Alam
      step++;
    } else if (step === 1) {
      currentObject.deskripsi = line;
      step++;
    } else if (step === 2) {
      currentObject.lokasi = line.replace('Alamat Lengkap: ', '');
      step++;
    } else if (step === 3) {
      currentObject.map = line;
      
      // Determine image based on name
      let img = "";
      const n = currentObject.nama.toLowerCase();
      if (n.includes('bromo') && !n.includes('seruni') && !n.includes('p30')) img = "bromo.jpg";
      else if (n.includes('madakaripura')) img = "madakaripura.jpg";
      else if (n.includes('bentar')) img = "bentar.jpg";
      else if (n.includes('gili ketapang')) img = "giliketapang.jpg";
      else if (n.includes('ranu agung')) img = "ranuagung.jpg";
      else if (n.includes('jaran goyang')) img = "jarangoyang.jpg";
      else if (n.includes('jabung')) img = "candijabung.jpg";
      else if (n.includes('songa')) img = "songa.jpg";
      else if (n.includes('ranu segaran')) img = "ranusegaran.jpg";
      else if (n.includes('pantai duta')) img = "pantaiduta.jpg";
      else if (n.includes('bermi eco park')) img = "bermiecopark.jpg";
      else if (n.includes('ronggojalu')) img = "ronggojalu.jpg";
      else if (n.includes('tirto ageng')) img = "tirtoageng.jpg";
      else if (n.includes('kedaton')) img = "candi kedaton.jpg";
      else if (n.includes('seruni')) img = "seruni point.webp";
      else if (n.includes('bohay')) img = "pantai bohay.jfif";
      else if (n.includes('tambak sari')) img = "pantai tambak sari.jfif";
      else if (n.includes('hyang darungan')) img = "air terjun hyang darungan.jfif";
      else if (n.includes('triban')) img = "air terjun triban.jfif";
      else if (n.includes('kembang')) img = "bukit kembang.jfif";
      else if (n.includes('kali pedati')) img = "air terjun kalipedati.jfif";
      else if (n.includes('tirai bidadari')) img = "airterjun tirai bidadari.jpg";
      else if (n.includes('bahak')) img = "pantai bahak.jpg";
      else if (n.includes('panas tiris') || n.includes('sumber mata air tiris')) img = "airpanastiris.jfif";
      else if (n.includes('p30')) img = "puncak P30.jfif";
      else if (n.includes('gligir')) img = "batu gligir.jfif";
      else if (n.includes('rabunan')) img = "sungai rabunan.jfif";
      
      currentObject.gambarUrl = `/wisata/${img}`;
      currentObject.jamBuka = "07:00 - 17:00"; // default
      currentObject.hargaTiket = "Rp 15.000"; // default
      
      pariwisata.push(currentObject);
      step = 0;
    }
  } else {
    // Taman logic
    // Format is name then link
    if (step === 0) {
      currentObject = { nama: line };
      step++;
    } else if (step === 1) {
      currentObject.map = line;
      let img = "";
      const n = currentObject.nama.toLowerCase();
      if (n.includes('sl park')) img = "sl park kraksaan.jpg";
      else if (n.includes('alun-alun')) img = "alun-alun kraksaan.jpg";
      else if (n.includes('hutan kota')) img = "hutan kota kraksaan.jpg";
      
      currentObject.gambarUrl = `/wisata/${img}`;
      currentObject.deskripsi = "Ruang terbuka hijau publik di Kabupaten Probolinggo untuk berekreasi dan bersantai.";
      currentObject.lokasi = currentObject.nama; // Use name as default location
      currentObject.fasilitas = "Area Duduk, Jalur Pejalan Kaki, Toilet Umum";
      
      taman.push(currentObject);
      step = 0;
    }
  }
}

const output = `
const dummyPariwisata = ${JSON.stringify(pariwisata, null, 2)};
const dummyTaman = ${JSON.stringify(taman, null, 2)};
`;

fs.writeFileSync('c:/Users/sulis/Videos/Fullstack/kabpro/frontend/prisma/seed-data.js', output);
