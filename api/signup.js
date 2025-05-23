const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end('Method Not Allowed');
  }

  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    const params = new URLSearchParams(body);
    const email = params.get('email');
    if (email) {
      const file = path.join(__dirname, '..', 'emails.txt');
      fs.appendFileSync(file, email + '\n');
    }
    res.statusCode = 200;
    res.end('OK');
  });
};
