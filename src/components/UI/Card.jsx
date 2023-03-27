import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col h-56 min-w-[180px] bg-white border border-white p-3 rounded-sm items-start shadow-lg m-4'> 
      {props.children}
    </div>
  )
}

export default Card

