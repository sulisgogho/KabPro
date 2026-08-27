const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const data = [
  { nama: "dr. MOHAMMAD HARIS", jabatan: "Bupati Probolinggo", instansi: "Pemerintah Kabupaten Probolinggo" },
  { nama: "FAHMI AHZ", jabatan: "Wakil Bupati Probolinggo", instansi: "Pemerintah Kabupaten Probolinggo" },
  { nama: "H. UGAS IRWANTO, S.Sos., M.Si", jabatan: "Sekretaris Daerah", instansi: "Sekretariat Daerah" },
  { nama: "AGUS MUKSON, SH., M.Si", jabatan: "Staf Ahli Bidang Ekonomi dan Keuangan", instansi: "Sekretariat Daerah" },
  { nama: "H. DODDY NUR BASKORO, S.Sos., M.Si", jabatan: "Staf Ahli Bidang Hukum, Pemerintahan dan Pembangunan", instansi: "Sekretariat Daerah" },
  { nama: "H. HERI SULISTYANTO, S.Sos.,M.Si.", jabatan: "Staf Ahli Bidang Kemasyarakatan dan SDM", instansi: "Sekretariat Daerah" },
  { nama: "dr. ANANG BUDI YOELIJANTO, M.M.Kes., MMRS", jabatan: "Asisten Administrasi Umum", instansi: "Sekretariat Daerah" },
  { nama: "ABDUL GHAFUR, S.STP., M.Si", jabatan: "Asisten Pemerintahan dan Kesejahteraan Rakyat", instansi: "Sekretariat Daerah" },
  { nama: "MARETINUS SJAIFUL EFENDI, S.Sos., M.Si", jabatan: "Asisten Perekonomian dan Pembangunan", instansi: "Sekretariat Daerah" },
  { nama: "JUWONO PRASETIJO UTOMO, S.TP., MT.", jabatan: "Kepala Badan", instansi: "Badan Kepegawaian dan Pengembangan Sumber Daya Manusia" },
  { nama: "HARI KRISWANTO, S.Sos.", jabatan: "Kepala Badan", instansi: "Badan Kesatuan Bangsa dan Politik" },
  { nama: "R. OEMAR SJARIEF, ST.,MT.", jabatan: "Kepala Pelaksana Badan", instansi: "Badan Penanggulangan Bencana Daerah" },
  { nama: "KRISTIANA RULIANI, S.Sos., MM.", jabatan: "Kepala Badan", instansi: "Badan Pengelolaan Pendapatan, Keuangan dan Aset Daerah" },
  { nama: "JUWONO PRASETIJO UTOMO, S.TP., M.T.", jabatan: "Kepala Badan", instansi: "Badan Perencanaan, Penelitian dan Pengembangan Daerah" },
  { nama: "HERI MULYADI, S.STP., M.Si.", jabatan: "Kepala Dinas", instansi: "Dinas Kepemudaan, Olah Raga dan Pariwisata" },
  { nama: "-", jabatan: "Kepala Dinas", instansi: "Dinas Kependudukan dan Pencatatan Sipil" },
  { nama: "dr. HARIAWAN DWI TAMTOMO, M.MKes.", jabatan: "Kepala Dinas", instansi: "Dinas Kesehatan" },
  { nama: "YAHYADI, SP, M.MA.", jabatan: "Kepala Dinas", instansi: "Dinas Ketahanan Pangan" },
  { nama: "HUDAN SYARIFUDDIN, S.Sos., M.Si", jabatan: "Kepala Dinas", instansi: "Dinas Komunikasi, Informatika, Statistik dan Persandian" },
  { nama: "SUGENG WIYANTO, S.Sos., MM.", jabatan: "Kepala Dinas", instansi: "Dinas Koperasi, Usaha Mikro, Perdagangan dan Perindustrian" },
  { nama: "Dr. ROBY SISWANTO, ST., M.T.", jabatan: "Kepala Dinas", instansi: "Dinas Lingkungan Hidup" },
  { nama: "HENGKI CAHJO SAPUTRA, ST.,MM.", jabatan: "Kepala Dinas", instansi: "Dinas Pekerjaan Umum dan Penataan Ruang" },
  { nama: "MUNARIS, S.Sos., M.A.P.", jabatan: "Kepala Dinas", instansi: "Dinas Pemberdayaan Masyarakat dan Desa" },
  { nama: "A’AT KARDONO, SH., M.Si.", jabatan: "Kepala Dinas", instansi: "Dinas Pemberdayaan Perempuan, Perlindungan Anak, Pengendalian Penduduk, dan Keluarga Berencana" },
  { nama: "Drs. DWIJOKO NURJAYADI, MM.", jabatan: "Kepala Dinas", instansi: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu" },
  { nama: "HARY TJAHJONO, SE., MM.", jabatan: "Kepala Dinas", instansi: "Dinas Pendidikan dan Kebudayaan" },
  { nama: "EDY SURYANTO, S.Sos., M.Si.", jabatan: "Kepala Dinas", instansi: "Dinas Perhubungan" },
  { nama: "ACHMAD ARUMAN, S.Sos., MM.", jabatan: "Kepala Dinas", instansi: "Dinas Perikanan" },
  { nama: "ULFININGTYAS, SH., MM.", jabatan: "Kepala Dinas", instansi: "Dinas Perpustakaan dan Kearsipan" },
  { nama: "ARIF KURNIADI, SP., MM.", jabatan: "Kepala Dinas", instansi: "Dinas Pertanian" },
  { nama: "AGUS BUDIANTO, ST., M.Si", jabatan: "Kepala Dinas", instansi: "Dinas Perumahan, Kawasan Permukiman dan Pertanahan" },
  { nama: "RACHMAD HIDAYANTO, S.Sos., M.Si.", jabatan: "Kepala Dinas", instansi: "Dinas Sosial" },
  { nama: "SANIWAR, S.Sos., M.Si", jabatan: "Kepala Dinas", instansi: "Dinas Tenaga Kerja" },
  { nama: "IMRON ROSYADI, SP., MM.", jabatan: "Inspektur", instansi: "Inspektorat Daerah" },
  { nama: "TAUFIK ALAMI, S.Sos., M.Si.", jabatan: "Kepala Satuan", instansi: "Satuan Polisi Pamong Praja" },
  { nama: "YULIUS CHRISTIAN, S.I.P., MM.", jabatan: "Sekretaris DPRD", instansi: "Sekretariat DPRD" },
  { nama: "dr. YESSI RAHMAWATI, Sp.OG., M.H.", jabatan: "Direktur", instansi: "RSUD Waluyo Jati" },
  { nama: "dr. CATUR PRANGGA W, Sp.A,M.Kes.", jabatan: "Direktur", instansi: "RSUD Tongas" },
  { nama: "WIWIT SURYANINGSIH, S.STP., MM.", jabatan: "Kepala Bagian", instansi: "Bagian Administrasi Pembangunan" },
  { nama: "ADHY CATUR INDRA BAWONO, SH.", jabatan: "Kepala Bagian", instansi: "Bagian Hukum" },
  { nama: "Drs. SYAMSUL HUDA", jabatan: "Kepala Bagian", instansi: "Bagian Kesejahteraan Rakyat" },
  { nama: "SHOLIHIN HAMID, S.Sos., M.AP", jabatan: "Kepala Bagian", instansi: "Bagian Organisasi" },
  { nama: "MOH. SYARIFUDDIN, S.Ag., M.Si.", jabatan: "Kepala Bagian", instansi: "Bagian Pemerintahan" },
  { nama: "MOHAMMAD ABDI UTOYO, S.T., M.Si", jabatan: "Kepala Bagian", instansi: "Bagian Pengadaan Barang dan Jasa" },
  { nama: "ARIE KARTIKASARI, SE., MM.", jabatan: "Kepala Bagian", instansi: "Bagian Perekonomian dan Sumber Daya Alam" },
  { nama: "HERMANTO, S.Sos.", jabatan: "Kepala Bagian", instansi: "Bagian Protokol dan Komunikasi Pimpinan" },
  { nama: "YUWANITA DARMAN, S.I.P.,M.A.P.", jabatan: "Kepala Bagian", instansi: "Bagian Umum" },
  { nama: "JUNAEDI, S.Sos., M.Si.", jabatan: "Camat", instansi: "Kecamatan Bantaran" },
  { nama: "HUDAN KURNIAWAN, SH., M.Si", jabatan: "Camat", instansi: "Kecamatan Banyuanyar" },
  { nama: "HANDIK HARIYANTO, S.Kom., M.SI", jabatan: "Camat", instansi: "Kecamatan Besuk" },
  { nama: "INDAH ROHANI, S.Sos, M.M.", jabatan: "Camat", instansi: "Kecamatan Dringu" },
  { nama: "ERWIN YULIANTO, S.Kom., MM.", jabatan: "Camat", instansi: "Kecamatan Gading" },
  { nama: "WINDA PERMATA ERIANTI, S.STP., M.Si", jabatan: "Camat", instansi: "Kecamatan Gending" },
  { nama: "HARI PRIBADI, S.STP., M.Si.", jabatan: "Camat", instansi: "Kecamatan Kotaanyar" },
  { nama: "PUJA KURNIAWAN, S.STP., M.Si.", jabatan: "Camat", instansi: "Kecamatan Kraksaan" },
  { nama: "BAMBANG HERIWAHJUDI, S.Sos., M.Si.", jabatan: "Camat", instansi: "Kecamatan Krejengan" },
  { nama: "FEBRYA ILHAM HIDAYAT, ST., MM.", jabatan: "Camat", instansi: "Kecamatan Krucil" },
  { nama: "TAUFIQ, S.STP.", jabatan: "Camat", instansi: "Kecamatan Kuripan" },
  { nama: "MUHAMMAD SIGIT PUJOTOMO, S.Pi., M.Sc.", jabatan: "Camat", instansi: "Kecamatan Leces" },
  { nama: "BUDI UTOMO, S.Sos., MM.", jabatan: "Camat", instansi: "Kecamatan Lumbang" },
  { nama: "NURHAFIVA, S.Pi., M.A.P.", jabatan: "Camat", instansi: "Kecamatan Maron" },
  { nama: "ABDUL BARI, SH., M.Si.", jabatan: "Camat", instansi: "Kecamatan Paiton" },
  { nama: "SUDARMONO, ST., MM.", jabatan: "Camat", instansi: "Kecamatan Pajarakan" },
  { nama: "HASAN ZAINURI, S.Ag., MM.", jabatan: "Camat", instansi: "Kecamatan Pakuniran" },
  { nama: "Drs. SAIFUL HIDAYAT, MM.", jabatan: "Camat", instansi: "Kecamatan Sukapura" },
  { nama: "NUR RACHMAD SHOLEH, S.STP., M.Si", jabatan: "Camat", instansi: "Kecamatan Sumber" },
  { nama: "AGUS SETIJONO, S.Sos.", jabatan: "Camat", instansi: "Kecamatan Sumberasih" },
  { nama: "HARIYANTO, S.Sos., M.Si.", jabatan: "Camat", instansi: "Kecamatan Tegalsiwalan" },
  { nama: "ANDI WIROSO, S.Sos.", jabatan: "Camat", instansi: "Kecamatan Tiris" },
  { nama: "ROCHMAD WIDIARTO, S.STP.", jabatan: "Camat", instansi: "Kecamatan Tongas" },
  { nama: "RASYIDHI, S.Sos., MM.", jabatan: "Camat", instansi: "Kecamatan Wonomerto" },
  { nama: "URIP MUJIYONO, S.Sos., MM.", jabatan: "Lurah", instansi: "Kelurahan Patokan" },
  { nama: "RO’INUDIN, S.Pd.", jabatan: "Lurah", instansi: "Kelurahan Sidomukti" },
  { nama: "FOTRIS JUNIMIATI SANJAYA, S.Sos.", jabatan: "Lurah", instansi: "Kelurahan Kraksaan Wetan" },
  { nama: "ZAINUL HASAN, SE.", jabatan: "Lurah", instansi: "Kelurahan Kandangjati Kulon" },
  { nama: "KHOZAYMI, SH.,MM.", jabatan: "Lurah", instansi: "Kelurahan Semampir" }
];

async function main() {
  console.log("Seeding data OPD...");
  
  // First clear old data? (Optional, but safe if empty)
  // await prisma.pemerintah.deleteMany({});
  
  for (const item of data) {
    // Check if exists
    const exists = await prisma.pemerintah.findFirst({
      where: {
        nama: item.nama,
        jabatan: item.jabatan,
        instansi: item.instansi
      }
    });

    if (!exists) {
      await prisma.pemerintah.create({
        data: item
      });
      console.log(`Created: ${item.nama} - ${item.jabatan}`);
    } else {
      console.log(`Exists: ${item.nama} - ${item.jabatan}`);
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
