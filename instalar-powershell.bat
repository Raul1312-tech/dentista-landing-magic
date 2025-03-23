@echo off
title INSTALADOR DE POWERSHELL 7
color 0A

echo ==============================================
echo     ASISTENTE DE INSTALACION DE POWERSHELL 7
echo ==============================================
echo.

echo Verificando si PowerShell 7 ya está instalado...
powershell -Command "$PSVersionTable.PSVersion.Major" | findstr /c:"7" > nul
if %errorlevel% equ 0 (
    echo PowerShell 7 ya está instalado en tu sistema.
    echo.
    powershell -Command "$PSVersionTable.PSVersion"
    echo.
    echo No es necesario continuar con la instalación.
    pause
    exit /b 0
)

echo PowerShell 7 no está instalado o no es la versión predeterminada.
echo Procediendo con la descarga e instalación...
echo.

choice /c SN /m "¿Deseas instalar PowerShell 7 ahora? (S/N)"
if %errorlevel% neq 1 (
    echo.
    echo Instalación cancelada por el usuario.
    pause
    exit /b 0
)

echo.
echo Existen varias formas de instalar PowerShell 7:
echo.
echo 1. Usando Microsoft Store (recomendado si tienes acceso)
echo 2. Usando winget (si está disponible en tu sistema)
echo 3. Descargando e instalando el MSI manualmente
echo.

choice /c 123 /m "Selecciona una opción"
set OPTION=%errorlevel%

if %OPTION% equ 1 (
    echo.
    echo Abriendo Microsoft Store...
    start ms-windows-store://pdp/?productid=9MZ1SNWT0N5D
    echo.
    echo Se ha abierto la Microsoft Store. Busca "PowerShell" e instálalo.
    echo Una vez instalado, reinicia el script de configuración de Git.
)

if %OPTION% equ 2 (
    echo.
    echo Verificando si winget está disponible...
    winget --version > nul 2>&1
    if %errorlevel% neq 0 (
        echo.
        echo Winget no está disponible en tu sistema.
        echo Procediendo con el método de instalación manual.
        goto INSTALL_MSI
    )
    
    echo.
    echo Instalando PowerShell 7 usando winget...
    winget install --id Microsoft.PowerShell
    
    if %errorlevel% neq 0 (
        echo.
        echo Error al instalar PowerShell 7 con winget.
        echo Procediendo con el método de instalación manual.
        goto INSTALL_MSI
    )
    
    echo.
    echo PowerShell 7 se ha instalado correctamente con winget.
)

if %OPTION% equ 3 (
    :INSTALL_MSI
    echo.
    echo Descargando PowerShell 7 MSI...
    
    :: Crear carpeta temporal
    if not exist "%TEMP%\ps7install" mkdir "%TEMP%\ps7install"
    
    :: URL de descarga para PowerShell 7 (64-bit)
    set PS_URL=https://github.com/PowerShell/PowerShell/releases/download/v7.4.1/PowerShell-7.4.1-win-x64.msi
    
    :: Descargar MSI
    echo Descargando desde %PS_URL%...
    powershell -Command "(New-Object Net.WebClient).DownloadFile('%PS_URL%', '%TEMP%\ps7install\ps7.msi')"
    
    if %errorlevel% neq 0 (
        echo.
        echo Error al descargar PowerShell 7. 
        echo Visita https://github.com/PowerShell/PowerShell/releases/ para descargarlo manualmente.
        pause
        exit /b 1
    )
    
    echo.
    echo Instalando PowerShell 7...
    start /wait msiexec /i "%TEMP%\ps7install\ps7.msi" /quiet ADD_EXPLORER_CONTEXT_MENU_OPENPOWERSHELL=1 ADD_FILE_CONTEXT_MENU_RUNPOWERSHELL=1 ENABLE_PSREMOTING=1 REGISTER_MANIFEST=1
    
    echo.
    echo Verificando la instalación...
    if exist "C:\Program Files\PowerShell\7\pwsh.exe" (
        echo.
        echo PowerShell 7 se ha instalado correctamente.
    ) else (
        echo.
        echo No se pudo verificar la instalación de PowerShell 7.
        echo Es posible que se haya instalado en una ubicación diferente.
    )
)

echo.
echo Proceso completado.
echo.
echo Para usar PowerShell 7, abre una nueva ventana de PowerShell 
echo o escribe "pwsh" en la línea de comandos.
echo.
echo Ya puedes ejecutar el script "configurar-git.bat" para configurar Git.
echo ==============================================
pause 