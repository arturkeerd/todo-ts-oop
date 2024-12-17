import { Router } from "express";
import {  todoController } from "../controllers/todos"

const router = Router()

router.post('/', todoController.createTodo)
router.get('/', todoController.getTodos)
router.patch('/:id', todoController.updateTodo)
router.delete('/:id', todoController.deleteTodo)

export default router