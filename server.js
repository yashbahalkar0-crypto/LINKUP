const http = require('node:http');
const fs   = require('node:fs');
const path = require('node:path');

const port = Number(process.env.PORT || 3000);
const root = __dirname;

/* ── MIME types for static serving ── */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

/* ── Clean URL mapping ── */
const CLEAN_URLS = {
  '/':               'index.html',
  '/conversations':  'conversations.html',
  '/how-it-works':   'how-it-works.html',
  '/safety':         'safety.html',
  '/rescheduling':   'rescheduling.html',
};

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    return res.end('Method Not Allowed');
  }

  /* Resolve the file path */
  const urlPath = req.url.split('?')[0];  // strip query strings
  let filePath;

  if (CLEAN_URLS[urlPath]) {
    filePath = path.join(root, CLEAN_URLS[urlPath]);
  } else {
    /* Serve static files (css/, js/, assets/, etc.) */
    const safePath = path.normalize(urlPath).replace(/^(\.\.(\/|\\|$))+/, '');
    filePath = path.join(root, safePath);
  }

  /* Check file exists */
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end('<h1>404 — Page not found</h1><p><a href="/">Go home</a></p>');
  }

  /* Determine content type */
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  /* Read and serve */
  const content = fs.readFileSync(filePath);
  res.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(content);
});

server.listen(port, () => {
  console.log(`\n  ☕  LinkUp is running at http://localhost:${port}\n`);
  console.log('  Pages:');
  console.log(`    Home:          http://localhost:${port}/`);
  console.log(`    Conversations: http://localhost:${port}/conversations`);
  console.log(`    How It Works:  http://localhost:${port}/how-it-works`);
  console.log(`    Safety:        http://localhost:${port}/safety`);
  console.log(`    Rescheduling:  http://localhost:${port}/rescheduling`);
  console.log('');
});
