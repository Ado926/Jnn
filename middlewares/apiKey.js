export default function (req, res, next) {
  const key = req.query.apikey
  if (!key || key !== 'adonix') return res.status(403).json({ error: 'Invalid or missing API key' })
  next()
}
