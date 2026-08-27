const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const camatData = [
  { nama: "JUNAEDI, S.Sos., M.Si.", instansi: "Bantaran" },
  { nama: "HUDAN KURNIAWAN, SH., M.Si", instansi: "Banyuanyar" },
  { nama: "HANDIK HARIYANTO, S.Kom., M.SI", instansi: "Besuk" },
  { nama: "INDAH ROHANI, S.Sos, M.M.", instansi: "Dringu" },
  { nama: "ERWIN YULIANTO, S.Kom., MM.", instansi: "Gading" },
  { nama: "WINDA PERMATA ERIANTI, S.STP., M.Si", instansi: "Gending" },
  { nama: "HARI PRIBADI, S.STP., M.Si.", instansi: "Kotaanyar" },
  { nama: "PUJA KURNIAWAN, S.STP., M.Si.", instansi: "Kraksaan" },
  { nama: "BAMBANG HERIWAHJUDI, S.Sos., M.Si.", instansi: "Krejengan" },
  { nama: "FEBRYA ILHAM HIDAYAT, ST., MM.", instansi: "Krucil" },
  { nama: "TAUFIQ, S.STP.", instansi: "Kuripan" },
  { nama: "MUHAMMAD SIGIT PUJOTOMO, S.Pi., M.Sc.", instansi: "Leces" },
  { nama: "BUDI UTOMO, S.Sos., MM.", instansi: "Lumbang" },
  { nama: "NURHAFIVA, S.Pi., M.A.P.", instansi: "Maron" },
  { nama: "ABDUL BARI, SH., M.Si.", instansi: "Paiton" },
  { nama: "SUDARMONO, ST., MM.", instansi: "Pajarakan" },
  { nama: "HASAN ZAINURI, S.Ag., MM.", instansi: "Pakuniran" },
  { nama: "Drs. SAIFUL HIDAYAT, MM.", instansi: "Sukapura" },
  { nama: "NUR RACHMAD SHOLEH, S.STP., M.Si", instansi: "Sumber" },
  { nama: "AGUS SETIJONO, S.Sos.", instansi: "Sumberasih" },
  { nama: "HARIYANTO, S.Sos., M.Si.", instansi: "Tegalsiwalan" },
  { nama: "ANDI WIROSO, S.Sos.", instansi: "Tiris" },
  { nama: "ROCHMAD WIDIARTO, S.STP.", instansi: "Tongas" },
  { nama: "RASYIDHI, S.Sos., MM.", instansi: "Wonomerto" }
];

async function main() {
  console.log("Menghapus data Lurah dari tabel Pemerintah...");
  const deleteLurah = await prisma.pemerintah.deleteMany({
    where: { jabatan: "Lurah" }
  });
  console.log(`Terhapus ${deleteLurah.count} data Lurah.`);

  console.log("Menghapus data Camat dari tabel Pemerintah...");
  const deleteCamat = await prisma.pemerintah.deleteMany({
    where: { jabatan: "Camat" }
  });
  console.log(`Terhapus ${deleteCamat.count} data Camat.`);

  console.log("Memperbarui tabel Kecamatan...");
  for (const camat of camatData) {
    const existingKecamatan = await prisma.kecamatan.findFirst({
      where: { nama: camat.instansi }
    });

    if (existingKecamatan) {
      await prisma.kecamatan.update({
        where: { id: existingKecamatan.id },
        data: { namaCamat: camat.nama }
      });
      console.log(`Updated Kecamatan ${camat.instansi} dengan camat: ${camat.nama}`);
    } else {
      await prisma.kecamatan.create({
        data: {
          nama: camat.instansi,
          namaCamat: camat.nama,
          luasWilayah: "-",
          jumlahPenduduk: "-",
        }
      });
      console.log(`Created Kecamatan ${camat.instansi} dengan camat: ${camat.nama}`);
    }
  }

  console.log("Selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
