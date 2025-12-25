
import React from 'react';
import { Service, PricePackage, Benefit } from './types';

export const OWNER_NAME = "Jundi Abdullah";
export const WHATSAPP_NUMBER = "082134342089";
export const EMAIL = "Jabdrise@gmail.com";
export const WHATSAPP_LINK = `https://wa.me/6282134342089?text=Halo%20JAbd%20Tech,%20saya%20tertarik%20konsultasi%20website.`;

export const SERVICES: Service[] = [
  {
    id: 'umkm',
    title: 'Website UMKM',
    description: 'Solusi digital untuk memajukan usaha Anda dengan katalog produk online.',
    target: 'Toko, Warung, Jasa, UMKM',
    features: ['Profil Usaha', 'Katalog Produk', 'Tombol WhatsApp Order', 'Integrasi Google Maps'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'invitation',
    title: 'Undangan Digital',
    description: 'Undangan pernikahan atau acara spesial dalam bentuk website yang elegan.',
    target: 'Nikah, Walimah, Khitan, dll',
    features: ['Satu Halaman Elegan', 'Informasi Acara Lengkap', 'Peta Lokasi & Galeri', 'Optimasi Tampilan Mobile'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'school',
    title: 'Website Sekolah',
    description: 'Platform informasi profesional untuk institusi pendidikan dan pesantren.',
    target: 'Sekolah, Pesantren, Lembaga',
    features: ['Profil & Visi Misi', 'Pengumuman & Berita', 'Informasi PPDB', 'Halaman Kontak Lengkap'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
];

export const PACKAGES: PricePackage[] = [
  {
    name: 'Paket Dasar',
    price: 'Rp250.000',
    benefits: [
      '1 Website + Hosting Siap Pakai',
      'Desain Sederhana & Profesional',
      'Revisi Ringan',
      'Garansi Perbaikan 1 Bulan'
    ],
    isFeatured: false
  },
  {
    name: 'Paket Kustom',
    price: 'Nego',
    benefits: [
      'Jumlah Halaman Bebas',
      'Desain Eksklusif Sesuai Brand',
      'Domain Custom (.com, .id, dll)',
      'Fitur Tambahan (Form, Chat, dll)',
      'Bimbingan Pengelolaan'
    ],
    isFeatured: true
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Langsung Aktif',
    description: 'Website langsung bisa diakses setelah proses pengerjaan selesai.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Konsultasi & Nego',
    description: 'Bebas diskusi konsep dan harga sebelum kesepakatan.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: 'Amanah & Transparan',
    description: 'Pengerjaan jujur tanpa biaya tersembunyi yang merepotkan.',
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];
