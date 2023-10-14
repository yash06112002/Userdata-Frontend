import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './UserCard';

export default function App() {

  const [userData, setUserData] = useState([])
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://userda.onrender.com")
      .then(res => { return res.json() })
      .then(data => {
        setUserData(data)
        setLoading(false);
      }).catch(err => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div className='mt-10'>
      {loading ? <p className='bg-slate-100 m-3 p-3 text-center'>Loading</p> : ""}

      {!error ? (
        <>
          <ul role="list" className=" gap-2 ml-5 mr-5">
            {userData.slice(2 * page, 2 * page + 2).map((person) => (
              <UserCard person={person} key={person.email} />
            ))}
          </ul>
          <div className='flex justify-center'>

            {page * 2 - 1 > 0 && <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setPage(curr => curr - 1)}>Previous</button>}
            {page * 2 + 2 < userData.length && <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setPage(curr => curr + 1)}>Next</button>}
          </div>
        </>
      ) : (
        <p className='bg-slate-100 m-3 p-3 text-center'>Some error occured</p>
      )}

    </div>
  )
}
