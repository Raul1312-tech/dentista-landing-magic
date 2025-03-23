@echo off
echo =========================================
echo MATANDO TODOS LOS PROCESOS NODE Y VITE
echo =========================================
echo.

echo Cerrando procesos node.exe...
taskkill /F /IM node.exe >nul 2>nul

echo Limpiando puertos conocidos...

FOR %%p IN (3000 3001 4000 4001 4173 5173 5174 8080 8081) DO (
    echo Verificando puerto %%p...
    FOR /f "tokens=5" %%a IN ('netstat -ano ^| findstr :%%p ^| findstr LISTENING') DO (
        echo Matando proceso en puerto %%p (PID: %%a)
        taskkill /F /PID %%a >nul 2>nul
    )
)

echo.
echo =========================================
echo TODOS LOS PROCESOS ELIMINADOS
echo =========================================
echo Ahora puedes iniciar un servidor limpio.
echo.

pause 