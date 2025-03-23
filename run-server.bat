@echo off
title SERVIDOR DENTISTA LANDING
color 0A

echo ==================================
echo INICIANDO SERVIDOR - PUERTO 3000
echo ==================================
echo.

"C:\Program Files\nodejs\node.exe" .\node_modules\vite\bin\vite.js --port 3000 --host localhost

pause 