@echo off
title Liberando Puerto 3000
color 0A

echo ================================================
echo LIBERANDO PUERTO 3000
echo ================================================
echo.
echo Este script matará cualquier proceso que esté usando el puerto 3000
echo para que puedas iniciar el servidor sin problemas.
echo.
echo Por favor, espera...
echo.

:: Encontrar el PID del proceso que está usando el puerto 3000
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do (
    set pid=%%a
)

:: Si encontramos un proceso, lo terminamos
if defined pid (
    echo Se encontró un proceso (PID: %pid%) usando el puerto 3000.
    echo Terminando proceso...
    taskkill /F /PID %pid%
    echo.
    echo Proceso terminado correctamente.
) else (
    echo No se encontró ningún proceso usando el puerto 3000.
)

echo.
echo Puerto 3000 liberado. Ahora puedes iniciar el servidor.
echo.
pause 