# REST API Project

This project is a responsive REST API implementation with frontend integration. It is built using **JavaScript (Vanilla JS)**, bundled with **Webpack** for compiling it to older JS versions (i.e. ES5), and styled with CSS using **Tailwind**. It also includes a mock database (`db.json`) to simulate backend data.

---

## 📂 Project Structure
├── api/
│ └── db.json # Mock database (used with JSON Server - *Create db.json locally* )
├── src/
│ ├── js/
│ │ ├── app.js # Main application logic
│ │ ├── easyHTTP.js # Custom HTTP request helper (GET, POST, PUT, DELETE)
│ │ ├── ui.js # UI rendering & DOM manipulation
│ │ └── app.bundler.js # Webpack bundled output
│ └── style/
│ ├── input.css # Source CSS
│ └── output.css # Compiled CSS (Tailwind)
├── index.html # Main entry point
├── webpack.config.js # Webpack configuration
└── package.json # Dependencies & scripts

---

## 🚀 Features

- REST API simulation using `db.json`
- Custom `easyHTTP.js` comprising of  AJAX / Fetch (Promises) / Fetch (Async/Await) requests
- Modular JavaScript structure (`app.js`, `ui.js`)
- CSS workflow (input → output)
- Bundled with Webpack

---

## ⚡ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/leonistheczar/CRUD-JSON-Server.git
   cd CRUD-JSON:Server
   
2. Install dependencies:

```bash
npm install
```
3. Start mock backend (JSON Server):
```bash
npx json-server --watch api/db.json --port 5000
```
4. Build frontend:
```bash
npm run build
```
5. Start local server:
```bash
npm run start
```
