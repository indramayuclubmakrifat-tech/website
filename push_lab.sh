#!/bin/bash
echo "--- Menyingkronkan ke GitHub ---"
git add .
git commit -m "Update sistem Lab Kerja: $(date)"
git push -u origin main
echo "Selesai! Kode terbaru sudah aman di GitHub."
