import { useNavigate } from 'react-router-dom'
import logo2 from '../assets/msedge_S65A3q5mbr-removebg-preview.png'
import UserInfo from './UserInfo'
function Header({ withUserInfo }: { withUserInfo: boolean }) {
  const navigate = useNavigate()
  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, '_blank', 'noreferrer')
  }
  const PAGE_BASE_URL = 'http://localhost:5173'
  return (
    <div className="flex flex-row justify-between items-center bg-blue-50 pe-14">
      <main className=" h-20 flex flex-row px-2 py-1 gap-2  items-center ">
        <img
          src={logo2}
          alt="Logo"
          className="h-13 w-14 cursor-pointer"
          onClick={() => {
            navigate('/')
          }}
        />
        <p
          className="font-thin font-mono cursor-pointer hover:text-slate-600 hover:font-extrabold"
          onClick={() => {
            navigate('/')
          }}
          onWheel={() => openInNewTab(PAGE_BASE_URL)}
        >
          Event Master - Celebr8
        </p>
      </main>
      {withUserInfo ? <UserInfo /> : null}
    </div>
  )
}

export default Header

// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div className="py-4 px-8 absolute z-10">
//       <Link to={'/'}>
//         <img
//           className="w-24"
//           src={require('../assets/netflix-logo.svg')}
//           alt=""
//         />
//       </Link>
//     </div>
//   )
// }

// export default Header
