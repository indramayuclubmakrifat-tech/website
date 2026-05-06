#!/bin/bash
echo "--- MEMULAI OTOMATISASI LAB KERJA ---"

# Cek apakah Hugo sudah ada, jika belum buat baru
if [ ! -d "content" ]; then
    echo "Inisialisasi Situs Hugo Baru..."
    hugo new site . --force
fi

# Jalankan mesin pengolah video
echo "Menjalankan Python Movie Processor..."
python3 movie_processor.py

# Build Website
echo "Membangun Website Statis..."
hugo

echo "Selesai! File website ada di folder 'public'."
echo "Gunakan 'hugo server' untuk melihat hasil website lab."
