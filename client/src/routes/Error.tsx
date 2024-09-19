import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { useNavigate, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  const error: unknown = useRouteError()
  console.error('hello heeeeere', error)

  return (
    <div id="error-page" className="h-screen bg-slate-400 flex flex-col gap-5">
      <header>
        <Header withUserInfo={false} />
      </header>
      <main className="bg-blue-400 shadow-lg rounded-md w-[40%] flex flex-col items-center justify-center self-center gap-5 py-16">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p>Sorry, some unexpected error occurred 🐇🎩.</p>
        <p className="italic font-semibold text-green-600">
          {/* "{error?.statusText || error?.message ? error?.message : 'asd'}" */}
          {/* "asd" */}
          {/* {error} */}
        </p>
        <Button
          onClick={() => {
            navigate('/')
          }}
          className="bg-slate-600 font-semibold p-3"
        >
          Back Home
        </Button>
      </main>
    </div>
  )
}
