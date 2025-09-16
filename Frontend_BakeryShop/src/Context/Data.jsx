import axios from 'axios';
import React, { createContext, useEffect,useState } from 'react'

const Data=createContext({});

export const DataProvider = ({children}) => {

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const responce=await axios.get('http://localhost:8080/cakes')
                setCakes(responce.data)
            }
            catch (e){
                console.log(e)
            }
        }
        fetchData()
    },[])

    const addCake=async(Image,Caption,Price)=>{

        // const form={id:Cakes.length +1,
        //             about:"cakes",
        //             img:Image,
        //             caption:Caption,
        //             price:Price}
        // setCakes([...Cakes,form])

        try{
            const form =new FormData()
            form.append("img", Image);
            form.append("caption", Caption);
            form.append("price", Price);
            const responce=await axios.post('http://localhost:8080/cakes',form)
            setCakes([...Cakes,responce.data])
        }
        catch(e){
            console.log(e)
        }
        
        setImage("")
        setCaption("")
        setPrice("")
        close()
    }

    const updateCake=async(Image,Caption,Price)=>{
        
        try{
            const form={id:EditId,
                    about:"cakes",
                    img:Image,
                    caption:Caption,
                    price:Price}
            const responce=await axios.put(`http://localhost:8080/cakes/${EditId}`,form)            
            const updated=Cakes.map((cake)=>cake.id===EditId?responce.data:cake)
            setCakes(updated)
        }
        catch(e){
            console.log(e)
        }

        setImage("")
        setCaption("")
        setPrice("")
        close()
    }

    const deleteCake=async(id)=>{
        try{
            await axios.delete(`http://localhost:8080/cakes/${id}`)
            setCakes(Cakes.filter((cake)=>cake.id!==id))
        }
        catch(e){
            console.log(e)
        }
    }


    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const responce=await axios.get('http://localhost:8080/sweets')
                setSweets(responce.data)
            }
            catch(e){
                console.log(e);
            }
        }
        fetchData()
    },[])

    const addSweet=async(Image,Caption,Price)=>{
        
        // const form={id:Sweets.length +1,
        //             about:"sweets",
        //             img:Image,
        //             caption:Caption,
        //             price:Price}

        // setSweets([...Sweets,form])

        try{
            const form =new FormData()
            form.append("img", Image);
            form.append("caption", Caption);
            form.append("price", Price);
            const responce=await axios.post('http://localhost:8080/sweets',form)
            setSweets([...Sweets,responce.data])
        }
        catch(e){
            console.log(e)
        }

        setImage("")
        setCaption("")
        setPrice("")
        close()
    }

    const updateSweet=async(Image,Caption,Price)=>{
        
        try{
            const form={id:EditId,
                    about:"sweets",
                    img:Image,
                    caption:Caption,
                    price:Price}
            const responce=await axios.put(`http://localhost:8080/sweets/${EditId}`,form)            
            const updated=Sweets.map((sweet)=>sweet.id===EditId?responce.data:sweet)
            setSweets(updated)
        }
        catch(e){
            console.log(e)
        }

        setImage("")
        setCaption("")
        setPrice("")
        close()
    }

    const deleteSweet=async(id)=>{
        try{
            await axios.delete(`http://localhost:8080/sweets/${id}`)
            setSweets(Sweets.filter((sweet)=>sweet.id!==id))
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const responce=await axios.get('http://localhost:8080/snacks')
                setSnacks(responce.data)
            }
            catch (e){
                console.log(e)
            }
        }
        fetchData()
    },[])

    const addSnack=async(Image,Caption,Price)=>{

        // const form={id:Snacks.length +1,
        //             about:"snacks",
        //             img:Image,
        //             caption:Caption,
        //             price:Price}

        // setSnacks([...Snacks,form])

        try{
            const form =new FormData()
            form.append("img", Image);
            form.append("caption", Caption);
            form.append("price", Price);
            const responce=await axios.post('http://localhost:8080/snacks',form)
            setSnacks([...Snacks,responce.data])
        }
        catch(e){
            console.log(e)
        }

        setImage("")
        setCaption("")
        setPrice("")
        close()
    }

    const updateSnack=async(Image,Caption,Price)=>{

        try{
            const form={id:EditId,
                    about:"snacks",
                    img:Image,
                    caption:Caption,
                    price:Price}
            const responce=await axios.put(`http://localhost:8080/snacks/${EditId}`,form)            
            const updated=Snacks.map((snack)=>snack.id===EditId?responce.data:snack)
            setSnacks(updated)
        }
        catch(e){
            console.log(e)
        }

        setImage("")
        setCaption("")
        setPrice("")
        close()
    }

    const deleteSnack=async(id)=>{
        try{
            await axios.delete(`http://localhost:8080/snacks/${id}`)
            setSnacks(Snacks.filter((snack)=>snack.id!==id))
        }
        catch(e){
            console.log(e)
        }
    }


    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const responce=await axios.get('http://localhost:8080/bevarages')
                setBevarages(responce.data)
            }
            catch(e){
                console.log(e);
            }
        }
        fetchData()
    },[])

    const addBevarage=async(Image,Caption,Price)=>{

        // const form={id:Bevarages.length +1,
        //             about:"bevarages",
        //             img:Image,
        //             caption:Caption,
        //             price:Price}

        // setBevarages([...Bevarages,form])

        try{
            const form =new FormData()
            form.append("img", Image);
            form.append("caption", Caption);
            form.append("price", Price);
            const responce=await axios.post('http://localhost:8080/bevarages',form)
            setBevarages([...Bevarages,responce.data])
        }
        catch(e){
            console.log(e)
        }

        setImage("")
        setCaption("")
        setPrice("")
        close()
    }

    const updateBevarage=async(Image,Caption,Price)=>{
        
        try{
            const form={id:EditId,
                    about:"bevarages",
                    img:Image,
                    caption:Caption,
                    price:Price}
            const responce=await axios.put(`http://localhost:8080/bevarages/${EditId}`,form)            
            const updated=Bevarages.map((bevarage)=>bevarage.id===EditId?responce.data:bevarage)
            setBevarages(updated)
        }
        catch(e){
            console.log(e)
        }

        setImage("")
        setCaption("")
        setPrice("")
        close()
    }

    const deleteBevarage=async(id)=>{
        try{
            await axios.delete(`http://localhost:8080/bevarages/${id}`)
            setBevarages(Bevarages.filter((bevarage)=>bevarage.id!==id))
        }
        catch(e){
            console.log(e)
        }
    }
    const addTo=(about)=>{
        if(about==="cakes"){setShowAddCake(!ShowAddCake)}
        else if(about==="sweets"){setShowAddSweet(!ShowAddSweet)}
        else if(about==="snacks"){setShowAddSnack(!ShowAddSnack)}
        else if(about==="bevarages"){setShowAddBevarage(!ShowAddBevarage)}
    }
    const edit=(item)=>{
        setEditId(item.id)
        setImage(item.img)
        setCaption(item.caption)
        setPrice(item.price)
        if(item.about==="cakes"){setShowUpdateCake(!ShowUpdateCake)}
        else if(item.about==="sweets"){setShowUpdateSweet(!ShowUpdateSweet)}
        else if(item.about==="snacks"){setShowUpdateSnack(!ShowUpdateSnack)}
        else if(item.about==="bevarages"){setShowUpdateBevarage(!ShowUpdateBevarage)}
    }
    const close=()=>{
        setShowAddCake(false)
        setShowAddSweet(false)
        setShowAddSnack(false)
        setShowAddBevarage(false)
        setShowUpdateCake(false)
        setShowUpdateSweet(false)
        setShowUpdateSnack(false)
        setShowUpdateBevarage(false)
    }

    const addToCart=(item)=>{

        // const form =new FormData()
        // form.append("img", Image);
        // form.append("caption", Caption);
        // form.append("price", Price);
        
        const form={id:CartList.length +1,
                    caption:item.caption,
                    price:item.price}

        setCartList([...CartList,form])
        setNotification(true)
        setTimeout(() => {setNotification(false);}, 500);
    }
    const removeCartList=(id)=>{
        setCartList(CartList.filter((cart)=>cart.id!==id))
    }


    const [Cakes,setCakes]=useState([
        // {
        //     id:1,
        //     about:"cakes",
        //     img:"one.jpg",
        //     caption:"poda",
        //     price:50
        // },
        // {
        //     id:2,
        //     about:"cakes",
        //     img:"two.jpg",
        //     caption:"da",
        //     price:150
        // }
    ])

    const [Sweets,setSweets]=useState([
        // {
        //     id:1,
        //     about:"sweets",
        //     img:"one.jpg",
        //     caption:"poda",
        //     price:50
        // },
        // {
        //     id:2,
        //     about:"sweets",
        //     img:"two.jpg",
        //     caption:"da",
        //     price:150
        // }
    ])

    const [Snacks,setSnacks]=useState([
        // {
        //     id:1,
        //     about:"snacks",
        //     img:"one.jpg",
        //     caption:"poda",
        //     price:50
        // },
        // {
        //     id:2,
        //     about:"snacks",
        //     img:"two.jpg",
        //     caption:"da",
        //     price:150
        // }
    ])

    const [Bevarages,setBevarages]=useState([
        // {
        //     id:1,
        //     about:"bevarages",
        //     img:"one.jpg",
        //     caption:"poda",
        //     price:50
        // },
        // {
        //     id:2,
        //     about:"bevarages",
        //     img:"two.jpg",
        //     caption:"da",
        //     price:150
        // }
    ])

    const [Image,setImage]=useState("")
    const [Caption,setCaption]=useState("")
    const [Price,setPrice]=useState("")
    const [ShowAddCake,setShowAddCake]=useState(false)
    const [ShowAddSweet,setShowAddSweet]=useState(false)
    const [ShowAddSnack,setShowAddSnack]=useState(false)
    const [ShowAddBevarage,setShowAddBevarage]=useState(false)
    const [ShowUpdateCake,setShowUpdateCake]=useState(false)
    const [ShowUpdateSweet,setShowUpdateSweet]=useState(false)
    const [ShowUpdateSnack,setShowUpdateSnack]=useState(false)
    const [ShowUpdateBevarage,setShowUpdateBevarage]=useState(false)
    const [Search,setSearch]=useState("")
    const [EditId,setEditId]=useState("")
    const [CartList,setCartList]=useState([])
    const [Notification,setNotification]=useState(false)

  return (
    <Data.Provider value={{Cakes,setCakes,Sweets,setSweets,Snacks,setSnacks,Bevarages,setBevarages,deleteCake,
                           addCake,updateCake,deleteSweet,addSweet,updateSweet,deleteSnack,addSnack,updateSnack,
                           deleteBevarage,addBevarage,updateBevarage,Image,setImage,Caption,setCaption,Price,
                           setPrice,ShowAddCake,ShowUpdateCake,ShowAddSweet,ShowUpdateSweet,ShowAddSnack,
                           ShowUpdateSnack,ShowAddBevarage,ShowUpdateBevarage,edit,addTo,close,Search,setSearch,
                           CartList,setCartList,addToCart,removeCartList,Notification}}>
        {children}
    </Data.Provider>
  )
}

export default Data