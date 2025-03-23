@echo off
echo Verificando archivo hosts...
echo.

type C:\Windows\System32\drivers\etc\hosts | findstr localhost
echo.
echo Si no aparece una línea con "127.0.0.1 localhost", puede haber un problema con tu configuración.
echo.

echo Verificando conectividad...
ping -n 4 localhost
echo.

echo Verificando disponibilidad del puerto 3000...
netstat -ano | findstr :3000
echo.

pause 