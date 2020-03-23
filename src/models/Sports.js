import { Schema, model } from 'mongoose'

const sportsSchema = new Schema({
    team: {
      type: String,
      required: true
    },
    city: {
        type: String,
        required: true
    },
    league: {
        type: String,
        required: true
    },
    year: {
      type: String,
      required: true
    },
    sport: {
      type: String,
      required: true
    }
}, 
{
  timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
  }
})

export default model("sports", sportsSchema)