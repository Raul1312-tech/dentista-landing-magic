@echo off
title ASISTENTE DE GITHUB - DENTISTA LANDING
color 0A

echo =========================================
echo    ASISTENTE DE CONFIGURACION DE GIT
echo =========================================
echo.

REM Verificar si Git está instalado
git --version > nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git no está instalado en este sistema.
    echo.
    echo Por favor, descarga e instala Git desde:
    echo https://git-scm.com/download/win
    echo.
    echo Después de instalar Git, ejecuta este script nuevamente.
    echo.
    pause
    exit /b 1
)

echo Git está instalado correctamente.
echo.

REM Configurar usuario de Git si no existe
git config --global user.name > nul 2>&1
if %errorlevel% neq 0 (
    echo Configurando usuario de Git...
    set /p username="Ingresa tu nombre de usuario para Git: "
    git config --global user.name "%username%"
    echo.
)

REM Configurar email de Git si no existe
git config --global user.email > nul 2>&1
if %errorlevel% neq 0 (
    echo Configurando email de Git...
    set /p email="Ingresa tu email para Git: "
    git config --global user.email "%email%"
    echo.
)

echo Configuración actual de Git:
echo.
git config --global user.name
git config --global user.email
echo.

REM Verificar si ya existe un repositorio Git
if not exist .git (
    echo Inicializando repositorio Git...
    git init
    echo.
)

echo Verificando archivos modificados...
git status
echo.

echo ¿Deseas añadir todos los archivos y hacer commit?
choice /c SN /m "S para Sí, N para No"
if %errorlevel% equ 1 (
    echo.
    echo Añadiendo archivos al staging...
    git add .
    
    echo.
    set /p commit_msg="Ingresa un mensaje para el commit: "
    
    echo.
    echo Creando commit...
    git commit -m "%commit_msg%"
    echo.
)

echo ¿Deseas configurar un repositorio remoto en GitHub?
choice /c SN /m "S para Sí, N para No"
if %errorlevel% equ 1 (
    echo.
    set /p repo_url="Ingresa la URL del repositorio GitHub (ej: https://github.com/usuario/repo.git): "
    
    echo.
    echo Configurando repositorio remoto...
    git remote add origin %repo_url%
    
    echo.
    echo ¿Deseas hacer push a la rama main?
    choice /c SN /m "S para Sí, N para No"
    if %errorlevel% equ 1 (
        echo.
        echo Haciendo push a GitHub...
        git push -u origin main
        
        if %errorlevel% equ 0 (
            echo.
            echo ¡Éxito! Tu código ha sido subido a GitHub.
        ) else (
            echo.
            echo Error al hacer push. Puede que necesites:
            echo 1. Hacer pull primero: git pull origin main
            echo 2. Usar otra rama en lugar de main: git push -u origin master
            echo 3. Configurar tu token de acceso personal para autenticación
        )
    )
)

echo.
echo Proceso completado.
pause 