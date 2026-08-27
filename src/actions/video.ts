'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

function extractYoutubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : url; // fallback to url if not matching exactly 11 chars
}

export async function getVideo() {
  return await prisma.video.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export async function createVideo(formData: FormData) {
  const judul = formData.get('judul') as string;
  const linkYoutube = formData.get('linkYoutube') as string;
  const kategori = formData.get('kategori') as string;

  const youtubeId = extractYoutubeId(linkYoutube);

  await prisma.video.create({
    data: {
      judul,
      youtubeId: youtubeId,
      kategori: kategori || 'Umum',
    }
  });

  revalidatePath('/admin/video');
  redirect('/admin/video');
}

export async function deleteVideo(id: string) {
  await prisma.video.delete({
    where: { id }
  });
  revalidatePath('/admin/video');
}

export async function getVideoById(id: string) {
  return await prisma.video.findUnique({
    where: { id }
  });
}

export async function updateVideo(id: string, formData: FormData) {
  const judul = formData.get('judul') as string;
  const linkYoutube = formData.get('linkYoutube') as string;
  const kategori = formData.get('kategori') as string;

  const youtubeId = extractYoutubeId(linkYoutube);

  await prisma.video.update({
    where: { id },
    data: {
      judul,
      youtubeId: youtubeId,
      kategori: kategori || 'Umum',
    }
  });

  revalidatePath('/admin/video');
  redirect('/admin/video');
}
