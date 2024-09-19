import Header from '../components/Header'
import { TableOfItems } from '@/components/ListOfItems'
import AddItem from '@/components/AddItem'
import { Partytype } from '@/types'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
// import { SelectScrollableTime } from '@/components/SelectScrollableTime'
import { useNavigate, useParams } from 'react-router-dom'
import { BaseSyntheticEvent, useContext, useEffect, useState } from 'react'
import { userContext } from '@/lib/userContext'
// import UserInfo from '@/components/UserInfo'

function Create() {
  const navigate = useNavigate()
  const { user } = useContext(userContext)
  if (!user) {
    navigate('/')
  }

  const params = useParams()
  //:partyid
  console.log('party params:', params.partyid)

  const BASE_URL = 'http://localhost:8080'
  const [party, setParty] = useState<Partytype>()

  useEffect(() => {
    const getInfo = () => {
      fetch(`${BASE_URL}/parties/${params.partyid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setParty(data.party),
            setName(data.party.name),
            setLocation(data.party.location),
            setDate(data.party.date),
            setTime(data.party.time),
            setDescription(data.party.description)
        })
    }

    getInfo()
    window.addEventListener('submit', getInfo)
    // window.addEventListener('keyup', getInfo)
    // return () => {
    //   window.removeEventListener('submit', getInfo)
    // }

    // setInterval(() => {
    //   getInfo()
    // }, 1000)
    // console.log(data)
    // setInterval(() => {
    //   getInfo()
    // }, 1000)
    // const getTransactions = () => {
    //   fetch(`${BASE_URL}/balance`)
    //     .then((res) => res.json())
    //     .then((data) => setTransactions(data.transactions))
    // }
    // console.log('here are they', transactions)
    // setInterval(() => {
    //   getTransactions()
    // }, 500)
  }, [params.partyid])

  const [name, setName] = useState(party?.name)
  const [description, setDescription] = useState(party?.name)
  const [date, setDate] = useState(party?.date)
  const [time, setTime] = useState(party?.time)
  const [location, setLocation] = useState(party?.location)

  // const handleChange = (event: BaseSyntheticEvent) => {
  //   setName(event.currentTarget.value)
  // }

  // onSubmit={(e) => handleSubmitDelete(e, food.id)}
  // onChange={(e) => handleChange(e, field)}
  const handleChange = (event: BaseSyntheticEvent, field: string) => {
    switch (field) {
      case 'name':
        setName(event.currentTarget.value)
        console.log('name:', name)
        break
      case 'description':
        setDescription(event.currentTarget.value)
        console.log('description:', description)
        break
      case 'date':
        setDate(event.currentTarget.value)
        console.log('date:', date)
        break
      case 'time':
        setTime(event.currentTarget.value)
        console.log('time:', time)
        break
      case 'location':
        setLocation(event.currentTarget.value)
        console.log('location:', location)
        break

      default:
        console.log('Handle change ERROR')
        break
    }
  }

  //:partyid
  console.log('party params:', params.partyid)

  const handleSubmitSave = async (event: BaseSyntheticEvent) => {
    event.preventDefault()

    const res = await fetch(`${BASE_URL}/parties/${params.partyid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        // adminId: 'none',
        description,
        date,
        time,
        location,
      }),
    })
    // 4b516f1b-6a00-4af2-8c40-7d39a3634a73

    if (res.status === 204) {
      const ressss = await res.json()
      console.log('ressss', ressss.party.id)

      console.log('updated')
    } else {
      console.log('smth is wrong')
      return console.log(res.statusText)
    }
  }
  // /parties/:id

  const handleSubmitAddAdmin = async (event: BaseSyntheticEvent) => {
    event.preventDefault()
    const res2 = await fetch(`${BASE_URL}/users/${user?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user?.username,
        fullname: user?.fullname,
        partyId: params.partyid,
      }),
    })

    if (res2.status === 204) {
      console.log('fetched')
      console.log('res2', res2)
      navigate(`/party/${params.partyid}`)
    } else {
      return console.log(res2.statusText)
    }
  }

  // function inputStyling(fullname: string) {
  //   return fullname.length > 0 ? 'font-semibold' : 'font-thin'
  // }

  return (
    <div className=" min-h-screen">
      <header>
        <Header withUserInfo={true} />
      </header>
      {/* <div className="flex justify-end px-[2%]">
        <UserInfo />
      </div> */}
      <main className="bg-sky-700 bg-opacity-50 h-[100%] flex flex-col items-center justify-center gap-5 py-10">
        <div className="bg-yellow-400 min-w-[45%] shadow-lg rounded-md flex flex-col w-fit py-8 px-7 gap-4">
          <div className="flex flex-col gap-4">
            <Label className="font-semibold text-4xl py-1">
              Create a party📝
            </Label>
            <Label className="text-2xl">Main information</Label>
            <div className="flex flex-col gap-2">
              <Label>Party name</Label>
              <Input
                type="text"
                onChange={(e) => handleChange(e, 'name')}
                value={name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Description</Label>
              <Textarea
                onChange={(e) => handleChange(e, 'description')}
                value={description}
                placeholder="Type some more information here."
              />
            </div>
          </div>
          <Separator />
          <div className="  flex flex-row gap-2 justify-around">
            <div className="min-w-[20%] w-fit flex flex-col gap-4">
              <Label className="text-2xl">Create item</Label>
              {params.partyid && <AddItem partyId={params.partyid} />}
            </div>
            <div>
              {params.partyid && party && (
                <div className="flex flex-col gap-4">
                  <Label className="text-2xl">List of Items</Label>
                  <div className="w-fit border rounded-md p-3">
                    <TableOfItems
                      foodArr={party.food}
                      partyId={params.partyid}
                      withDelete={true}
                      peopleNumber={party.members.length}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-4">
            <Label className="text-2xl">Location and Time</Label>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-2">
                <Label>Date</Label>
                <Input
                  type="date"
                  onChange={(e) => handleChange(e, 'date')}
                  value={date}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Time</Label>
                {/* <SelectScrollableTime /> */}
                <Input
                  type="time"
                  onChange={(e) => handleChange(e, 'time')}
                  value={time}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Location</Label>
              <Input
                type="text"
                onChange={(e) => handleChange(e, 'location')}
                value={location}
              />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmitSave}>
              <Button
                // onClick={}
                type="submit"
                onSubmit={handleSubmitSave}
                className="w-full my-1 py-1 px-3  text-white rounded-md bg-cyan-800"
              >
                {'Save changes'}
              </Button>
            </form>
            <form onSubmit={handleSubmitAddAdmin}>
              <Button
                type="submit"
                // onClick={() => {
                //   navigate(`/party/${params.partyid}`)
                // }}
                className="w-full my-1 py-1 px-3  text-white rounded-md bg-cyan-800"
              >
                {'Go to party'}
              </Button>
            </form>
          </div>
          <div className="self-center">
            <Button
              onClick={() => {
                navigate('/actions')
              }}
              className="w-32 my-1 py-1 px-3  text-white rounded-md bg-green-800"
            >
              {'← Back'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Create
