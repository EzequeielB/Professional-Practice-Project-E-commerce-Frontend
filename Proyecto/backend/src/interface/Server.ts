import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import userRouter from '../infrastructure/driving-adapters/api-rest/routes/user.routes'
import { errorHandler } from '../infrastructure/driving-adapters/api-rest/middleware/errorHandler'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import path from 'path'

export class Server  {
  private readonly app = express()

  constructor () {
    this.configureMiddleware()
    this.configureRoutes()
    this.configureErrorHandling()
    this.configureSwagger()
  }

  private configureMiddleware (): void {
    this.app.use(cors())
    this.app.use(json())
  }

  private configureSwagger(): void {
    const swaggerDocument = YAML.load(path.join(__dirname, '../../docs/auth.routes.yml'))
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  }

  private configureRoutes (): void {
    this.app.use('/api/v1/auth', userRouter)
  }

  private configureErrorHandling (): void {
    this.app.use(errorHandler)
  }

  public getApp (): express.Express {
    return this.app
  }
}