import { Link } from "react-router-dom";


const Matchingcard = ({card}) => {

    const {carpicture,description,price,brandname,name,_id}=card
    return (
        <div class="card card-side bg-blue-200 shadow-xl">
  <figure><img src={carpicture} className=" lg:h-[200px] lg:w-[300px]  rounded-2xl" alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl font-bold">{brandname}</h2>
    <p>{description}</p>
  
    <div class="card-actions justify-center flex">
      <button class="btn btn-primary">Price :{price} $</button>
     <Link to={`/details/${_id}`}> <button class="btn btn-primary">view details</button></Link>
    </div>

  </div>
</div>
    );
};

export default Matchingcard;