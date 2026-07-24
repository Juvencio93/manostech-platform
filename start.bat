@echo off
REM Quick Start Script for ManosTech Platform (Windows)

echo.
echo 🚀 ManosTech Platform - Quick Start
echo.

REM Try Python first
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Iniciando servidor com Python...
    python server.py
    goto end
)

REM Try Node.js
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Iniciando servidor com Node.js...
    node server.js
    goto end
)

echo ❌ Erro: Python ou Node.js não encontrado!
echo.
echo Instale um deles:
echo   - Python: https://www.python.org
echo   - Node.js: https://nodejs.org

:end
pause
