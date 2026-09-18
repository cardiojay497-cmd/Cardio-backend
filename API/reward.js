export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const userId = req.query.userId || req.body?.userId || 'guest';
  console.log('Adsgram reward for:', userId);
  
  // Here you go add TON to user later
  return res.status(200).json({ ok: true, reward: 0.05, userId: userId });
}
