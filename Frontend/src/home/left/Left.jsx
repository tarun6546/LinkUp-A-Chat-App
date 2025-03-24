import React from 'react'
import Search from './Search'
import User from './User'

export default function left() {
  return (
    <div className='w-[30%] border  border-white bg-black text-white'>
      <h1 className='font-bold text-3xl p-2 px-11 align-top'>Chats</h1>
        <Search></Search>
        <hr></hr>
        <hr></hr>
        <User></User>
    </div>
  )
}
