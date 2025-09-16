import React , { useContext } from 'react'
import Card from './Card'
import Data from '../Context/Data'

const Sweets = () => {
  const {Sweets}=useContext(Data)
  return (
    <div className='container-fluid p-3'>
        <h1 className='text-center'>Sweets</h1>
        <ul className='d-flex flex-wrap'>
          <Card items={Sweets}/>
        </ul>
    </div>
  )
}

export default Sweets