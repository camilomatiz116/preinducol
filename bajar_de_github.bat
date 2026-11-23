@echo off
chcp 65001 > nul
title Preinducol - Bajar Cambios de GitHub
echo ========================================================
echo   PREINDUCOL - BAJAR CAMBIOS DE GITHUB (CASA / OFICINA)
echo ========================================================
echo.

cd /d "%~dp0"

echo Descargando ultimos cambios desde GitHub (git pull origin main)...
git pull origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   [EXITO] Tu proyecto esta 100%% actualizado.
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   [AVISO] Hubo un problema al descargar los cambios.
    echo ========================================================
)

echo.
pause
