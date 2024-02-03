import React from 'react'

export default function Task({name,date,img}) {
  return (
    <div className='d-flex gap-2 border-bottom m-2 py-1'>
      <img src={img} alt="img" className='img-avatar ' />
      <div>
        <p className='m-0 fs-5'>{name}</p>
        <p className='m-0 fs-6'>{date}</p>
      </div>
    </div>
  )
}
