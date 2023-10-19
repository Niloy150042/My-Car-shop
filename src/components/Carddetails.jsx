import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Matchingcard from "./Matchingcard";


const Carddetails = () => {
    const [brand,setselectedbrands]=useState([])

    const {title}=useParams()
    
    const brands=useLoaderData()
    console.log(brands);

    useEffect(()=>{
        const selectedbrand =brands?.filter(brand=>

            brand.brandname==title    
        
        )
        setselectedbrands(selectedbrand)
    },[title,brands])
    

  

  console.log(brand);

 

  
   
  



  

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
           {
            brand.map(card=><Matchingcard key={card._id} card={card}></Matchingcard>)
           }
        </div>
    );
};

export default Carddetails;