# SvelteKit-One-Bundle
Hacky solution to wrap SvelteKit project in one bundle.js to be loaded/called from another application.
Built and rewrapped solution is located @ /dist folder.

## Process of development
npm run dev
-> open https://localhost:5005/

## Process of testing the build
npm run build
cd dist
python -m http.server --cgi 8082
-> open http://localhost:8082/
