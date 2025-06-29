export default async function handler(req, res) {
  const { apikey } = req.query
  if (apikey !== 'adonix') return res.status(403).json({ error: 'Invalid API key' })
  res.json({ message: 'SpotifyDL endpoint activo 🎧 (pero aún no implementado)' })
}
