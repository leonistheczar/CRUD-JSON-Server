# REST API Project

This project is a responsive REST API implementation with frontend integration. It is built using **JavaScript (Vanilla JS)**, bundled with **Webpack** for compiling it to older JS versions (i.e. ES5), and styled with CSS using **Tailwind**. It also includes a mock database (`db.json`) to simulate backend data.

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
   
3. Install dependencies:

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


---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

## 📜 License

This project is licensed under the MIT License.
