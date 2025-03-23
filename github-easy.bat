@echo off
title GITHUB FAST PUSH
color 0A

echo =========================================
echo     DENTISTA LANDING - GITHUB PUSH     
echo =========================================
echo.

:: Verificar que estamos en un repositorio Git
if not exist .git (
  echo Inicializando repositorio Git...
  git init
  echo.
) else (
  echo Repositorio Git ya inicializado.
  echo.
)

:: Mostrar estado del repositorio
echo ARCHIVOS MODIFICADOS:
echo ---------------------
git status
echo.

:: Preguntar por una descripción para el commit
set /p COMMIT_MSG="Escribe un mensaje para el commit: "
echo.

:: Añadir todos los archivos y hacer commit
echo Añadiendo archivos...
git add .
echo.

echo Creando commit con mensaje: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"
echo.

:: Preguntar por la URL del repositorio si no está configurada
git remote -v | findstr "origin" > nul
if %errorlevel% neq 0 (
  echo No hay repositorio remoto configurado.
  set /p REPO_URL="Ingresa la URL del repositorio (ej: https://github.com/usuario/repo.git): "
  echo.
  echo Configurando repositorio remoto...
  git remote add origin %REPO_URL%
  echo.
)

:: Hacer push al repositorio
echo Subiendo cambios a GitHub...
git push -u origin main

:: Si falla, intentar con master
if %errorlevel% neq 0 (
  echo Intentando push a la rama master en lugar de main...
  git push -u origin master
)

echo.
echo Proceso completado.
echo =========================================
pause 