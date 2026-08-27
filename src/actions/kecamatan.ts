'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getKecamatan() {
  return await prisma.kecamatan.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function createKecamatan(formData: FormData) {
  const nama = formData.get('nama') as string;
  const namaCamat = formData.get('namaCamat') as string;
  const linkWebsite = formData.get('linkWebsite') as string;
  const alamatProfil = formData.get('alamatProfil') as string;

  await prisma.kecamatan.create({
    data: {
      nama,
      namaCamat,
      linkWebsite,
      luasWilayah: alamatProfil || '0',
      jumlahPenduduk: '0'
    }
  });

  revalidatePath('/admin/kecamatan');
  redirect('/admin/kecamatan');
}

export async function deleteKecamatan(id: string) {
  await prisma.kecamatan.delete({
    where: { id }
  });
  revalidatePath('/admin/kecamatan');
}

export async function getKecamatanById(id: string) {
  return await prisma.kecamatan.findUnique({
    where: { id }
  });
}

export async function updateKecamatan(id: string, formData: FormData) {
  const nama = formData.get('nama') as string;
  const namaCamat = formData.get('namaCamat') as string;
  const linkWebsite = formData.get('linkWebsite') as string;
  const alamatProfil = formData.get('alamatProfil') as string;

  await prisma.kecamatan.update({
    where: { id },
    data: {
      nama,
      namaCamat,
      linkWebsite,
      luasWilayah: alamatProfil || '0',
    }
  });

  revalidatePath('/admin/kecamatan');
  redirect('/admin/kecamatan');
}
