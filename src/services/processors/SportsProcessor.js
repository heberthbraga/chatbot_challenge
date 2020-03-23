import fs from 'fs'
import readline from 'readline'
import stream from 'stream'

class SportsProcessor {

  async processDatFile(targetpath) {
    const instream = fs.createReadStream(targetpath)
    const outstream = new stream()
    const rl = readline.createInterface(instream, outstream)

    let lineCount = 0
    let data = []

    for await (const line of rl) {
      if (lineCount > 0) {
        const [team, city, league, year, sport] = line.split(", ")

        const entity = { ObjectId: lineCount, team, city, league, year, sport }

        data.push(entity)
      }
      
      lineCount++
    }

    return data
  }
}

export default new SportsProcessor()