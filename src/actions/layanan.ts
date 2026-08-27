'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getLayanan() {
  return await prisma.layanan.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function createLayanan(formData: FormData) {
  const namaLayanan = formData.get('namaLayanan') as string;
  const instansi = formData.get('instansi') as string;
  const tautan = formData.get('tautan') as string;
  const deskripsi = formData.get('deskripsi') as string;

  await prisma.layanan.create({
    data: {
      nama: namaLayanan,
      deskripsi,
      kategori: instansi,
      linkLayanan: tautan,
      icon: null,
    }
  });

  revalidatePath('/admin/layanan');
  redirect('/admin/layanan');
}

export async function deleteLayanan(id: string) {
  await prisma.layanan.delete({
    where: { id }
  });
  revalidatePath('/admin/layanan');
}

export async function getLayananById(id: string) {
  return await prisma.layanan.findUnique({
    where: { id }
  });
}

export async function updateLayanan(id: string, formData: FormData) {
  const namaLayanan = formData.get('namaLayanan') as string;
  const instansi = formData.get('instansi') as string;
  const tautan = formData.get('tautan') as string;
  const deskripsi = formData.get('deskripsi') as string;

  await prisma.layanan.update({
    where: { id },
    data: {
      nama: namaLayanan,
      deskripsi,
      kategori: instansi,
      linkLayanan: tautan,
    }
  });

  revalidatePath('/admin/layanan');
  redirect('/admin/layanan');
}
