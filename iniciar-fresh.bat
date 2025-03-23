@echo off
title Iniciar Servidor - Modo Fresco
color 0A

echo =========================================
echo INICIANDO SERVIDOR LIMPIO
echo =========================================
echo.

echo Matando procesos anteriores...
taskkill /F /IM node.exe >nul 2>nul

echo.
echo Limpiando cache...
echo.

if exist node_modules\.vite (
  rmdir /S /Q node_modules\.vite
  echo Cache de Vite eliminado.
) else (
  echo No se encontró cache de Vite.
)

echo.
echo Iniciando servidor en modo desarrollo...
echo.
echo El servidor estará disponible en:
echo - http://localhost:5173
echo.

"C:\Program Files\nodejs\node.exe" .\node_modules\vite\bin\vite.js --force

pause 