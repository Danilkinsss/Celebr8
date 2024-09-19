import { BaseSyntheticEvent, useContext, useState } from 'react'

import { Input } from '@/components/ui/input'
import Header from '../components/Header'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { userContext } from '@/lib/userContext'

import image1 from '../assets/7212436 - Copy (2).jpg'

function Login() {
  const [username, setUsername] = useState('')
  const [fullname, setFullname] = useState('')
  const { login } = useContext(userContext)
  const BASE_URL = 'http://localhost:8080'

  // TODO: input validation here...
  // const SpecialUserInputSchema = z.object({
  //   username: z.string().max(20).min(1),
  //   fullname: z.string().max(30).min(1).optional(),
  // })
  // type User = z.infer<typeof SpecialUserInputSchema>

  // const userExist = localStorage.getItem('user')
  // useEffect(() => {
  //   if (userExist) {
  //     setUsername(userExist)
  //   }
  // }, [userExist])

  // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   setUsername(e.currentTarget.value)
  // }
  const handleChange = (event: BaseSyntheticEvent) => {
    setUsername(event.currentTarget.value)
    // console.log('username:', username)
    // console.log('event.currentTarget.value:', event.currentTarget.value)
  }
  const handleChange2 = (event: BaseSyntheticEvent) => {
    setFullname(event.currentTarget.value)
    // console.log('username:', fullname)
    // console.log('event.currentTarget.value:', event.currentTarget.value)
  }

  const navigate = useNavigate()
  // const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
  const handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault()
    let data2: object
    if (fullname == '') {
      console.log('wow')
      data2 = {
        username: username,
      }
    } else {
      data2 = {
        username: username,
        fullname,
      }
    }

    const res = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data2),
    })

    if (res.status !== 201) {
      return console.log('ERROR')
    }

    const data = await res.json()
    login(data.user)
    // .then((res) => res.json())
    console.log('fetched')
    setUsername('')
    setFullname('')
    navigate('/actions')

    /*
    const form = event.currentTarget
    console.log(form)
    localStorage.setItem('username', username)
    setUsername(username)
    */
  }

  /*
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    const data = {
      text,
      author: user,
    }

    await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setError(data))

    setText('')
  }
  */
  function inputStyling(word: string) {
    return word.length > 0 ? 'font-semibold' : 'font-thin'
  }

  return (
    <div className="bg-sky-700 bg-opacity-50 min-h-screen">
      <header>
        <Header withUserInfo={false} />
      </header>
      <main className="flex flex-row gap-10 items-center justify-center h-96">
        <div className="bg-yellow-400 shadow-xl rounded-md flex flex-col w-[40%] max-w-md p-8 py-10 gap-2">
          <Label className="font-semibold text-4xl">Hello there👋</Label>
          <Label className="text-xl font-mono">Please Log In here:</Label>
          <form
            onSubmit={handleSubmit}
            className="text-cyan-700 flex flex-col gap-2 "
          >
            <Input
              type="text"
              placeholder="Your nickname"
              onChange={handleChange}
              value={username}
              // maxLength={20}
              // minLength={1}
              required={true}
              className={inputStyling(username)}
            />
            <Input
              type="text"
              placeholder="Your fullname (optional)"
              onChange={handleChange2}
              value={fullname}
              className={inputStyling(fullname)}
            />
            <Button
              type="submit"
              className="w-full my-1 py-1 px-3 text-white rounded-md bg-cyan-800"
              onClick={handleSubmit}
            >
              {'Continue →'}
            </Button>
          </form>
        </div>
        <div>
          <img src={image1} alt="image1" className="h-80 w-80"></img>
        </div>
      </main>
    </div>
  )
}

export default Login

/*

<input
              type="text"
              className="border  my-1 px-2 py-1"
              placeholder="Your nickname"
              // onChange={handleChange}
              // value={}
              required
            />

            <input
              type="text"
              className="border  my-1 px-2 py-1"
              placeholder="Your fullname (optional)"
              // onChange={}
              // value={}
            />
            <button
              type="submit"
              className="w-full my-1 py-1 px-3 bg-blue-500 text-white rounded-md"
            >
              Continue →
            </button>
*/
