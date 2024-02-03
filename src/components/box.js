import React from 'react'
import Task from './task'

export default function box({data}) {
    
  return (
    <div className='rectangle p-2'>
        {data.length? data.map((person) => <Task key={person.id} name={person.name} date={person.date} img={person.img} />) 
        : <h3 className='py-5 text-lg-center'>لا يوجد بيانات لعرضها</h3>}
    </div>
  )
}
