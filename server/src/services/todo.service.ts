import Todo from '../models/todos.models'


// POST todos
export const postTodo = async (body: any) => {
    const { title, status, description } = body
    return await Todo.create({
        title,
        status,
        description,
    })
}

// GET todos by id
export const getTodo = async (id: any) => {
    return await Todo.findById(id)
}

// Get all todos
export const getTodosAll = async () => {
    return await Todo.find()
}

// DELETE by id
export const deleteTodo = async (id: any) => {
    return await Todo.findByIdAndDelete(id)
}

// UPDATE by id
export const updateTodo = async (id: any, body: any) => {
    const { title, status } = body
    return await Todo.findByIdAndUpdate(
        id,
        { title, status },
        { new: true, runValidators: true }
    )
}
