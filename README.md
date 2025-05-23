# echoes-of-dawn

Simple card drawing preview site.

## Running locally

1. Install a static server such as `serve` or use Python:
   ```bash
   npx serve .
   # or
   python3 -m http.server
   ```
2. Open `http://localhost:5000/index.html` (or whichever port the server prints).

The signup form posts to `api/signup` which writes submitted emails to `emails.txt`.

## Coming soon

The draw page includes a placeholder that will soon provide AI-generated readings for each card. For now, a simple message is shown after each draw.
