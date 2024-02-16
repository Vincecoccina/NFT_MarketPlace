import React from 'react'

export default function Button({children} : any) {
  return (
    <button className='text-white font-semibold bg-gradient-to-r from-fuchsia-700 to-pink-600 py-2 px-5 rounded-[5px] hover:from-fuchsia-600 hover:to-pink-500'>
      {children}
    </button>
  )
}
