import React, { useContext } from 'react'
import Data from '../../Context/Data'

const Update = ({update}) => {
    const {Image,Caption,Price,setImage,setCaption,setPrice,close}=useContext(Data)
  return (
      <div className='popup'>
            <form className='form' onSubmit={(e)=>{e.preventDefault();update(Image,Caption,Price)}}>
                  <input 
                        type='file'
                        onChange={(e)=>setImage(e.target.files[0])}/>
                  <input 
                        type='text'
                        value={Caption}
                        onChange={(e)=>setCaption(e.target.value)}/>
                  <input 
                        type='number'
                        value={Price}
                        onChange={(e)=>setPrice(e.target.value)}/>
                  <button className='inputAdd' type='submit'>UPDATE</button>
                  <button className='close' type='button' onClick={()=>close()}>CANCEL</button>
            </form>
      </div>
  )
}

export default Update