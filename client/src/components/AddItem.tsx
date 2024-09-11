import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { BaseSyntheticEvent, useState } from 'react'
// import SelectFoods from './SelectFoods'

function AddItem({ partyId }: { partyId: string }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [cost, setCost] = useState('')

  const handleChangeName = (event: BaseSyntheticEvent) => {
    setName(event.currentTarget.value)
    console.log(name)
  }
  const handleChangeQuantity = (event: BaseSyntheticEvent) => {
    setQuantity(event.currentTarget.value)
    console.log('quantity', quantity, 'typeof', typeof quantity)
  }
  const handleChangeCost = (event: BaseSyntheticEvent) => {
    setCost(event.currentTarget.value)
    console.log(cost)
  }

  const BASE_URL = 'http://localhost:8080'

  const handleSubmitAdd = async (event: BaseSyntheticEvent) => {
    event.preventDefault()

    const res = await fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        quantity: Number(quantity),
        cost: Math.floor(Number(cost) * 100) / 100,
        partyId: partyId,
      }),
    })
    // 4b516f1b-6a00-4af2-8c40-7d39a3634a73

    if (res.status === 201) {
      console.log('fetched')
    } else {
      console.log('smth is wrong')
      return console.log(res.statusText)
    }
    setName('')
    setQuantity('')
    setCost('')
  }

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmitAdd} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Label>Food name</Label>
          {/* <SelectFoods /> */}
          <Input
            type="text"
            placeholder="Special name"
            onChange={handleChangeName}
            value={name}
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Amount</Label>
          <Input
            type="number"
            placeholder="e.g. 7"
            onChange={handleChangeQuantity}
            value={quantity}
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Price</Label>
          <Input
            type="number"
            step={0.01}
            placeholder="in €"
            onChange={handleChangeCost}
            value={cost}
            required={true}
          />
        </div>
        <Button
          type="submit"
          variant="secondary"
          className="w-full my-1 py-1 px-3"
        >
          Add to list
        </Button>
      </form>
    </div>
  )
}

export default AddItem
