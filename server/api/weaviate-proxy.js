// server/api/weaviate-proxy.js
const fetch = require('node-fetch');

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end('Method Not Allowed');
  }

  try {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      const { query } = JSON.parse(body);

      // Forward the GraphQL request to Weaviate
      const WEAVIATE_URL = 'http://acg-floating-204-197-5-43.acg.maine.edu:8080/v1/graphql';
      const WEAVIATE_API_KEY = 'wNIf2XunX2THHTK6y1aDEr0lyj0FFv4x6KqT';

      const resp = await fetch(WEAVIATE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${WEAVIATE_API_KEY}`,
        },
        body: JSON.stringify({ query }),
      });

      const json = await resp.json();
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(json));
    });
  } catch (err) {
    console.error('Proxy error:', err);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.toString() }));
  }
};
