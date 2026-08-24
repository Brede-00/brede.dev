"""
Regenerate public/Brede-Resume.pdf from resume-source/resume.html.

The Chrome command-line flag --print-to-pdf-no-header does NOT reliably
suppress the header/footer (confirmed: it leaked a timestamp and file URL
into a resume PDF once already). This uses the DevTools Protocol's
Page.printToPDF directly instead, which takes displayHeaderFooter as an
explicit param and actually respects it.

Run from anywhere:
    python3 resume-source/print.py
"""

import base64
import json
import os
import subprocess
import time
import urllib.request

import websocket

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT = 9333
HERE = os.path.dirname(os.path.abspath(__file__))
SOURCE = os.path.join(HERE, "resume.html")
OUT = os.path.join(os.path.dirname(HERE), "public", "Brede-Resume.pdf")


def main():
    url = f"file://{SOURCE}"
    proc = subprocess.Popen([
        CHROME, "--headless", "--disable-gpu", "--no-sandbox",
        f"--remote-debugging-port={PORT}", "--remote-allow-origins=*", "about:blank",
    ])
    try:
        for _ in range(30):
            try:
                urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json/version")
                break
            except Exception:
                time.sleep(0.5)

        req = urllib.request.Request(f"http://127.0.0.1:{PORT}/json/new?{url}", method="PUT")
        tab = json.load(urllib.request.urlopen(req))
        ws = websocket.create_connection(tab["webSocketDebuggerUrl"])

        def send(method, params=None, msg_id=1):
            ws.send(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
            while True:
                resp = json.loads(ws.recv())
                if resp.get("id") == msg_id:
                    return resp

        send("Page.enable", msg_id=1)
        time.sleep(1.5)  # let webfonts/layout settle
        result = send("Page.printToPDF", {
            "printBackground": True,
            "displayHeaderFooter": False,
            "preferCSSPageSize": True,
        }, msg_id=2)

        with open(OUT, "wb") as f:
            f.write(base64.b64decode(result["result"]["data"]))
        print(f"Wrote {OUT}")
        ws.close()
    finally:
        proc.terminate()
        proc.wait(timeout=5)


if __name__ == "__main__":
    main()
