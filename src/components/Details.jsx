import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const [singlecard,setsinglecard]=useState([])

    const details= useLoaderData()
    const {_id}=useParams()
    

    useEffect(()=>{
   
         const selectedcard = details.find(detail=>detail._id==_id)
         setsinglecard(selectedcard)
         console.log(singlecard);

         
    },[])

    const {name,brandname,type,price,carpicture,description}=singlecard


   
     




    return (
        <div className="card card-compact lg:w-96  bg-base-100 shadow-xl">
            <p className="text-3xl text-center font-bold text-red-600">{brandname}</p>
  <figure><img src={carpicture} alt="Shoes" /></figure>
  <div className="card-body">
    
    <h2 className="card-title">{name}</h2>
    <p className="font-bold">price:{price} $</p>
    <p className="font-bold"> Type: {type}</p>
    
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button  className="btn btn-primary">Add to My_cart</button>
    </div>
  </div>
</div>
    );
};

export default Details;