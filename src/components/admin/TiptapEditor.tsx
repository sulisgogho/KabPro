'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Youtube from '@tiptap/extension-youtube';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import TextAlign from '@tiptap/extension-text-align';

import { 
  Bold, Italic, Strikethrough, Underline as UnderlineIcon,
  Subscript as SubscriptIcon, Superscript as SuperscriptIcon,
  Heading2, Heading3, Heading4, 
  List, ListOrdered, Quote, 
  Link as LinkIcon, Image as ImageIcon, PlaySquare as YoutubeIcon,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Undo, Redo,
  Plus
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface TiptapEditorProps {
  initialContent?: string;
  name: string;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt('Masukkan URL Gambar:');
    if (url) {
      const alt = window.prompt('Masukkan Alt Text (Wajib untuk SEO):');
      if (alt !== null) {
        editor.chain().focus().setImage({ src: url, alt }).run();
      }
    }
  };

  const addYoutube = () => {
    const url = window.prompt('Masukkan URL YouTube:');
    if (url) {
      editor.chain().focus().setYoutubeVideo({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL:', previousUrl);
    
    if (url === null) return;
    
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 bg-slate-50/50 rounded-t-xl sticky top-0 z-10">
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('bold') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Bold"><Bold className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('italic') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Italic"><Italic className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('underline') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Underline"><UnderlineIcon className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('strike') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Strikethrough"><Strikethrough className="w-4 h-4" /></button>
      </div>
      
      <div className="w-px h-6 bg-slate-300 mx-1"></div>

      <div className="flex items-center gap-1">
        <button type="button" onClick={() => editor.chain().focus().toggleSubscript().run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('subscript') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Subscript"><SubscriptIcon className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleSuperscript().run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('superscript') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Superscript"><SuperscriptIcon className="w-4 h-4" /></button>
      </div>

      <div className="w-px h-6 bg-slate-300 mx-1"></div>
      
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Heading 2"><Heading2 className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Heading 3"><Heading3 className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('heading', { level: 4 }) ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Heading 4"><Heading4 className="w-4 h-4" /></button>
      </div>

      <div className="w-px h-6 bg-slate-300 mx-1"></div>

      <div className="flex items-center gap-1">
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('bulletList') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Bullet List"><List className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('orderedList') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Ordered List"><ListOrdered className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('blockquote') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Blockquote"><Quote className="w-4 h-4" /></button>
      </div>

      <div className="w-px h-6 bg-slate-300 mx-1"></div>

      <div className="flex items-center gap-1">
        <button type="button" onClick={setLink} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive('link') ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Link"><LinkIcon className="w-4 h-4" /></button>
        <button type="button" onClick={addImage} className="p-2 rounded-lg hover:bg-slate-200 transition-colors text-slate-600" title="Image"><ImageIcon className="w-4 h-4" /></button>
        <button type="button" onClick={addYoutube} className="p-2 rounded-lg hover:bg-slate-200 transition-colors text-slate-600" title="YouTube"><YoutubeIcon className="w-4 h-4" /></button>
      </div>

      <div className="w-px h-6 bg-slate-300 mx-1"></div>

      <div className="flex items-center gap-1">
        <button type="button" onClick={() => { editor.chain().focus().run(); (editor as any).commands.setTextAlign('left'); }} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Align Left"><AlignLeft className="w-4 h-4" /></button>
        <button type="button" onClick={() => { editor.chain().focus().run(); (editor as any).commands.setTextAlign('center'); }} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Align Center"><AlignCenter className="w-4 h-4" /></button>
        <button type="button" onClick={() => { editor.chain().focus().run(); (editor as any).commands.setTextAlign('right'); }} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Align Right"><AlignRight className="w-4 h-4" /></button>
        <button type="button" onClick={() => { editor.chain().focus().run(); (editor as any).commands.setTextAlign('justify'); }} className={`p-2 rounded-lg hover:bg-slate-200 transition-colors ${editor.isActive({ textAlign: 'justify' }) ? 'bg-slate-200 text-slate-900' : 'text-slate-600'}`} title="Justify"><AlignJustify className="w-4 h-4" /></button>
      </div>

      <div className="w-px h-6 bg-slate-300 mx-1"></div>

      <div className="flex items-center gap-1">
        <button type="button" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()} className="p-2 rounded-lg hover:bg-slate-200 transition-colors text-slate-600 disabled:opacity-50 disabled:hover:bg-transparent" title="Undo"><Undo className="w-4 h-4" /></button>
        <button type="button" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()} className="p-2 rounded-lg hover:bg-slate-200 transition-colors text-slate-600 disabled:opacity-50 disabled:hover:bg-transparent" title="Redo"><Redo className="w-4 h-4" /></button>
      </div>
    </div>
  );
};

export default function TiptapEditor({ initialContent = '', name }: TiptapEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3, 4],
        },
        dropcursor: {
          color: '#3b82f6',
          width: 3,
        },
      }),
      Underline,
      Subscript,
      Superscript,
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-xl mx-auto max-w-full',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          rel: 'noopener noreferrer',
          target: '_blank',
          class: 'text-blue-600 underline hover:text-blue-800 transition-colors cursor-pointer',
        },
      }),
      Youtube.configure({
        inline: false,
        HTMLAttributes: {
          class: 'w-full aspect-video rounded-xl overflow-hidden',
        },
      }),
      Placeholder.configure({
        placeholder: 'Mulai ketik draf berita di sini...',
        emptyEditorClass: 'cursor-text before:content-[attr(data-placeholder)] before:text-slate-400 before:absolute before:pointer-events-none',
      }),
      CharacterCount,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
        defaultAlignment: 'left',
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none min-h-[400px] p-6 text-slate-700 bg-white rounded-b-xl max-w-none',
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  if (!isMounted) return null;

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-shadow bg-slate-50/50 flex flex-col relative">
      <MenuBar editor={editor} />
      
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className="flex items-center bg-slate-800 text-white rounded-lg shadow-xl overflow-hidden px-1 py-1">
          <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`p-2 hover:bg-slate-700 transition-colors ${editor.isActive('bold') ? 'bg-slate-700 text-white' : 'text-slate-300'}`}><Bold className="w-4 h-4" /></button>
          <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-2 hover:bg-slate-700 transition-colors ${editor.isActive('italic') ? 'bg-slate-700 text-white' : 'text-slate-300'}`}><Italic className="w-4 h-4" /></button>
          <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={`p-2 hover:bg-slate-700 transition-colors ${editor.isActive('underline') ? 'bg-slate-700 text-white' : 'text-slate-300'}`}><UnderlineIcon className="w-4 h-4" /></button>
          <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={`p-2 hover:bg-slate-700 transition-colors ${editor.isActive('strike') ? 'bg-slate-700 text-white' : 'text-slate-300'}`}><Strikethrough className="w-4 h-4" /></button>
          <div className="w-px h-5 bg-slate-600 mx-1"></div>
          <button type="button" onClick={() => {
            const previousUrl = editor.getAttributes('link').href;
            const url = window.prompt('URL:', previousUrl);
            if (url === null) return;
            if (url === '') { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
          }} className={`p-2 hover:bg-slate-700 transition-colors ${editor.isActive('link') ? 'bg-slate-700 text-white' : 'text-slate-300'}`}><LinkIcon className="w-4 h-4" /></button>
        </BubbleMenu>
      )}

      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }} className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden px-2 py-1">
          <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="p-2 hover:bg-slate-100 text-slate-700 rounded-md transition-colors" title="Heading 2"><Heading2 className="w-4 h-4" /></button>
          <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className="p-2 hover:bg-slate-100 text-slate-700 rounded-md transition-colors" title="Bullet List"><List className="w-4 h-4" /></button>
          <button type="button" onClick={() => {
            const url = window.prompt('Masukkan URL Gambar:');
            if (url) {
              const alt = window.prompt('Masukkan Alt Text (Wajib untuk SEO):');
              if (alt !== null) editor.chain().focus().setImage({ src: url, alt }).run();
            }
          }} className="p-2 hover:bg-slate-100 text-slate-700 rounded-md transition-colors" title="Image"><ImageIcon className="w-4 h-4" /></button>
        </FloatingMenu>
      )}

      <div className="relative flex-grow cursor-text" onClick={() => editor?.commands.focus()}>
        <EditorContent editor={editor} className="h-full" />
      </div>

      {editor && (
        <div className="bg-slate-50 border-t border-slate-200 p-3 text-xs font-medium text-slate-500 flex justify-between items-center rounded-b-xl">
          <div className="flex items-center gap-4">
            <span>{editor.storage.characterCount.words()} kata</span>
            <span>{editor.storage.characterCount.characters()} karakter</span>
          </div>
          <div className="text-slate-400">
            Ketik <kbd className="px-1.5 py-0.5 bg-slate-200 rounded-md border border-slate-300 shadow-sm text-[10px]">Enter</kbd> untuk baris baru
          </div>
        </div>
      )}

      <input type="hidden" name={name} value={content} />
    </div>
  );
}
