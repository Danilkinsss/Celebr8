import { Request, Response } from 'express'
import {
  changeItem,
  createItem,
  getAllItems,
  getItemById,
  removeItem,
} from '../models/item.model'

export async function getItems(req: Request, res: Response) {
  const allItems = await getAllItems()
  res.status(200).json({ message: 'Items found successfully', items: allItems })
}

export async function getItem(req: Request, res: Response) {
  const { id } = req.params
  const myItem = await getItemById(id)
  if (!myItem) {
    res.status(404).json({
      message: 'Item with this ID does not exist',
    })
  } else {
    res.status(200).json({ message: 'Item found successfully', item: myItem })
  }
}

export async function postItem(req: Request, res: Response) {
  const newItem = await createItem(req.body)
  res.status(201).json({ message: 'Item created successfully', item: newItem })
}

export async function putItem(req: Request, res: Response) {
  const { id } = req.params
  const { name, quantity, cost } = req.body
  await changeItem(id, name, quantity, cost)
  res.status(204).send({ message: 'Party changed successfully' })
  // can't avoid send and can't console log it (can't see it)
}

export async function deleteItem(req: Request, res: Response) {
  const { id } = req.params
  const isDeleted = await removeItem(id)
  if (!isDeleted) {
    res.status(404).json({ message: 'This item does not exist' })
  } else {
    res.status(204).send({ message: 'Item deleted successfully' })
    // can't avoid send and can't console log it (can't see it)
  }
}
