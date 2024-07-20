import mongoose from 'mongoose'

const startingSchema = (url: any) => {
    return mongoose.connect(url)
}

export default startingSchema
