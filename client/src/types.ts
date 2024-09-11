export type Usertype = {
  fullname: string
  id: string
  partyId: string
  username: string
}
export type Itemtype = {
  id: string
  name: string
  quantity: number
  cost: number
  partyId: string
}

export type Partytype = {
  adminId: string
  name: string
  partyId: string
  description: string
  id: string
  date: string
  time: string
  location: string
  members: Array<Usertype>
  food: Array<Itemtype>
}
