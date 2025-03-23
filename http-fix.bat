@echo off
title Servidor HTTP Puro
color 02

echo =========================================
echo INICIANDO SERVIDOR HTTP PURO
echo =========================================
echo.

echo Matando procesos Node.js anteriores...
taskkill /F /IM node.exe >nul 2>nul

echo.
echo Creando archivo temporal servidor.js...
echo.

echo const http = require('http'); > servidor.js
echo const fs = require('fs'); >> servidor.js
echo const path = require('path'); >> servidor.js
echo. >> servidor.js
echo const PORT = 9999; >> servidor.js
echo. >> servidor.js
echo const MIME_TYPES = { >> servidor.js
echo   '.html': 'text/html', >> servidor.js
echo   '.js': 'text/javascript', >> servidor.js
echo   '.css': 'text/css', >> servidor.js
echo   '.json': 'application/json', >> servidor.js
echo   '.png': 'image/png', >> servidor.js
echo   '.jpg': 'image/jpg', >> servidor.js
echo   '.gif': 'image/gif', >> servidor.js
echo   '.svg': 'image/svg+xml', >> servidor.js
echo   '.ico': 'image/x-icon' >> servidor.js
echo }; >> servidor.js
echo. >> servidor.js
echo const server = http.createServer((req, res) => { >> servidor.js
echo   console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`); >> servidor.js
echo. >> servidor.js
echo   let filePath = '.' + req.url; >> servidor.js
echo   if (filePath === './') filePath = './index.html'; >> servidor.js
echo. >> servidor.js
echo   const extname = path.extname(filePath); >> servidor.js
echo   const contentType = MIME_TYPES[extname] || 'application/octet-stream'; >> servidor.js
echo. >> servidor.js
echo   fs.readFile(filePath, (error, content) => { >> servidor.js
echo     if (error) { >> servidor.js
echo       if (error.code === 'ENOENT') { >> servidor.js
echo         console.log(`Archivo no encontrado: ${filePath}`); >> servidor.js
echo         fs.readFile('./index.html', (err, content) => { >> servidor.js
echo           if (err) { >> servidor.js
echo             res.writeHead(500); >> servidor.js
echo             res.end('Error en el servidor'); >> servidor.js
echo             console.error(err); >> servidor.js
echo           } else { >> servidor.js
echo             res.writeHead(200, { 'Content-Type': 'text/html' }); >> servidor.js
echo             res.end(content, 'utf-8'); >> servidor.js
echo           } >> servidor.js
echo         }); >> servidor.js
echo       } else { >> servidor.js
echo         res.writeHead(500); >> servidor.js
echo         res.end(`Error en el servidor: ${error.code}`); >> servidor.js
echo         console.error(error); >> servidor.js
echo       } >> servidor.js
echo     } else { >> servidor.js
echo       res.writeHead(200, { 'Content-Type': contentType }); >> servidor.js
echo       res.end(content, 'utf-8'); >> servidor.js
echo     } >> servidor.js
echo   }); >> servidor.js
echo }); >> servidor.js
echo. >> servidor.js
echo server.listen(PORT, () => { >> servidor.js
echo   console.log(`Servidor ejecutándose en http://localhost:${PORT}/`); >> servidor.js
echo   console.log('Presiona Ctrl+C para detener el servidor'); >> servidor.js
echo }); >> servidor.js

echo.
echo Iniciando servidor HTTP puro en puerto 9999...
echo.
echo El servidor estará disponible en:
echo - http://localhost:9999
echo.

start "" http://localhost:9999

"C:\Program Files\nodejs\node.exe" servidor.js

del /F /Q servidor.js

pause 