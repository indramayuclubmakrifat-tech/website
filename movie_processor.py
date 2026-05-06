import os
import subprocess

def process_lab_video():
    # Folder input dan output
    input_dir = "video_raw"
    output_dir = "static/videos"
    content_dir = "content/posts"

    # Pastikan folder ada
    for d in [input_dir, output_dir, content_dir]:
        os.makedirs(d, exist_ok=True)

    videos = [f for f in os.listdir(input_dir) if f.endswith(('.mp4', '.mkv', '.mov'))]
    
    if not videos:
        print("Tidak ada video mentah di folder video_raw.")
        return

    for video in videos:
        input_path = os.path.join(input_dir, video)
        output_path = os.path.join(output_dir, f"proc_{video}")
        
        print(f"Sedang memproses: {video}...")
        
        # Jalankan FFmpeg via Python
        # Menggunakan preset cepat untuk Termux
        cmd = f"ffmpeg -i {input_path} -vcodec libx264 -crf 28 -preset faster -y {output_path}"
        subprocess.run(cmd, shell=True)

        # Buat file Markdown untuk Hugo
        meta_name = video.split('.')[0]
        with open(f"{content_dir}/{meta_name}.md", "w") as f:
            f.write(f"""---
title: "Hasil Lab: {meta_name}"
date: 2026-05-06
video: "videos/proc_{video}"
draft: false
---
Video ini otomatis diproses oleh sistem **Indramayu Club Makrifat**.
""")
    print("Semua video berhasil masuk ke katalog Website Lab.")

if __name__ == "__main__":
    process_lab_video()
