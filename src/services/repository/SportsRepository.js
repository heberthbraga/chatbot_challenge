import Sports from '../../models/Sports'

class SportsRepository {

  async createPerBatch(entries) {
    try {
      await Sports.insertMany(entries)
    } catch (err) {
      console.log("Error createPerBatch = ", err.message)
    }
  }

  async findByTeamAndLeague(league, values) {
    try {
      const query = Sports.findOne({ league })
      query.or({ team: values })

      return await query.exec()
    } catch (err) {
      console.log("Error findByTeamAndLeague = ", err.message)
    }
  }

  async findAllByYear(year) {
    try {
      return await Sports.find({ year }).exec()
    } catch (err) {
      console.log("Error findByTeamAndLeague = ", err.message)
    } 
  }
}

export default new SportsRepository()