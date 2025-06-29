import fs from 'fs-extra'

const file = './database.json'

export function getStats() {
  if (!fs.existsSync(file)) return { total: 0, endpoints: {} }
  const db = fs.readJsonSync(file)
  return db.stats || { total: 0, endpoints: {} }
}
