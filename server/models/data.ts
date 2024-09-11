export const parties = [
  {
    id: 1,
    organizerId: 1,
    name: 'My party yooooo',
    description: 'Nothing else to say',
    data: '21st June',
    time: '10pm',
    location: '',
  },
]

export const users = [
  { id: 1, party_id: 1, username: 'john_doe', fullname: 'John Doe' },
  { id: 2, party_id: 1, username: 'jane_smith', fullname: '' }, // fullname is empty
  { id: 3, party_id: 1, username: 'sam_brown', fullname: 'Sam Brown' },
  { id: 4, party_id: 1, username: 'lucy_green', fullname: null }, // fullname is null
  { id: 5, party_id: 1, username: 'mike_jones', fullname: 'Mike Jones' },
]

export const items = [
  { id: 1, party_id: 1, name: 'Pizza', quantity: 2, cost: 0 },
  { id: 2, party_id: 1, name: 'Donuts', quantity: 12, cost: 2 },
  { id: 3, party_id: 1, name: 'Wings', quantity: 20, cost: 15 },
  { id: 4, party_id: 1, name: 'Soda', quantity: 10, cost: 2.2 },
  { id: 5, party_id: 1, name: 'Chips', quantity: 3, cost: 4.1 },
  { id: 6, party_id: 1, name: 'Cookies', quantity: 24, cost: 1 },
  { id: 7, party_id: 1, name: 'Burgers', quantity: 10, cost: 8.25 },
  { id: 8, party_id: 1, name: 'Salad', quantity: 2, cost: 8 },
  { id: 9, party_id: 1, name: 'Fries', quantity: 15, cost: 3.2 },
  { id: 10, party_id: 1, name: 'Ice Cream', quantity: 6, cost: 5.89 },
]
