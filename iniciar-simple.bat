@echo off
title SERVIDOR LOCAL SIMPLE
color 0A

echo =========================================
echo INICIANDO SERVIDOR SIMPLE
echo =========================================
echo.

echo Matando procesos anteriores...
taskkill /F /IM node.exe >nul 2>nul

echo.
echo Limpiando puertos...
FOR %%p IN (3000 3001 4000 5173 8000 8080) DO (
    netstat -ano | findstr :%%p | findstr LISTENING > nul
    if not errorlevel 1 (
        for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%p ^| findstr LISTENING') do (
            echo Liberando puerto %%p (PID: %%a)
            taskkill /F /PID %%a >nul 2>nul
        )
    )
)

echo.
echo Eliminando cache de Vite...
if exist node_modules\.vite (
    rmdir /S /Q node_modules\.vite >nul 2>nul
)

echo.
echo Servidor disponible en:
echo - http://localhost:3000
echo.
echo Abriendo navegador...

start "" http://localhost:3000

timeout /t 2 >nul

"C:\Program Files\nodejs\node.exe" .\node_modules\vite\bin\vite.js --port 3000 --strictPort false --host localhost 