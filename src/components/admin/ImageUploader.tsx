'use client';

import { useState, useRef } from 'react';
import { Upload, Trash2, ImageOff } from 'lucide-react';

interface ImageUploaderProps {
  currentImageUrl?: string | null;
}

export default function ImageUploader({ currentImageUrl }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(currentImageUrl ?? null);
  const [removed, setRemoved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setRemoved(false);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    setRemoved(true);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700">Gambar Cover</label>

      {/* Hidden input to signal removal to server action */}
      {removed && <input type="hidden" name="removeGambar" value="true" />}

      <div className="relative">
        {/* Upload area */}
        <label
          htmlFor="gambar"
          className={`border-2 border-dashed rounded-2xl h-[260px] flex flex-col items-center justify-center text-slate-500 transition-colors cursor-pointer group bg-slate-50/50 relative overflow-hidden
            ${preview ? 'border-slate-200 hover:border-blue-400' : 'border-slate-200 hover:border-blue-400 hover:bg-slate-50'}`}
        >
          {preview ? (
            <>
              <img
                src={preview}
                alt="Preview cover"
                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-40 transition-opacity"
              />
              <div className="relative z-10 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-4 rounded-2xl text-white">
                <Upload className="w-8 h-8 mb-2" />
                <span className="font-bold text-sm">Klik untuk Ganti Gambar</span>
              </div>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Upload className="w-8 h-8 text-blue-500" />
              </div>
              <p className="font-bold text-slate-700 mb-1">Klik untuk upload gambar</p>
              <p className="text-sm text-slate-400">PNG, JPG, JPEG (Maks. 2MB)</p>
            </>
          )}
          <input
            ref={fileInputRef}
            type="file"
            id="gambar"
            name="gambar"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Remove button — only show if there's a preview */}
        {preview && (
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-3 right-3 z-20 w-9 h-9 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            title="Hapus Gambar"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* State info */}
      {removed && (
        <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
          <ImageOff className="w-4 h-4 flex-shrink-0" />
          <span>Gambar akan dihapus saat Anda menyimpan perubahan.</span>
        </div>
      )}
    </div>
  );
}
