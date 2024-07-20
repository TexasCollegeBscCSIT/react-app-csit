import Boom from '@hapi/boom'
import { Request, Response, NextFunction } from 'express'
import * as todoService from '../services/todo.service'

// POST todos
export const postTodos = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await todoService.postTodo(req.body)
        res.status(201).json({
            message: 'Todo created successfully',
            data: response,
        })
    } catch (err) {
        next(err)
    }
}

// GET by id
export const getTodosByID = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await todoService.getTodo(req.params.id)
        if (!response) {
            throw Boom.notFound('Todo not found')
        }
        res.json(response)
    } catch (err) {
        next(err)
    }
}

// GET todos All
export const getTodosAll = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await todoService.getTodosAll()
        res.json(response)
    } catch (err) {
        next(err)
    }
}

// DELETE by id
export const deleteTodosByID = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await todoService.deleteTodo(req.params.id)
        if (!response) {
            throw Boom.notFound('Todo not found')
        }
        res.json({
            message: 'Delete successfully',
        })
    } catch (err) {
        next(err)
    }
}

// UPDATE by id
export const updateTodo = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await todoService.updateTodo(req.params.id, req.body)
        if (!response) {
            throw Boom.notFound('Todo not found')
        }
        res.json(response)
    } catch (err) {
        next(err)
    }
}
