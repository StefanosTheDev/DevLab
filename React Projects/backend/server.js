const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // To parse JSON body

// Sample crypto data
let cryptoList = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
  { id: 'ripple', name: 'Ripple', symbol: 'XRP' },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA' },
  { id: 'solana', name: 'Solana', symbol: 'SOL' },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE' },
  { id: 'litecoin', name: 'Litecoin', symbol: 'LTC' },
  { id: 'polkadot', name: 'Polkadot', symbol: 'DOT' },
  { id: 'tron', name: 'TRON', symbol: 'TRX' },
  { id: 'avalanche', name: 'Avalanche', symbol: 'AVAX' },
];

// ──────────────── CRUD Routes ────────────────

// READ all
app.get('/cryptos', (req, res) => {
  res.json(cryptoList);
});

// READ single
app.get('/cryptos/:id', (req, res) => {
  const crypto = cryptoList.find((c) => c.id === req.params.id);
  if (!crypto) return res.status(404).json({ error: 'Crypto not found' });
  res.json(crypto);
});

// CREATE new
app.post('/cryptos', (req, res) => {
  const { id, name, symbol } = req.body;
  if (!id || !name || !symbol)
    return res.status(400).json({ error: 'Missing fields' });

  const exists = cryptoList.find((c) => c.id === id);
  if (exists) return res.status(409).json({ error: 'Crypto already exists' });

  const newCrypto = { id, name, symbol };
  cryptoList.push(newCrypto);
  res.status(201).json(newCrypto);
});

// UPDATE existing
app.put('/cryptos/:id', (req, res) => {
  const { name, symbol } = req.body;
  const crypto = cryptoList.find((c) => c.id === req.params.id);
  if (!crypto) return res.status(404).json({ error: 'Crypto not found' });

  if (name) crypto.name = name;
  if (symbol) crypto.symbol = symbol;

  res.json(crypto);
});

// DELETE
app.delete('/cryptos/:id', (req, res) => {
  const index = cryptoList.findIndex((c) => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Crypto not found' });

  const removed = cryptoList.splice(index, 1);
  res.json({ deleted: removed[0] });
});

// ──────────────── Start Server ────────────────
app.listen(PORT, () => {
  console.log(
    `🚀 Local crypto API running at http://localhost:${PORT}/cryptos`
  );
});
