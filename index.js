const { exec } = require('child_process');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/run-auto') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        exec('python3 movie_processor.py', (err, stdout, stderr) => {
            res.end(`
                <body style="background:#000; color:#0f0; padding:20px; font-family:monospace;">
                    <h2>SISTEM LOG: PROSES SELESAI</h2>
                    <pre>${stdout}</pre>
                    <a href="/" style="color:white; font-size:20px;">[ KEMBALI KE DASHBOARD ]</a>
                </body>
            `);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB TV - INDRAMAYU CLUB</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            background: #0a0a0a; 
            color: #ffffff; 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow-y: auto; /* Memungkinkan Scrolling */
            min-height: 100vh;
        }
        .header {
            height: 60vh;
            background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, #0a0a0a 100%), 
                        url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 40px;
        }
        .container { padding: 40px; }
        h1 { font-size: 3rem; margin-bottom: 10px; text-shadow: 2px 2px 10px rgba(0,0,0,0.5); }
        .tagline { color: #aaa; font-size: 1.2rem; margin-bottom: 30px; }
        
        .btn-main {
            display: inline-block;
            background: #e50914;
            color: white;
            padding: 15px 40px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.5rem;
            transition: 0.3s;
            box-shadow: 0 4px 15px rgba(229, 9, 20, 0.4);
        }
        .btn-main:hover { transform: scale(1.05); background: #ff0f1b; }

        .section-title { margin-top: 50px; margin-bottom: 20px; font-size: 1.8rem; border-left: 5px solid #e50914; padding-left: 15px; }
        
        .grid-tv {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding-bottom: 50px;
        }
        .card {
            background: #1f1f1f;
            border-radius: 8px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            border: 2px solid transparent;
            transition: 0.3s;
            cursor: pointer;
        }
        .card:hover { border-color: white; transform: translateY(-5px); }
        
        /* Full Screen & Scroll Style */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>LAB KERJA MAKRIFAT</h1>
        <p class="tagline">Sistem Automasi Video FFmpeg & Hugo Dashboard</p>
        <div>
            <a href="/run-auto" class="btn-main">▶ JALANKAN OTOMATISASI</a>
        </div>
    </div>

    <div class="container">
        <div class="section-title">Katalog Kerja Terkini</div>
        <div class="grid-tv">
            <div class="card">VIDEO GENERATOR</div>
            <div class="card">HUGO CMS</div>
            <div class="card">FFMPEG CORE</div>
            <div class="card">TERMUX SERVER</div>
            <div class="card">NODE INTERFACE</div>
            <div class="card">ARCHITECT SYSTEM</div>
        </div>

        <div class="section-title">Status Sistem</div>
        <p style="color: #0f0;">● Server Aktif di Port 5000</p>
        <p style="color: #aaa; margin-top: 10px;">Indramayu Club Makrifat - 2026 Global Reputation</p>
    </div>
</body>
</html>
        `);
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`\n🚀 DASHBOARD TV NYATA AKTIF!`);
    console.log(`🔗 Akses di: http://localhost:${PORT}`);
    console.log(`Tekan Ctrl + C untuk berhenti.\n`);
});
