@echo off
setlocal enabledelayedexpansion

echo =========================================
echo SUBIR CAMBIOS A GITHUB
echo =========================================
echo.

:: Comprobar si Git está instalado en la ubicación típica
set "GIT_CMD="
if exist "C:\Program Files\Git\cmd\git.exe" (
    set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
) else if exist "C:\Program Files (x86)\Git\cmd\git.exe" (
    set "GIT_CMD=C:\Program Files (x86)\Git\cmd\git.exe"
) else (
    echo Git no se encuentra instalado en las ubicaciones habituales.
    echo.
    
    set /p INSTALL_GIT="¿Quieres descargar e instalar Git ahora? (S/N): "
    if /i "!INSTALL_GIT!"=="S" (
        echo Abriendo página de descarga de Git...
        start https://git-scm.com/download/win
        echo Después de instalar Git, ejecuta este script nuevamente.
        pause
        exit
    ) else (
        echo Operación cancelada. Para usar este script necesitas Git.
        pause
        exit
    )
)

echo Usando Git desde: !GIT_CMD!
echo.

:: Comprobar si ya está inicializado el repositorio Git
if not exist ".git" (
    echo El repositorio Git no está inicializado.
    set /p INIT_GIT="¿Quieres inicializar el repositorio Git ahora? (S/N): "
    if /i "!INIT_GIT!"=="S" (
        "!GIT_CMD!" init
        echo Repositorio Git inicializado.
    ) else (
        echo Operación cancelada. Para usar este script necesitas inicializar Git.
        pause
        exit
    )
)

:: Comprobar la configuración de usuario
for /f "tokens=*" %%a in ('"!GIT_CMD!" config --global user.name') do set GIT_USERNAME=%%a
for /f "tokens=*" %%a in ('"!GIT_CMD!" config --global user.email') do set GIT_EMAIL=%%a

if "!GIT_USERNAME!"=="" (
    echo.
    echo Necesitas configurar tu nombre de usuario en Git.
    set /p USERNAME="Introduce tu nombre de usuario: "
    "!GIT_CMD!" config --global user.name "!USERNAME!"
)

if "!GIT_EMAIL!"=="" (
    echo.
    echo Necesitas configurar tu correo electrónico en Git.
    set /p EMAIL="Introduce tu correo electrónico: "
    "!GIT_CMD!" config --global user.email "!EMAIL!"
)

:: Ver estado actual
echo.
echo === ESTADO ACTUAL ===
"!GIT_CMD!" status
echo.

:: Preguntar por el mensaje de commit
set /p COMMIT_MSG="Introduce el mensaje para el commit (por defecto: 'Actualización'): "
if "!COMMIT_MSG!"=="" set COMMIT_MSG=Actualización

:: Añadir todos los cambios
echo.
echo Añadiendo todos los cambios...
"!GIT_CMD!" add .

:: Hacer commit
echo.
echo Haciendo commit de los cambios...
"!GIT_CMD!" commit -m "!COMMIT_MSG!"

:: Comprobar si ya existe una conexión con un repositorio remoto
for /f "tokens=*" %%a in ('"!GIT_CMD!" remote -v') do set GIT_REMOTE=%%a

if "!GIT_REMOTE!"=="" (
    echo.
    echo No hay ningún repositorio remoto configurado.
    set /p REMOTE_URL="Introduce la URL del repositorio remoto (ejemplo: https://github.com/usuario/repositorio.git): "
    
    if "!REMOTE_URL!"=="" (
        echo No se ha proporcionado una URL válida. No se puede continuar.
        pause
        exit
    )
    
    "!GIT_CMD!" remote add origin !REMOTE_URL!
    echo Repositorio remoto añadido: !REMOTE_URL!
)

:: Hacer push
echo.
echo Subiendo cambios al repositorio remoto...
"!GIT_CMD!" push -u origin master

if errorlevel 1 (
    echo.
    echo Error al hacer push. Probando con la rama 'main' en lugar de 'master'...
    "!GIT_CMD!" push -u origin main
    
    if errorlevel 1 (
        echo.
        echo También ha fallado con 'main'. Listando ramas disponibles:
        "!GIT_CMD!" branch
        echo.
        set /p BRANCH="Introduce el nombre de la rama a la que quieres hacer push: "
        "!GIT_CMD!" push -u origin !BRANCH!
    )
)

echo.
if errorlevel 0 (
    echo ¡Cambios subidos correctamente a GitHub!
) else (
    echo Ha habido algún problema al subir los cambios. Revisa los mensajes anteriores.
)

echo.
pause 