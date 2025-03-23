@echo off
title Servidor Estático
color 0A

echo =========================================
echo INICIANDO SERVIDOR ESTÁTICO SIMPLE
echo =========================================
echo.

echo Verificando si http-server está instalado...
if not exist .\node_modules\.bin\http-server.cmd (
  echo Instalando http-server globalmente...
  "C:\Program Files\nodejs\npm.cmd" install http-server -g
)

echo.
echo Matando procesos anteriores...
taskkill /F /IM node.exe >nul 2>nul

echo.
echo Iniciando servidor estático en puerto 8000...
echo.
echo El servidor estará disponible en:
echo - http://localhost:8000
echo.

start "" http://localhost:8000

timeout /t 2 >nul

"C:\Program Files\nodejs\node.exe" .\node_modules\.bin\http-server -p 8000 -o --cors

pause 