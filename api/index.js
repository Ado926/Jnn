export default async function handler(req, res) {
  res.status(200).json({
    name: "Adonix API v2",
    author: "Wirk",
    endpoints: {
      ytmp3: "/api/ytmp3?url=YOUTUBE_URL&apikey=adonix",
      ytmp4: "/api/ytmp4?url=YOUTUBE_URL&apikey=adonix",
      spotify: "/api/spotify?apikey=adonix"
    }
  })
}
