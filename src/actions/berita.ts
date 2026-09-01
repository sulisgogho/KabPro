'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function getBerita() {
  return await prisma.berita.findMany({
    orderBy: { tanggal: 'desc' }
  })
}

export async function createBerita(formData: FormData) {
  const judul = formData.get('judul') as string;
  const kategori = formData.get('kategori') as string;
  const tanggal = formData.get('tanggal') as string;
  const konten = formData.get('konten') as string;
  const gambar = formData.get('gambar') as File | null;
  
  // Generate a simple slug
  const slug = judul.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now();

  let gambarUrl = null;
  if (gambar && gambar.size > 0) {
    const bytes = await gambar.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${(gambar.name || 'image.jpg').replace(/[^a-zA-Z0-9.-]/g, '')}`;
    const path = join(process.cwd(), 'public/image', filename);
    await writeFile(path, buffer);
    gambarUrl = `/image/${filename}`;
  }

  await prisma.berita.create({
    data: {
      judul,
      slug,
      kategori,
      konten,
      tanggal: new Date(tanggal),
      status: "Published",
      gambarUrl
    }
  });

  revalidatePath('/admin/berita');
  redirect('/admin/berita');
}

export async function deleteBerita(id: string) {
  await prisma.berita.delete({
    where: { id }
  });
  revalidatePath('/admin/berita');
}

export async function getBeritaById(id: string) {
  return await prisma.berita.findUnique({
    where: { id }
  });
}

export async function updateBerita(id: string, formData: FormData) {
  const judul = formData.get('judul') as string;
  const kategori = formData.get('kategori') as string;
  const tanggal = formData.get('tanggal') as string;
  const konten = formData.get('konten') as string;
  const gambar = formData.get('gambar') as File | null;
  const removeGambar = formData.get('removeGambar') === 'true';
  
  // Re-generate slug (optional, but good for SEO if title changes)
  const slug = judul.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now();

  const updateData: Record<string, unknown> = {
    judul,
    slug,
    kategori,
    konten,
    tanggal: new Date(tanggal),
  };

  if (removeGambar) {
    // Admin explicitly removed the image
    updateData.gambarUrl = null;
  } else if (gambar && gambar.size > 0) {
    // Admin uploaded a new image
    const bytes = await gambar.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${(gambar.name || 'image.jpg').replace(/[^a-zA-Z0-9.-]/g, '')}`;
    const path = join(process.cwd(), 'public/image', filename);
    await writeFile(path, buffer);
    updateData.gambarUrl = `/image/${filename}`;
  }
  // If neither, keep existing gambarUrl unchanged

  await prisma.berita.update({
    where: { id },
    data: updateData,
  });

  revalidatePath('/admin/berita');
  redirect('/admin/berita');
}
