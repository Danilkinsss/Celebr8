import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from './ui/button'
import { Itemtype } from '../types'
import { BaseSyntheticEvent } from 'react'

// const foods = [
//   { name: 'Pizza', quantity: 2, cost: 0 },
//   { name: 'Donuts', quantity: 12, cost: 2 },
//   { name: 'Wings', quantity: 20, cost: 15 },
//   { name: 'Soda', quantity: 10, cost: 2.2 },
//   { name: 'Chips', quantity: 3, cost: 4.1 },
//   { name: 'Cookies', quantity: 24, cost: 1 },
//   { name: 'Burgers', quantity: 10, cost: 8.25 },
//   { name: 'Salad', quantity: 2, cost: 8 },
//   { name: 'Fries', quantity: 15, cost: 3.2 },
//   { name: 'Ice Cream', quantity: 6, cost: 5.89 },
// ]

export function TableOfItems({
  foodArr,
  partyId,
  withDelete,
  peopleNumber,
}: {
  foodArr: Itemtype[]
  partyId: string
  withDelete: boolean
  peopleNumber: number
}) {
  let sum = 0
  const foods = foodArr
  for (let i = 0; i < foods.length; i++) {
    sum += Math.floor(foods[i].quantity * foods[i].cost * 100) / 100
  }
  sum = Math.floor(sum * 100) / 100
  console.log(sum)
  console.log(partyId)

  const BASE_URL = 'http://localhost:8080'

  const handleSubmitDelete = async (
    event: BaseSyntheticEvent,
    itemId: string
  ) => {
    event.preventDefault()

    const res = await fetch(`${BASE_URL}/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.status === 204) {
      console.log('deleted')
    } else {
      console.log('smth is wrong')
      return console.log(res.statusText)
    }
  }
  // const [party, setParty] = useState<Partytype>()
  //
  // useEffect(() => {
  //   const getInfo = () => {
  //     fetch(`${BASE_URL}/parties/${partyId}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setParty(data.party))
  //   }

  //   getInfo()
  //   window.addEventListener('submit', getInfo)
  // }, [])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40%]">Item name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Total cost</TableHead>
          {withDelete ? <TableHead></TableHead> : null}
        </TableRow>
      </TableHeader>
      <TableBody>
        {foods.map((food) => (
          <TableRow key={food.id}>
            <TableCell className="font-medium">{food.name}</TableCell>
            <TableCell>{food.quantity}</TableCell>
            <TableCell className="text-right">{food.cost}€</TableCell>
            <TableCell className="text-right">
              {Math.floor(food.quantity * food.cost * 100) / 100}€
            </TableCell>
            {withDelete ? (
              <TableCell>
                <form onSubmit={(e) => handleSubmitDelete(e, food.id)}>
                  <Button type="submit" variant="link">
                    delete
                  </Button>
                </form>
              </TableCell>
            ) : null}
          </TableRow>
        ))}
      </TableBody>
      {foods.length !== 0 ? (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total cost</TableCell>
            <TableCell className="text-right">{`${sum}€ `}</TableCell>
          </TableRow>
          {!withDelete ? (
            <TableRow>
              <TableCell colSpan={3}>Total per person</TableCell>
              <TableCell className="text-right">
                {`${sum / peopleNumber}€`}
              </TableCell>
            </TableRow>
          ) : null}
        </TableFooter>
      ) : null}
    </Table>
  )
}
