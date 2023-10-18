

const Card = ({car}) => {

    const {picture,card_bg,category,title}=car

    return (
        <div className="card  bg-base-100 shadow-xl h-[300px] image-full ">
        <figure><img src={picture} alt="Shoes" className="w-[405px]"  /></figure>
        <div className="card-body">
          <h2  className="card-title text-4xl font-mono">{title}</h2>
        
         
    
        </div>
      </div>


    );
};

export default Card;