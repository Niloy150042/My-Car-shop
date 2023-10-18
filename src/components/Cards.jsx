import { useEffect, useState } from "react";
import Card from "./Card";



const Cards = () => {
    const [cars,setcars]=useState([])
   useEffect(()=>{
    fetch('/data.json')
    .then(res=>res.json())
    .then(cars=>setcars(cars))
   },[])
   console.log(cars);

    
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-2 gap-5 bg-gray-400 p-3 "   >
            {
                cars?.map(car=><Card key={car.id} car={car}></Card>)
            }
            
        </div>
    );
};

export default Cards;