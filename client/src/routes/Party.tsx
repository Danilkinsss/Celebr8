import { TableOfItems } from '@/components/ListOfItems'
import Header from '../components/Header'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Partytype } from '@/types'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TableOfUsers } from '@/components/ListOfAttendees'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
// import UserInfo from '@/components/UserInfo'

// TODO: create an admin to be the 1st person on party
// TODO: join as a guest -> you will be on the list

function customToDateString(dateStr: string): string {
  // Parse the input date string
  const [year, month, day] = dateStr.split('-').map(Number)

  // Create a new Date object
  const date = new Date(year, month - 1, day)

  // Define arrays for weekday and month names
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  // Get the formatted date string
  const weekday = weekdays[date.getUTCDay()]
  const monthName = months[date.getUTCMonth()]
  const dayOfMonth = date.getUTCDate()
  const yearNum = date.getUTCFullYear()

  // Return the formatted string
  return `${weekday} ${monthName} ${dayOfMonth} ${yearNum}`
}

function Party() {
  const navigate = useNavigate()
  const params = useParams()
  const BASE_URL = 'http://localhost:8080'
  // 4b516f1b-6a00-4af2-8c40-7d39a3634a73

  const [party, setParty] = useState<Partytype>()
  // const [partyName, setPartyName] = useState('')
  // const [partyDescription, setPartyDescription] = useState('')

  console.log('party params(id): ', params)
  console.log('party params(id): ', params.partyid)

  useEffect(() => {
    const getInfo = () => {
      fetch(`${BASE_URL}/parties/${params.partyid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => setParty(data.party))
    }
    getInfo()
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
  }, [])

  const copyToClipBoard = async (copyMe: string) => {
    await navigator.clipboard.writeText(copyMe)
    alert("Success: You copied party's link")
  }

  return (
    <div className="min-h-screen">
      <header>
        <Header withUserInfo={true} />
      </header>
      {/* <div className="flex justify-end">
        <UserInfo />
      </div> */}
      <main className=" min-h-screen flex flex-col items-center justify-start gap-2">
        {party && (
          <div className=" shadow-lg rounded-md flex flex-col w-[60%] py-12 px-5 gap-4">
            <Label className="font-semibold text-4xl py-1">Your party🎊</Label>
            <div className="flex flex-row items-center justify-between ">
              <Label className="text-cyan-950 font-extrabold text-3xl py-1">
                {party.name}
              </Label>
              <Badge
                // onClick={onClicking}
                // onClick={navigator.clipboard.writeText}
                onClick={() =>
                  copyToClipBoard(params.partyid ? params.partyid : '')
                }
                variant="outline"
                className="text-lg  font-normal py-1 cursor-pointer hover:underline hover:font-semibold"
              >
                {params.partyid}
              </Badge>
            </div>
            <div className=" flex flex-row shadow-md rounded-md gap-x-10 py-2">
              <div className="min-w-[20%] w-fit p-3 flex flex-col gap-2">
                <Label className=" text-xl">Date and Time</Label>
                <div className="flex flex-col">
                  <Label className="font-mono text-slate-600">
                    {party.date ? customToDateString(party.date) : ''}
                  </Label>
                  <Label className="font-mono text-slate-600">
                    {party.time}
                  </Label>
                </div>
              </div>
              <div className=" min-w-[20%] w-fit  p-3 flex flex-col gap-2">
                <Label className="text-xl">Location</Label>
                <Label className=" font-mono text-slate-600">
                  {party.location}
                </Label>
              </div>
              <div className="min-w-[50%]  w-fit p-3 flex flex-col gap-2">
                <Label className=" text-xl ">Description</Label>
                <Label className="font-mono text-slate-600">
                  {party.description}
                </Label>
              </div>
            </div>
            <Separator />
            <div className="flex flex-row justify-between">
              <div className="shadow-lg rounded-md min-w-[40%] flex flex-col">
                <div className="flex flex-row justify-between items-center p-3 ">
                  <Label className=" text-xl">Attendees</Label>
                  <Label className=" text-sl font-thin text-slate-500">
                    ({party.members.length}{' '}
                    {party.members.length === 1 ? 'person' : 'people'})
                  </Label>
                </div>
                <TableOfUsers
                  membersArr={party.members}
                  adminId={party.adminId}
                />
              </div>
              <div className=" shadow-lg rounded-md min-w-[55%] flex flex-col">
                <Label className="text-xl p-3">Items</Label>
                <TableOfItems
                  foodArr={party.food}
                  partyId={party.id}
                  withDelete={false}
                  peopleNumber={party.members.length}
                />
              </div>
            </div>
          </div>
        )}
        <Button
          onClick={() => {
            navigate(-1)
          }}
          className="w-[5%] my-1 py-1 px-3  text-white rounded-md bg-green-800"
        >
          {'← Back'}
        </Button>
        <Button
          onClick={() => {
            navigate('/')
          }}
          className="min-w-fit w-[10%] my-1 py-1 px-3  text-white rounded-md bg-cyan-800"
        >
          {'← Go to start'}
        </Button>
      </main>
    </div>
  )
}

export default Party
