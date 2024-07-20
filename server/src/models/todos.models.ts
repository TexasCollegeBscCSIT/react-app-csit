import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    id: { type: Number, autoIncrement: true },
    title: { type: String, required: true },
    status: { type: String },
    description: { type: String },
    date: { type: Date, default: Date.now },
})

export default mongoose.model('Todo', TodoSchema)
