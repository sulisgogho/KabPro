'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getTaman() {
  return await prisma.taman.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function createTaman(formData: FormData) {
  const nama = formData.get('nama') as string;
  const lokasi = formData.get('lokasi') as string;
  const deskripsi = formData.get('deskripsi') as string;
  const fasilitas = formData.get('fasilitas') as string;
  const linkMaps = formData.get('linkMaps') as string;

  await prisma.taman.create({
    data: {
      nama,
      lokasi,
      deskripsi,
      fasilitas,
      linkMaps,
    }
  });

  revalidatePath('/admin/taman');
  redirect('/admin/taman');
}

export async function deleteTaman(id: string) {
  await prisma.taman.delete({
    where: { id }
  });
  revalidatePath('/admin/taman');
}

export async function getTamanById(id: string) {
  return await prisma.taman.findUnique({
    where: { id }
  });
}

export async function updateTaman(id: string, formData: FormData) {
  const nama = formData.get('nama') as string;
  const lokasi = formData.get('lokasi') as string;
  const deskripsi = formData.get('deskripsi') as string;
  const fasilitas = formData.get('fasilitas') as string;
  const linkMaps = formData.get('linkMaps') as string;

  await prisma.taman.update({
    where: { id },
    data: {
      nama,
      lokasi,
      deskripsi,
      fasilitas,
      linkMaps,
    }
  });

  revalidatePath('/admin/taman');
  redirect('/admin/taman');
}
