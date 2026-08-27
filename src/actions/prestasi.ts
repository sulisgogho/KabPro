'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getPrestasi() {
  return await prisma.prestasi.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function createPrestasi(formData: FormData) {
  const judul = formData.get('judul') as string;
  const tahun = formData.get('tahun') as string;
  const kategori = formData.get('kategori') as string;
  const deskripsi = formData.get('deskripsi') as string;

  await prisma.prestasi.create({
    data: {
      judul,
      tahun,
      kategori,
      deskripsi,
    }
  });

  revalidatePath('/admin/prestasi');
  redirect('/admin/prestasi');
}

export async function deletePrestasi(id: string) {
  await prisma.prestasi.delete({
    where: { id }
  });
  revalidatePath('/admin/prestasi');
}

export async function getPrestasiById(id: string) {
  return await prisma.prestasi.findUnique({
    where: { id }
  });
}

export async function updatePrestasi(id: string, formData: FormData) {
  const judul = formData.get('judul') as string;
  const tahun = formData.get('tahun') as string;
  const kategori = formData.get('kategori') as string;
  const deskripsi = formData.get('deskripsi') as string;

  await prisma.prestasi.update({
    where: { id },
    data: {
      judul,
      tahun,
      kategori,
      deskripsi,
    }
  });

  revalidatePath('/admin/prestasi');
  redirect('/admin/prestasi');
}
