import { Seeder } from 'mongoose-data-seed'
import appRoot from 'app-root-path'

import Sports from '../src/models/Sports'
import SportsProcessor from '../src/services/processors/SportsProcessor'
import SportsRepository from '../src/services/repository/SportsRepository'

class SportsSeeder extends Seeder {
  async shouldRun() {
    return Sports.countDocuments().exec().then(count => count === 0)
  }

  async run() {
    const data = await SportsProcessor.processDatFile(`${appRoot}/src/assets/files/sports-teams.dat`)

    console.log("Seeding sports...")

    return await SportsRepository.createPerBatch(data)
  }
}

export default SportsSeeder
