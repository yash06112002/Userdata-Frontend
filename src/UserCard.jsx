import React from 'react'
import UserDetail from './UserDetail'

const UserCard = ({ person }) => {
    return (
        <li key={person.email} className="flex justify-between gap-x-6 py-5 bg-slate-100 m-3 p-3 ">

            <button type="button" className="text-white focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none w-full">
                <details class="group ">
                    <summary class="min-[600px]:flex justify-between items-center font-medium cursor-pointer list-none ">
                        <div className="flex min-w-0 gap-x-4 p-2 m-2">

                            <div className="min-w-0 flex-auto max-w-100">
                                <p className="text-sm leading-6 text-gray-900">{person.username}</p>
                            </div>
                        </div>
                        <div className="flex min-w-0 gap-x-4  p-2 m-2">

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Contact</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.name}</p>
                            </div>
                        </div>
                        <div className="flex min-w-0 gap-x-4  p-2 m-2">

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">City</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.address.city}</p>
                            </div>
                        </div>
                        <div className="flex min-w-0 gap-x-4 p-2 m-2">

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Zipcode</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.address.zipcode}</p>
                            </div>
                        </div>
                        <span className="text-sm font-semibold leading-6 text-gray-900 transition">
                            View Details
                        </span>
                    </summary>
                    <UserDetail person={person} />
                </details>
            </button>
        </li>
    )
}

export default UserCard