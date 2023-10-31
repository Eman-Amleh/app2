import React,{useState, useEffect} from 'react'

export default function Products() {
  let [products,setproducts]=useState([]);
  const getproducts = async()=>{
      let reponse=await fetch("https://fakestoreapi.com/products");
      let data = await reponse.json();
      setproducts(data);

  }
useEffect(()=>{
     getproducts(); 
 },[])

  
 
  return(
  <div className='row'>
      {products.map((element)=>{
         
    return  <div className='col-md-4' key={element.id}>
              <h2>{element.title}</h2>
              <img src={element.image} className='w-100'/>

          </div>
      })}

  </div>

)
  }

