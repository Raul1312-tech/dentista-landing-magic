@echo off
echo Iniciando servidor con localhost...
echo.
echo Cuando termine de cargar, accede a http://localhost:8080
echo.

"C:\Program Files\nodejs\node.exe" ".\node_modules\vite\bin\vite.js" --host localhost --port 8080 --open

pause 