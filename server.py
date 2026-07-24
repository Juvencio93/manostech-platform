#!/usr/bin/env python3

import http.server
import socketserver
import os
import sys
from pathlib import Path

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_GET(self):
        # Security: prevent directory listing
        if self.path.endswith('/'):
            # Try to serve index.html
            index_path = os.path.join(os.getcwd(), self.path, 'index.html')
            if os.path.isfile(index_path):
                self.path = os.path.join(self.path, 'index.html')
        
        # Check if file exists
        full_path = os.path.join(os.getcwd(), self.path.lstrip('/'))
        if not os.path.exists(full_path) or not os.path.isfile(full_path):
            # For SPA routing, serve index.html
            if not full_path.endswith('.js') and not full_path.endswith('.css') and not full_path.endswith('.png') and not full_path.endswith('.jpg'):
                self.path = '/index.html'
        
        return super().do_GET()

if __name__ == '__main__':
    # Change to script directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    try:
        with socketserver.TCPServer(('', PORT), MyHTTPRequestHandler) as httpd:
            print(f'\n🚀 ManosTech Platform rodando!')
            print(f'📍 http://localhost:{PORT}')
            print(f'\n✅ Abra no navegador agora!\n')
            httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n\n✋ Servidor parado.')
        sys.exit(0)
    except Exception as e:
        print(f'❌ Erro: {e}')
        sys.exit(1)
