import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Matchingcard from "./Matchingcard";
import Slider from "./Slider";


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
     <div>

         <Slider></Slider>

          <p className="flex justify-center text-4xl my-3 text-red-600 font-mono font-bold ">Welcome to Car-superior  </p> 
           

         <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
           {
            brand.map(card=><Matchingcard key={card._id} card={card}></Matchingcard>)
           }
        </div>

     </div>
    );
};

export default Carddetails;