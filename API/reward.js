export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const userId = req.query.userId || 'test';
  return res.status(200).json({ ok: true, userId: userId });
}
