import Header from '../components/Header'

function Create() {
  return (
    <div className="h-screen">
      <header>
        <Header />
      </header>
      <main className=" bg-green-500 h-[100%] flex flex-col items-center justify-center gap-5">
        <div className=" bg-orange-500 flex flex-col w-[60%] py-12 px-5 gap-4">
          <h1 className="font-semibold text-slate-800 text-4xl py-1">
            Create a party
          </h1>
          <div className="MAIN INFORMATION border b-cyan-200">
            <h2 className="font-semibold text-slate-800 text-xl py-1">
              Main information
            </h2>
            <h3>Name</h3>
            <input
              type="text"
              className="border w-[50%] my-1 px-2 py-1"
              placeholder="Name"
            />
            <h3>Description</h3>
            <input
              type="text"
              className="border w-full my-1 px-2 py-1"
              placeholder="Type description here"
            />
          </div>
          <div className="ITEMS border b-cyan-200">
            <h2 className="font-semibold text-slate-800 text-xl py-1">Items</h2>
            <h3>Name</h3>
            <input
              type="text"
              className="border w-[50%] my-1 px-2 py-1"
              placeholder="Name"
            />
            <h3>Description</h3>
            <input
              type="text"
              className="border w-full my-1 px-2 py-1"
              placeholder="Type description here"
            />
          </div>
          <div className="LOCATION AND TIME border b-cyan-200">
            <h2 className="font-semibold text-slate-800 text-xl py-1">
              Location and Time
            </h2>
            <h3>Name</h3>
            <input
              type="text"
              className="border w-[50%] my-1 px-2 py-1"
              placeholder="Name"
            />
            <h3>Description</h3>
            <input
              type="text"
              className="border w-full my-1 px-2 py-1"
              placeholder="Type description here"
            />
          </div>
          <div>
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
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        <div className="min-w-72 w-[40%] flex flex-row gap-3 justify-center bg-red-400 py-2 px-4">
          <button
            type="submit"
            className="min-w-32 w-1/2 my-1 py-1 px-3 bg-yellow-300 text-white rounded-md"
          >
            ← Back
          </button>
          <button
            type="submit"
            className="min-w-32 w-1/2 my-1 py-1 px-3 bg-yellow-300 text-white rounded-md"
          >
            Continue →
          </button>
        </div>
      </main>
    </div>
  )
}

export default Create
