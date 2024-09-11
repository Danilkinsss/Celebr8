import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { useNavigate, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page" className="flex flex-col">
      <header>
        <Header withUserInfo={false} />
      </header>
      <main className=" shadow-lg rounded-md h-[100%] flex flex-col items-center justify-center gap-5 py-16">
        <h1 className="text-4xl font-semibold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred 🐇🎩.</p>
        <p className="italic font-semibold text-cyan-800">
          "{error.statusText || error.message}"
        </p>
        <Button
          onClick={() => {
            navigate('/')
          }}
          className="bg-lime-800 font-semibold p-3"
        >
          Back Home
        </Button>
      </main>
    </div>
  )
}
