import { Button } from '@/components/ui/button'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { BaseSyntheticEvent } from 'react'

import { userContext } from '@/lib/userContext'
import { useContext } from 'react'

function Actions() {
  const navigate = useNavigate()

  const BASE_URL = 'http://localhost:8080'

  const handleSubmitCreate = async (event: BaseSyntheticEvent) => {
    event.preventDefault()

    const res = await fetch(`${BASE_URL}/parties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        adminId: user?.id,
        name: '*Default Party Name*',
      }),
    })
    // 4b516f1b-6a00-4af2-8c40-7d39a3634a73

    if (res.status === 201) {
      const ressss = await res.json()
      console.log('ressss', ressss.party.id)

      console.log('fetched')
      navigate(`/create/${ressss.party.id}`)
    } else {
      console.log('smth is wrong')
      return console.log(res.statusText)
    }
  }

  const { user } = useContext(userContext)
  if (!user) {
    navigate('/')
  }
  console.log(user?.username)
  return (
    <div className="bg-sky-700 bg-opacity-50 min-h-screen">
      <header>
        <Header withUserInfo={true} />
      </header>
      <main className="flex flex-col items-center justify-center h-96 gap-5">
        <div className="bg-yellow-400 shadow-lg rounded-md flex flex-col w-[40%] max-w-lg py-10 px-5 gap-4 ">
          <Label className="font-semibold text-black text-4xl py-1 ">
            What is your plan for today?
          </Label>
          <form onSubmit={handleSubmitCreate}>
            <Button
              type="submit"
              // onClick={() => {
              //   navigate('/create')
              // }}
              className="w-full my-1 py-1 px-3  text-white rounded-md bg-cyan-800"
            >
              {'Create a party →'}
            </Button>
            <Button
              onClick={() => {
                navigate('/join')
              }}
              className="w-full my-1 py-1 px-3  text-white rounded-md bg-cyan-800"
            >
              {'Join a party →'}
            </Button>
          </form>
        </div>
        <Button
          onClick={() => {
            navigate('/')
          }}
          className="w-[5%] my-1 py-1 px-3  text-white rounded-md bg-green-800"
        >
          {'← Back'}
        </Button>
      </main>
    </div>
  )
}

export default Actions

/*

<button
              type="submit"
              className="w-full my-1 py-1 px-3 bg-blue-500 text-white rounded-md"
            >
              Create a party →
            </button>
            <button
              type="submit"
              className="w-full my-1 py-1 px-3 bg-blue-500 text-white rounded-md"
            >
              Join a party →
            </button>

            <div>
            <button
          type="submit"
          className="w-fit my-1 py-1 px-3 bg-yellow-300 text-white rounded-md"
        >
          ← Back
        </button>
            </div>
*/
