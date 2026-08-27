'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getPariwisata() {
  return await prisma.pariwisata.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function createPariwisata(formData: FormData) {
  const nama = formData.get('nama') as string;
  const lokasi = formData.get('lokasi') as string;
  const deskripsi = formData.get('deskripsi') as string;
  const linkMaps = formData.get('linkMaps') as string;

  await prisma.pariwisata.create({
    data: {
      nama,
      deskripsi,
      lokasi,
      kategori: 'Wisata Umum',
      linkMaps,
    }
  });

  revalidatePath('/admin/pariwisata');
  redirect('/admin/pariwisata');
}

export async function deletePariwisata(id: string) {
  await prisma.pariwisata.delete({
    where: { id }
  });
  revalidatePath('/admin/pariwisata');
}

export async function getPariwisataById(id: string) {
  return await prisma.pariwisata.findUnique({
    where: { id }
  });
}

export async function updatePariwisata(id: string, formData: FormData) {
  const nama = formData.get('nama') as string;
  const lokasi = formData.get('lokasi') as string;
  const deskripsi = formData.get('deskripsi') as string;
  const linkMaps = formData.get('linkMaps') as string;

  await prisma.pariwisata.update({
    where: { id },
    data: {
      nama,
      deskripsi,
      lokasi,
      linkMaps,
    }
  });

  revalidatePath('/admin/pariwisata');
  redirect('/admin/pariwisata');
}
