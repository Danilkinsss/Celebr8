import { Request, Response } from 'express'
import {
  changeUser,
  createUser,
  getAllUsers,
  getUserById,
  removeUser,
} from '../models/user.model'
import { z } from 'zod'

const UserInputSchema = z.object({
  id: z.string().optional(),
  username: z.string().max(20).min(1),
  fullname: z.string().max(30).min(1).optional(),
  partyId: z.string().optional(),
})
type User = z.infer<typeof UserInputSchema>

// const SpecialUserInputSchema = z.object({
//   username: z.string().max(20).min(1).optional(),
//   fullname: z.string().max(30).min(1).optional(),
// })
// type SpecialUser = z.infer<typeof SpecialUserInputSchema>

export async function getUsers(req: Request, res: Response) {
  const allUsers = await getAllUsers()
  res.status(200).json({ message: 'Users found successfully', users: allUsers })
}

export async function getUser(req: Request, res: Response) {
  const { id } = req.params

  const myUser = await getUserById(id)
  if (!myUser) {
    res.status(404).json({
      message: 'User with this ID does not exist',
    })
  } else {
    res.status(200).json({ message: 'User found successfully', user: myUser })
  }
}

export async function postUser(req: Request, res: Response) {
  try {
    const checkUser: User = req.body
    UserInputSchema.parse(checkUser)
    const newUser = await createUser(req.body)
    if (!newUser) {
      res.status(404).json({
        message:
          ' (You have not provided enough data OR )User with such username already exists',
      })
    } else {
      res
        .status(201)
        .json({ message: 'User created successfully', user: newUser })
    }
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error })
  }
}

export async function putUser(req: Request, res: Response) {
  const { id } = req.params
  try {
    // const checkUser: SpecialUser = req.body
    // SpecialUserInputSchema.parse(checkUser)

    const { username, fullname, partyId } = req.body
    console.log(username, fullname)
    const isUnique = await changeUser(id, username, fullname, partyId)
    console.log(isUnique)
    // if (!isUnique) {
    //   res.status(404).json({
    //     message:
    //       'This username is already taken or User with such ID does not exist',
    //   })
    // } else {
    res.status(204).send({ message: 'User changed successfully' })
    // }
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error })
  }

  // can't avoid send and can't console log it (can't see it)
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params
  const isDeleted = await removeUser(id)
  if (!isDeleted) {
    res.status(404).json({ message: 'This user does not exist' })
  } else {
    res.status(204).send({ message: 'User deleted successfully' })
    // can't avoid send and can't console log it (can't see it)
  }
}
