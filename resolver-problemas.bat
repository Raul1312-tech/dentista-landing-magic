@echo off
title SOLUCIÓN DE PROBLEMAS DE CONEXIÓN
color 0E

echo =========================================
echo HERRAMIENTA DE SOLUCIÓN DE PROBLEMAS
echo =========================================
echo.
echo Esta herramienta diagnosticará y resolverá problemas comunes
echo con el servidor de desarrollo.
echo.
pause

cls
echo =========================================
echo FASE 1: LIMPIEZA DE PROCESOS
echo =========================================
echo.
echo Matando todos los procesos de Node.js...
taskkill /F /IM node.exe >nul 2>nul

echo.
echo Liberando todos los puertos en uso...
FOR %%p IN (3000 3001 4000 4001 5000 5173 5174 8000 8080 8888) DO (
    echo Verificando puerto %%p...
    FOR /f "tokens=5" %%a IN ('netstat -ano ^| findstr :%%p ^| findstr LISTENING') DO (
        echo Matando proceso en puerto %%p (PID: %%a)
        taskkill /F /PID %%a >nul 2>nul
    )
)
echo.
echo Procesos eliminados correctamente.
echo.
timeout /t 2 >nul

cls
echo =========================================
echo FASE 2: LIMPIEZA DE CACHÉ
echo =========================================
echo.
echo Eliminando caché de Vite...
if exist node_modules\.vite (
    rmdir /S /Q node_modules\.vite
    echo Caché de Vite eliminado.
) else (
    echo No se encontró caché de Vite.
)

echo.
echo Verificando archivo de bloqueo...
if exist ./.lock (
    del /F /Q ./.lock
    echo Archivo de bloqueo eliminado.
) else (
    echo No se encontró archivo de bloqueo.
)
echo.
timeout /t 2 >nul

cls
echo =========================================
echo FASE 3: COMPROBACIÓN DE RED
echo =========================================
echo.
echo Comprobando conexión local...
ping -n 3 127.0.0.1 | findstr "TTL="
if %errorlevel% equ 0 (
    echo Conexión local funcionando correctamente.
) else (
    echo ERROR: No se puede conectar localmente a 127.0.0.1
    echo Esto indica un problema grave con la pila TCP/IP.
)

echo.
echo Comprobando firewall...
netsh advfirewall show currentprofile state | findstr "Estado" 
echo.
echo Estado del adaptador de red:
ipconfig | findstr "IPv4" 
echo.
timeout /t 3 >nul

cls
echo =========================================
echo FASE 4: REINICIO DEL SERVICIO
echo =========================================
echo.
echo Actualizando configuración de Vite...

echo.
echo Iniciando servidor en modo seguro...
echo El servidor estará disponible en:
echo - http://localhost:8888

start "" http://localhost:8888
timeout /t 3 >nul

echo.
echo Iniciando servidor...
"C:\Program Files\nodejs\node.exe" .\node_modules\vite\bin\vite.js --port 8888 --host localhost --force

pause 