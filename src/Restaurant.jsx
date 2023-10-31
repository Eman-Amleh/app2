import React,{useState, useEffect} from 'react'

export default function Restaurant() {
  const [pizza, setPizza] = useState([]);
  const [onion, setOnion] = useState([]);
  const [Salad, setSaladt] = useState([]);

  const getPizza = async () => {
    const res = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza" );
    const data = await res.json();
    setPizza(data.recipes);
  };


  const getOnion=async ()=>{
    const resop= await fetch("https://forkify-api.herokuapp.com/api/search?q=Onion");
    const data= await resop.json();
    console.log(data);
    setOnion(data.recipes);

  }
  const geSalad = async()=>{
    const resop= await fetch("https://forkify-api.herokuapp.com/api/search?q=Salad");
    const data= await resop.json();
    console.log(data);
    setSaladt(data.recipes);


  }
  

  return (
    <div className='row'>
       <button onClick={() => getPizza()}>click me to show pizza</button>
       <button onClick={() => getOnion()}>click me to show onion</button>
       <button onClick={() => geSalad()}>click me to show Salad</button>
   
      {
      pizza.length > 0 &&
        pizza.map((ele) => 
        <div className='col-md-4' key={ele._id}>
        
         <img src={ele.image_url} className= 'img-fluid w-50' />
         <p>{ele.title}</p> 
         <a href='{"ele.source_url"}'>spa</a>
          </div>)}


          {
            onion.map((e)=>
            <div   className='col-md-4' key={e._id}>  
             <img src={e.image_url} className= 'img-fluid w-50' />
              <p>{e.title}</p> 
              <a href='{"e.source_url"}'>spa</a>

            
            
            
             </div>

            )

          }
          {
            Salad.map((elem)=>
            <div   className='col-md-4' key={elem._id}>  
            <img src={elem.image_url} className= 'img-fluid w-50' />
             <p>{elem.title}</p> 
             <a href='{"elem.source_url"}'>spa</a>

           
           
           
            </div>
            


            )

          }
      
    </div>
  )
}

