import ytdl from 'ytdl-core'

export default async function handler(req, res) {
  const { url, apikey } = req.query
  if (apikey !== 'adonix') return res.status(403).json({ error: 'Invalid API key' })
  if (!url || !ytdl.validateURL(url)) return res.status(400).json({ error: 'Invalid URL' })

  try {
    const info = await ytdl.getInfo(url)
    const title = info.videoDetails.title
    res.setHeader('Content-Disposition', `attachment; filename="${title}.mp4"`)
    ytdl(url, { quality: '18' }).pipe(res)
  } catch (e) {
    res.status(500).json({ error: 'Download error', details: e.message })
  }
}
