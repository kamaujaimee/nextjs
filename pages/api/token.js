// pages/api/token.js
let items = {
    "token_type": "Bearer",
    "expires_in": 1800,
    "expires_on": 1723590237,
    "not_before": 1723597473,
    "resource": "JwtTokenIssuer",
    "access_token": "eyJ0eXAiOiJKV1QiLCJh"
};
export default function handler(req, res) {
    if (req.method === 'GET') {
        // Handle GET request: return the list of items
        res.status(200).json(items);
    } else if (req.method === 'POST') {
        // Handle POST request: add a new item
        
        res.status(200).json(items);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}