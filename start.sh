#!/bin/bash
# Quick Start Script for ManosTech Platform

echo ""
echo "🚀 ManosTech Platform - Quick Start"
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "✅ Iniciando servidor com Python..."
    python3 server.py
elif command -v python &> /dev/null; then
    echo "✅ Iniciando servidor com Python..."
    python server.py
elif command -v node &> /dev/null; then
    echo "✅ Iniciando servidor com Node.js..."
    node server.js
else
    echo "❌ Erro: Python ou Node.js não encontrado!"
    echo "\nInstale um deles:"
    echo "  - Python: https://www.python.org"
    echo "  - Node.js: https://nodejs.org"
    exit 1
fi
