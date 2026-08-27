'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getPemerintah() {
  return await prisma.pemerintah.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function createPemerintah(formData: FormData) {
  const nama = formData.get('nama') as string;
  const jabatan = formData.get('jabatan') as string;
  const instansi = formData.get('instansi') as string;

  await prisma.pemerintah.create({
    data: {
      nama,
      jabatan,
      instansi: instansi || 'Pemerintah Kabupaten',
    }
  });

  revalidatePath('/admin/pemerintah');
  redirect('/admin/pemerintah');
}

export async function deletePemerintah(id: string) {
  await prisma.pemerintah.delete({
    where: { id }
  });
  revalidatePath('/admin/pemerintah');
}

export async function getPemerintahById(id: string) {
  return await prisma.pemerintah.findUnique({
    where: { id }
  });
}

export async function updatePemerintah(id: string, formData: FormData) {
  const nama = formData.get('nama') as string;
  const jabatan = formData.get('jabatan') as string;
  const instansi = formData.get('instansi') as string;

  await prisma.pemerintah.update({
    where: { id },
    data: {
      nama,
      jabatan,
      instansi: instansi || 'Pemerintah Kabupaten',
    }
  });

  revalidatePath('/admin/pemerintah');
  redirect('/admin/pemerintah');
}
