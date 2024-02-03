import React from 'react'
import { Button } from 'react-bootstrap'

export default function btns({clear,show}) {
  return (
    <div className='d-flex justify-content-between'>
    <Button className='btn-style p-2' onClick={clear}>مسح الكل</Button>
    <Button className='btn-style p-2' onClick={show}>عرض البيانات</Button>
    </div>
  )
}
