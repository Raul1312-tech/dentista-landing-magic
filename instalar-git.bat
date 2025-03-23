@echo off
title INSTALADOR DE GIT PARA WINDOWS
color 0A

echo ==============================================
echo     ASISTENTE DE INSTALACION DE GIT
echo ==============================================
echo.

echo Verificando si Git ya está instalado...
git --version > nul 2>&1
if %errorlevel% equ 0 (
    echo Git ya está instalado en tu sistema.
    git --version
    echo.
    echo No es necesario continuar con la instalación.
    pause
    exit /b 0
)

echo Git no está instalado. Procediendo con la descarga...
echo.

echo Selecciona la versión de Git a instalar:
echo.
echo 1. Git para Windows 64-bit (recomendado)
echo 2. Git para Windows 32-bit
echo.

choice /c 12 /m "Selecciona una opción"
if %errorlevel% equ 1 (
    set GIT_URL=https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.2/Git-2.42.0.2-64-bit.exe
) else (
    set GIT_URL=https://github.com/git-for-windows/git/releases/download/v2.42.0.windows.2/Git-2.42.0.2-32-bit.exe
)

echo.
echo Descargando Git desde:
echo %GIT_URL%
echo.
echo Esto puede tardar unos minutos dependiendo de tu conexión...

:: Crear un directorio temporal si no existe
if not exist "%TEMP%\gitinstall" mkdir "%TEMP%\gitinstall"

:: Descargar el instalador de Git
powershell -Command "(New-Object Net.WebClient).DownloadFile('%GIT_URL%', '%TEMP%\gitinstall\git_installer.exe')"

if %errorlevel% neq 0 (
    echo.
    echo Error al descargar Git. Por favor, visita manualmente:
    echo https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo.
echo Descarga completada.
echo.
echo Iniciando la instalación de Git...
echo Por favor, sigue las instrucciones del instalador de Git.
echo.
echo NOTA: Se recomienda mantener la mayoría de opciones por defecto.
echo       Es especialmente importante seleccionar "Git from the command line and also from 3rd-party software"
echo.
pause

:: Ejecutar el instalador
start "" "%TEMP%\gitinstall\git_installer.exe"

echo.
echo El instalador de Git se ha iniciado en una nueva ventana.
echo Cuando termines la instalación, regresa aquí para continuar.
echo.
pause

:: Verificar si Git se instaló correctamente
git --version > nul 2>&1
if %errorlevel% equ 0 (
    echo.
    echo ¡Felicidades! Git se ha instalado correctamente.
    echo.
    echo Versión de Git instalada:
    git --version
    echo.
    echo Ahora puedes usar Git para gestionar tu proyecto.
    echo Ejecuta el script "configurar-git.bat" para configurar tu repositorio.
) else (
    echo.
    echo No se pudo verificar la instalación de Git.
    echo Es posible que necesites reiniciar tu computadora o configurar manualmente
    echo la variable PATH para incluir la carpeta de instalación de Git.
)

echo.
echo Proceso completado.
echo ==============================================
pause 