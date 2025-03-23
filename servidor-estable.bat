@echo off
echo ================================================
echo SERVIDOR ESTABLE PARA DENTISTA LANDING PAGE
echo ================================================
echo.
echo Accede a la web en: http://127.0.0.1:3000
echo.
echo IMPORTANTE: Para cerrar el servidor, cierra esta ventana
echo o presiona Ctrl+C y luego S para confirmar
echo.

:: Cambiamos al directorio donde está este archivo batch
cd /d "%~dp0"

:: Eliminamos archivo .env temporal si existe
if exist .env.temp del .env.temp

:: Crear archivo .env temporal con configuración limpia
echo VITE_PORT=3000> .env.temp
echo VITE_HOST=127.0.0.1>> .env.temp
echo VITE_HOSTNAME=localhost>> .env.temp
echo NODE_ENV=development>> .env.temp

:: Hacemos una copia de seguridad del .env original si existe
if exist .env (
  copy .env .env.backup
  del .env
)

:: Renombramos el archivo temporal como .env
ren .env.temp .env

echo Iniciando servidor...
"C:\Program Files\nodejs\node.exe" ".\node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 3000 --strictPort

:: Restaurar .env original si había una copia de seguridad
if exist .env.backup (
  del .env
  ren .env.backup .env
)

pause 