'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getInfografis() {
  return await prisma.infografis.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function createInfografis(formData: FormData) {
  const judul = formData.get('judul') as string;
  const kategori = formData.get('kategori') as string;

  await prisma.infografis.create({
    data: {
      judul,
      kategori: kategori || 'Umum',
    }
  });

  revalidatePath('/admin/infografis');
  redirect('/admin/infografis');
}

export async function deleteInfografis(id: string) {
  await prisma.infografis.delete({
    where: { id }
  });
  revalidatePath('/admin/infografis');
}

export async function getInfografisById(id: string) {
  return await prisma.infografis.findUnique({
    where: { id }
  });
}

export async function updateInfografis(id: string, formData: FormData) {
  const judul = formData.get('judul') as string;
  const kategori = formData.get('kategori') as string;

  await prisma.infografis.update({
    where: { id },
    data: {
      judul,
      kategori: kategori || 'Umum',
    }
  });

  revalidatePath('/admin/infografis');
  redirect('/admin/infografis');
}
