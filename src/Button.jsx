import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-indigo-400 lg:text-xl text-md lg:px-4 px-4 lg:py-3 py-2 rounded-xl hover:bg-indigo-300 hover:scale-105 
        lg:font-semibold'>{name}</button>
    </div>
  )
}

export default Button