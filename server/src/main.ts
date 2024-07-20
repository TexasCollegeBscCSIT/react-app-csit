import express, {
    RequestHandler,
    NextFunction,
    Request,
    Response,
} from 'express'
import cors from 'cors'
import todosRouter from './routes/todo.router'
import userRouter from './routes/auth.router'
import buildError from './utils/build-error'
import startingSchema from './connection/db.connection'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

const start = async () => {
    // Connect to MongoDB
    try {
        await startingSchema(process.env.MONGO_URL)
            .then(() => {
                console.log('Connected to MongoDB Database Successfully ...')
            })
            .catch((err: any) => {
                console.error('MongoDB connection failed:', err)
            })
    } catch (err) {
        console.error('Error starting the server:', err)
    }
}

start()

app.use('/todos', todosRouter)
app.use('/user', userRouter)

// Catch-all route for 404 - Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = buildError({
        statusCode: 404,
        message: 'API endpoint not found',
    })
    res.status(error.code).json({ error })
})

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const error = buildError(err)
    res.status(error.code).json({ message: 'Error occoured' })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export default app
