import http.server, socketserver, threading, webbrowser, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
PORT = 8765
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"로또 AI 앱 실행 중: http://127.0.0.1:{PORT}/index.html")
    threading.Timer(0.6, lambda: webbrowser.open(f"http://127.0.0.1:{PORT}/index.html")).start()
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
