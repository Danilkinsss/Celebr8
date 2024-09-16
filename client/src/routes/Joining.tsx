import { Input } from '@/components/ui/input'
import Header from '../components/Header'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { BaseSyntheticEvent, useContext, useState } from 'react'
import { userContext } from '@/lib/userContext'
// import UserInfo from '@/components/UserInfo'

import image1 from '../assets/7212436 - Copy (4).jpg'

function Join() {
  const navigate = useNavigate()
  const { user } = useContext(userContext)
  if (!user) {
    navigate('/')
  }
  console.log(user?.id)

  const [partyid, setPartyid] = useState('')
  const BASE_URL = 'http://localhost:8080'

  const handleChange = (event: BaseSyntheticEvent) => {
    setPartyid(event.currentTarget.value)
    console.log('partyid:', partyid)
  }

  const handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault()

    // const res = await fetch(`${BASE_URL}/parties/${partyid}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // // 4b516f1b-6a00-4af2-8c40-7d39a3634a73

    // if (res.status === 200) {
    //   console.log('fetched')
    //   setPartyid('')
    //   console.log('res', res)
    //   navigate(`/party/${partyid}`)
    // } else {
    //   return console.log(res.statusText)
    // }

    // const res = await fetch(`${BASE_URL}/users/${user?.id}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // // 4b516f1b-6a00-4af2-8c40-7d39a3634a73

    // if (res.status === 200) {
    //   console.log('fetched')
    //   console.log('res', res)
    //   console.log('user?.id', user?.id)
    //   console.log('res,json', res.json)
    //   // navigate(`/party/${partyid}`)
    // } else {
    //   return console.log(res.statusText)
    // }

    const res2 = await fetch(`${BASE_URL}/users/${user?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user?.username,
        fullname: user?.fullname,
        partyId: partyid,
      }),
    })

    if (res2.status === 204) {
      console.log('fetched')
      setPartyid('')
      console.log('res2', res2)
      navigate(`/party/${partyid}`)
    } else {
      return console.log(res2.statusText)
    }
  }

  function inputStyling(fullname: string) {
    return fullname.length > 0 ? 'font-semibold' : 'font-thin'
  }

  return (
    <div className="bg-sky-700 bg-opacity-50 min-h-screen">
      <header>
        <Header withUserInfo={true} />
      </header>
      {/* <div className="flex justify-end">
        <UserInfo />
      </div> */}
      <main className="flex flex-row justify-center py-10 h-96 gap-5">
        <div className="bg-yellow-400 items-center shadow-lg rounded-md flex flex-col py-10 px-5 gap-4 ">
          <h1 className="font-semibold text-slate-800 text-4xl py-1">
            Enter the party code here:
          </h1>
          <form
            onSubmit={handleSubmit}
            className="text-cyan-700 flex flex-col gap-2 w-[80%] "
          >
            <Input
              type="text"
              placeholder="Party code"
              onChange={handleChange}
              className={inputStyling(partyid)}
              value={partyid}
            />
            <Button
              // onClick={() => {
              //   navigate('/party')
              // }}
              className="w-full my-1 py-1 px-3 text-white rounded-md bg-cyan-800"
              onSubmit={handleSubmit}
            >
              {'Join a party'}
            </Button>
          </form>
          <div>
            <Button
              onClick={() => {
                navigate('/actions')
              }}
              className="w-32 my-1 py-1 px-3 text-white rounded-md bg-green-800"
            >
              {'← Back'}
            </Button>
          </div>
        </div>
        <div>
          <img src={image1} alt="image1" className="h-80 w-80"></img>
        </div>
      </main>
    </div>
  )
}

export default Join

/*
<input
              type="text"
              className="border w-full my-1 px-2 py-1"
              placeholder="Party code"
              // onChange={}
              // value={}
            />
            <button
              type="submit"
              className="w-full my-1 py-1 px-3 bg-blue-500 text-white rounded-md"
            >
              Join the party →
            </button>

<button
          type="submit"
          className="w-fit my-1 py-1 px-3 bg-yellow-300 text-white rounded-md"
        ></button>
        
*/
