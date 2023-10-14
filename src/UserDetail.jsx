import React from 'react'

const UserDetail = ({ person }) => {
    return (
        <div class="text-neutral-600 mt-3 group-open:animate-fadeIn md:flex justify-left gap-16">
            <div className=''>
                <div className=''>
                    <p className='text-left text-xl mb-1 text-black'>Contact Person</p>
                    <p className='text-left mb-3'>{person.name}</p>
                </div>
                <div className=''>
                    <p className='text-left text-xl mb-1 text-black'>Website</p>
                    <p className='text-left mb-3'>{person.website}</p>
                </div>
                <div className=''>
                    <p className='text-left text-xl mb-1 text-black'>Email</p>
                    <p className='text-left mb-3'>{person.email}</p>
                </div>
                <div className=''>
                    <p className='text-left text-xl mb-1 text-black'>Phone</p>
                    <p className='text-left mb-3'>{person.phone}</p>
                </div>

            </div>
            <div>
                <div className=' '>
                    <p className='text-left text-xl mb-1 text-black'>Name</p>
                    <p className='text-left mb-3'>{person.company.name}</p>
                </div>
                <div className=''>
                    <p className='text-left text-xl mb-1 text-black'>Description</p>
                    <p className='text-left mb-3'>{person.company.catchPhrase}</p>
                </div>
                <div className=''>
                    <p className='text-left text-xl mb-1 text-black'>Work</p>
                    <p className='text-left mb-3'>{person.company.bs}</p>
                </div>
            </div>
            <div>
                <div className=''>
                    <p className='text-left text-xl mb-1 text-black'>Street</p>
                    <p className='text-left mb-3'>{person.address.street}</p>
                </div>
                <div className=''>
                    <p className='text-left text-xl mb-1 text-black'>Suit</p>
                    <p className='text-left mb-3'>{person.address.suite}</p>
                </div>
                <div className=''>
                    <p className='text-left text-xl mb-1 text-black'>Zipcode</p>
                    <p className='text-left mb-3'>{person.address.zipcode}</p>
                </div>

            </div>

        </div>
    )
}

export default UserDetail