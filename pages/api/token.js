// pages/api/token.js
let items = {
    "ClientReference": "ngscreener01",
    "SearchEngineVersion": "5.76.220.0"
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