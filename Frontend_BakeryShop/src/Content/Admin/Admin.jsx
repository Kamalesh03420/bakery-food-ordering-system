import React, { useContext } from 'react'
import List from './List'
import Data from '../../Context/Data'
import Input from './Input'
import Update from './Update'

const Admin = () => {
  
  const {Cakes,Sweets,Snacks,Bevarages,deleteCake,deleteSweet,deleteSnack,deleteBevarage,addTo,ShowAddCake,
         ShowUpdateCake,ShowAddSweet,ShowUpdateSweet,ShowAddSnack,ShowUpdateSnack,ShowAddBevarage,ShowUpdateBevarage,
         addCake,addSweet,addSnack,addBevarage,updateCake,updateSweet,updateSnack,updateBevarage}=useContext(Data)
  return (
    <div className='container-fluid p-3'>
      <div className='border p-3 my-2 rounded-4'>
        <div className='d-flex justify-content-between'>
          <h1 className=''>Cakes</h1>
          <button className='add' onClick={()=>addTo("cakes")}>ADD</button>
        </div>
        <div>
          <ul className='d-flex flex-wrap'>
            <List items={Cakes} del={deleteCake}/>
          </ul>
        </div>
      </div>

      <div className='border p-3 my-2 rounded-4'>
        <div className='d-flex justify-content-between'>
          <h1>Sweets</h1>
          <button className='add'  onClick={()=>addTo("sweets")}>ADD</button></div>
        <div>
          <ul className='d-flex flex-wrap'>
            <List items={Sweets} del={deleteSweet}/>
          </ul>
        </div>
      </div>

      <div className='border p-3 my-2 rounded-4'>
        <div className='d-flex justify-content-between'>
          <h1>Snacks</h1>
          <button className='add' onClick={()=>addTo("snacks")}>ADD</button></div>
        <div>
          <ul className='d-flex flex-wrap'>
            <List items={Snacks} del={deleteSnack}/>
          </ul>
        </div>
      </div>

      <div className='border p-3 my-2 rounded-4'>
        <div className='d-flex justify-content-between'>
          <h1>Bevarages</h1>
          <button className='add' onClick={()=>addTo("bevarages")}>ADD</button></div>
        <div>
          <ul className='d-flex flex-wrap'>
            <List items={Bevarages} del={deleteBevarage}/>
          </ul>
        </div>
      </div>
      


      <div style={{display:ShowAddCake?"block":"none"}}>
        <Input add={addCake}/>
      </div>
      <div style={{display:ShowAddSweet?"block":"none"}}>
        <Input add={addSweet}/>
      </div>
      <div style={{display:ShowAddSnack?"block":"none"}}>
        <Input add={addSnack}/>
      </div>
      <div style={{display:ShowAddBevarage?"block":"none"}}>
        <Input add={addBevarage}/>
      </div>



      <div style={{display:ShowUpdateCake?"block":"none"}}>
        <Update update={updateCake}/>
      </div>
      <div style={{display:ShowUpdateSweet?"block":"none"}}>
        <Update update={updateSweet}/>
      </div>
      <div style={{display:ShowUpdateSnack?"block":"none"}}>
        <Update update={updateSnack}/>
      </div>
      <div style={{display:ShowUpdateBevarage?"block":"none"}}>
        <Update update={updateBevarage}/>
      </div>
    </div>
  )
}

export default Admin