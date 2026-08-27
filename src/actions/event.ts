'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getEvent() {
  return await prisma.event.findMany({
    orderBy: { tanggalPelaksanaan: 'desc' }
  })
}

export async function createEvent(formData: FormData) {
  const judul = formData.get('judul') as string;
  const tanggal = formData.get('tanggal') as string;
  const waktu = formData.get('waktu') as string;
  const lokasi = formData.get('lokasi') as string;
  const deskripsi = formData.get('deskripsi') as string;
  
  const tanggalPelaksanaan = new Date(`${tanggal}T${waktu}:00`);

  await prisma.event.create({
    data: {
      judul,
      deskripsi,
      lokasi,
      tanggalPelaksanaan,
    }
  });

  revalidatePath('/admin/event');
  redirect('/admin/event');
}

export async function deleteEvent(id: string) {
  await prisma.event.delete({
    where: { id }
  });
  revalidatePath('/admin/event');
}

export async function getEventById(id: string) {
  return await prisma.event.findUnique({
    where: { id }
  });
}

export async function updateEvent(id: string, formData: FormData) {
  const judul = formData.get('judul') as string;
  const tanggal = formData.get('tanggal') as string;
  const waktu = formData.get('waktu') as string;
  const lokasi = formData.get('lokasi') as string;
  const deskripsi = formData.get('deskripsi') as string;
  
  const tanggalPelaksanaan = new Date(`${tanggal}T${waktu}:00`);

  await prisma.event.update({
    where: { id },
    data: {
      judul,
      deskripsi,
      lokasi,
      tanggalPelaksanaan,
    }
  });

  revalidatePath('/admin/event');
  redirect('/admin/event');
}
