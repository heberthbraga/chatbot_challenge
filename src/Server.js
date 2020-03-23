import Express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import routes from './routes'

class Server {
  app = Express()

  startup() {
    dotenv.config()

    this.setupDatabase()
    this.setupMiddlewares()
    this.setupRoutes()

    this.app.listen(3000, () => console.log("Listening..."))
  }

  setupRoutes() {
    this.app.use('/', routes)
  }

  setupMiddlewares() {
    this.app.use(Express.json())
  }

  setupDatabase() {
    const uri = `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`

    mongoose.connect(uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}

export default Server