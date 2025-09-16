import React, { useContext } from 'react'
import Card from './Card'
import Data from '../Context/Data'

const Bevarages = () => {
  const {Bevarages}=useContext(Data)
  return (
    <div className='container-fluid p-3'>
        <h1 className='text-center'>Bevarages</h1>
        <ul className='d-flex flex-wrap'>
          <Card items={Bevarages}/>
        </ul>
    </div>
  )
}

export default Bevarages