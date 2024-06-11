// Import modul HTTP bawaan Node.js
const http = require('http')

// Buat server HTTP
const server = http.createServer((req, res) => {
  // Set header respons HTTP
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  // Kirim pesan "Hello, World!"
  res.end('Hello, World!')
})

// Tentukan port di mana server akan mendengarkan
const port = 3000

// Jalankan server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
