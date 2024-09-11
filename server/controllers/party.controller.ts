// import { parties } from '../models/data'
import {
  changeParty,
  createParty,
  getAllParties,
  getPartyById,
  removeParty,
} from '../models/party.model'
import { Request, Response } from 'express'

export async function getParties(req: Request, res: Response) {
  const allParties = await getAllParties()
  res
    .status(200)
    .json({ message: 'Parties found successfully', parties: allParties })
}

export async function postParty(req: Request, res: Response) {
  // error handling ❌
  const newParty = await createParty(req.body)
  console.log(newParty)
  res
    .status(201)
    .json({ message: 'Party created successfully', party: newParty })
}

export async function getParty(req: Request, res: Response) {
  // error handling ✅
  const { id } = req.params
  const myparty = await getPartyById(id)
  console.log(myparty)
  if (myparty) {
    console.log('found')
    res
      .status(200)
      .json({ message: 'Party found successfully', party: myparty })
  } else {
    res.status(404).json({ message: 'Party with such ID does not exist' })
  }
}

export async function deleteParty(req: Request, res: Response) {
  // error handling ❌
  const { id } = req.params
  await removeParty(id)
  res.status(204).json({ message: 'Party deleted successfully' })
}

export async function putParty(req: Request, res: Response) {
  // error handling ❌
  const { id } = req.params
  const { name, adminId, description, date, time, location } = req.body
  await changeParty(id, name, adminId, description, date, time, location)
  res.status(204).send({ message: 'Party changed successfully' })
  // can't avoid send and can't console log it (can't see it)
}
