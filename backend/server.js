/* ==========================================================================
   SAHKI PORTFOLIO — ZERO-DEPENDENCY NODE.JS LOCAL SERVER & DATA UPDATER
   Jalankan: node backend/server.js  -> Buka http://localhost:3000
   ========================================================================== */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const ROOT = path.join(__dirname, "..");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp"
};

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/save-data") {
    let body = "";
    req.on("data", (chunk) => { body += chunk; });
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        if (parsed.pin !== "2503010033" && parsed.pin !== "sahki2026") {
          res.writeHead(403, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ ok: false, error: "Unauthorized PIN" }));
        }
        const jsOut = "const SAHKI_PORTFOLIO_DATA = " + JSON.stringify(parsed.data, null, 2) + ";\n";
        fs.writeFileSync(path.join(ROOT, "js", "sahki_data.js"), jsOut, "utf-8");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, error: err.message }));
      }
    });
    return;
  }

  let safePath = req.url.split("?")[0];
  if (safePath === "/") safePath = "/index.html";
  const filePath = path.join(ROOT, safePath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 Not Found");
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Sahki Portfolio berjalan di http://localhost:${PORT}`);
  console.log(`Panel Pemilik Privat: http://localhost:${PORT}/admin.html`);
});
