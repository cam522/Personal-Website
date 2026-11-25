# Cameron Wilson's Personal Website
A simple personal portfolio website for Cameron Wilson, an IT student based in Christchurch, New Zealand. It introduces Cameron, highlights skills and projects, and provides contact details and a CV.

## Pages
- **Home** — Introduction and overview of the website.
- **About Me** — Skills and interests.
- **Projects** — Personal server setup and projects loaded from the backend API.
- **Contact** — Email, GitHub, LinkedIn, and CV links.

## Built with
- HTML
- CSS
- JavaScript
- Node.js and Express

## View locally
Start the backend from the `backend` directory:

```sh
npm install
npm start
```

Then open `http://localhost:3000` in a browser. The backend serves the website and provides the projects API at `http://localhost:3000/projects`. Keep the backend running while browsing; opening the HTML files directly will not load backend data.

## Project structure
```text

├── index.html
├── script.js
├── pages/
│   ├── about.html
│   ├── contact.html
│   └── projects.html
├── css/
│   └── style.css
├── images/
│   ├── Cameron-CV.pdf
│   └── server.jpg
└── backend/
    ├── package.json
    └── server.js
```
