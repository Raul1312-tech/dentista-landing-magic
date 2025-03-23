@echo off
echo Iniciando servidor en puerto 4000...
echo.
echo Cuando termine de cargar, accede a http://127.0.0.1:4000
echo.

"C:\Program Files\nodejs\node.exe" ".\node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 4000

pause 