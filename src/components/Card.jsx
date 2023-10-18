import { Link } from "react-router-dom";


const Card = ({car}) => {

    const {id,picture,card_bg,category,title}=car

    return (
        <Link to={`card/${id}`}>
        <div className="card  bg-base-100 shadow-xl h-[300px] image-full ">
        <figure><img src={picture} alt="Shoes" className="w-[405px]"  /></figure>
        <div className="card-body">
          <h2  className="card-title text-4xl font-mono">{title}</h2>
        
         
    
        </div>
      </div></Link>


    );
};

export default Card;