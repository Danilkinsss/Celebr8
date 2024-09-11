import express from 'express'
import {
  deleteParty,
  getParties,
  getParty,
  postParty,
  putParty,
} from '../controllers/party.controller'
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from '../controllers/user.controller'
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  putItem,
} from '../controllers/item.controller'

const router = express.Router()

// Database:
// TODO: make a seeding for putting data faster

// -------- PARTY ------------
router.get('/parties', getParties) // don't really need this, no err
router.post('/parties', postParty) //         / err ❌
router.get('/parties/:id', getParty) //       / err ❌
router.put('/parties/:id', putParty) //       / err ❌
router.delete('/parties/:id', deleteParty) //  / err ❌

/*




*/

// -------- USER ------------
router.get('/users', getUsers) //                   getting list of all users, no need / no err ✅
router.post('/users', postUser) //                  creating 1 new user (no partyID needed) / err ✅
router.get('/users/:id', getUser) //                getting 1 user by id / err ✅
// (2.2) router.get('/parties/:id', getParty) //    getting users of specific party by its ID
//                                                  and inside its data extracting members[]
//                                                  TODO: DON'T NEED TO IMPLEMENT(?)
router.put('/users/:id', putUser) //         editing some user by its ID / err ✅
router.delete('/users/:id', deleteUser) //   deleting some user by its ID / err ✅

/*




*/

// -------- ITEM ------------
router.get('/items', getItems) //                   getting all items, no need / no err ✅
router.get('/items/:id', getItem) //                getting 1 item by ID / err ✅
// (2.2) router.get('/parties/:id', getParty) //    getting items of specific party by its ID
//                                                  and inside it's data extrcating food[]
//                                                  TODO: DON'T NEED TO IMPLEMENT(?)
router.post('/items', postItem) //                  creating 1 new user / err ❌
// TODO: should I change it to be: post('/parties/:id', postItem) and in here specify partyID from the beginning
router.put('/items/:id', putItem) //         editing some item by its ID / err ❌
router.delete('/items/:id', deleteItem) //   deleting some item by its ID / err ✅

export default router
