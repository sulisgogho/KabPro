'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getDokumen() {
  return await prisma.dokumen.findMany({
    orderBy: { tanggal: 'desc' }
  })
}

export async function createDokumen(formData: FormData) {
  const judul = formData.get('judul') as string;
  const kategori = formData.get('kategori') as string;
  const tahun = formData.get('tahun') as string;
  const link = formData.get('link') as string;
  
  await prisma.dokumen.create({
    data: {
      judul,
      kategori,
      tipe: "PDF",
      fileUrl: link || null,
      tanggal: new Date(`${tahun}-01-01`),
    }
  });

  revalidatePath('/admin/dokumen');
  redirect('/admin/dokumen');
}

export async function deleteDokumen(id: string) {
  await prisma.dokumen.delete({
    where: { id }
  });
  revalidatePath('/admin/dokumen');
}

export async function getDokumenById(id: string) {
  return await prisma.dokumen.findUnique({
    where: { id }
  });
}

export async function updateDokumen(id: string, formData: FormData) {
  const judul = formData.get('judul') as string;
  const kategori = formData.get('kategori') as string;
  const tahun = formData.get('tahun') as string;
  const link = formData.get('link') as string;
  
  await prisma.dokumen.update({
    where: { id },
    data: {
      judul,
      kategori,
      fileUrl: link || null,
      tanggal: new Date(`${tahun}-01-01`),
    }
  });

  revalidatePath('/admin/dokumen');
  redirect('/admin/dokumen');
}
