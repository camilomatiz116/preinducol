@echo off
chcp 65001 > nul
title Preinducol - Publicacion Automatica a 1 Clic
echo ========================================================
echo   PREINDUCOL - PUBLICAR A GITHUB Y SERVIDOR (1 CLIC)
echo ========================================================
echo.
cd /d "%~dp0"
python deploy_emcilabs.py
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Ocurrio un problema durante la publicacion.
)
echo.
pause
