import mongoose from 'mongoose'
import dotenv from 'dotenv'

import Sports from './seeders/sports'

dotenv.config()

const mongoURL = `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  Sports
}
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase()
