@echo off
echo ================================================
echo INICIANDO SERVIDOR DE DENTISTA LANDING PAGE
echo ================================================
echo.
echo Accede a la web en: http://127.0.0.1:3000
echo.
echo IMPORTANTE: Para cerrar el servidor, cierra esta ventana
echo o presiona Ctrl+C y luego S para confirmar
echo.

cd /d "%~dp0"

echo Iniciando servidor...
"C:\Program Files\nodejs\node.exe" ".\node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 3000

pause 