@echo off
title Servidor con apertura automática del navegador
color 0A

echo =========================================
echo INICIANDO SERVIDOR CON APERTURA AUTOMÁTICA
echo =========================================
echo.

echo Matando procesos anteriores...
taskkill /F /IM node.exe >nul 2>nul

echo.
echo Limpiando puertos...
FOR %%p IN (3000 3001 5173 8080) DO (
    FOR /f "tokens=5" %%a IN ('netstat -ano ^| findstr :%%p ^| findstr LISTENING') DO (
        taskkill /F /PID %%a >nul 2>nul
    )
)

echo.
echo Iniciando servidor y abriendo navegador...
echo.
echo Espera unos segundos para que cargue completamente...

start "" http://localhost:8888

timeout /t 2 >nul

"C:\Program Files\nodejs\node.exe" .\node_modules\vite\bin\vite.js --port 8888 --open --host localhost

pause 