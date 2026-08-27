'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getAgenda() {
  return await prisma.agenda.findMany({
    orderBy: { tanggalPelaksanaan: 'desc' }
  })
}

export async function createAgenda(formData: FormData) {
  const judul = formData.get('judul') as string;
  const tanggal = formData.get('tanggal') as string;
  const waktu = formData.get('waktu') as string;
  const lokasi = formData.get('lokasi') as string;
  const deskripsi = formData.get('deskripsi') as string;
  
  const tanggalPelaksanaan = new Date(`${tanggal}T${waktu}:00`);

  await prisma.agenda.create({
    data: {
      judul,
      deskripsi,
      lokasi,
      tanggalPelaksanaan,
    }
  });

  revalidatePath('/admin/agenda');
  revalidatePath('/');
  redirect('/admin/agenda');
}

export async function deleteAgenda(id: string) {
  await prisma.agenda.delete({
    where: { id }
  });
  revalidatePath('/admin/agenda');
  revalidatePath('/');
}

export async function getAgendaById(id: string) {
  return await prisma.agenda.findUnique({
    where: { id }
  });
}

export async function updateAgenda(id: string, formData: FormData) {
  const judul = formData.get('judul') as string;
  const tanggal = formData.get('tanggal') as string;
  const waktu = formData.get('waktu') as string;
  const lokasi = formData.get('lokasi') as string;
  const deskripsi = formData.get('deskripsi') as string;
  
  const tanggalPelaksanaan = new Date(`${tanggal}T${waktu}:00`);

  await prisma.agenda.update({
    where: { id },
    data: {
      judul,
      deskripsi,
      lokasi,
      tanggalPelaksanaan,
    }
  });

  revalidatePath('/admin/agenda');
  revalidatePath('/');
  redirect('/admin/agenda');
}
