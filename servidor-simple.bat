@echo off
echo =========================================
echo INICIANDO SERVIDOR SIMPLE
echo =========================================
echo.
echo Limpiando puertos...

taskkill /F /IM node.exe >nul 2>nul

echo.
echo Iniciando servidor...
echo.

"C:\Program Files\nodejs\node.exe" .\node_modules\vite\bin\vite.js --force

pause 