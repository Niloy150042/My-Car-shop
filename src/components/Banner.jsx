import Cards from "./Cards";
import Extrasection1 from "./Extrasection1";
import Extrasection2 from "./Extrasection2";

const Banner = () => {
    return (
      <div>
          <div className="hero h-[500px] rounded-md" style={{backgroundImage: 'url(https://i.ibb.co/DYHfw6m/photo-1611566026373-c6c8da0ea861.jpg)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-gray-300 font-mono">Hello Our happy clients </h1>
            <p className="mb-5 text-xl font-serif">We are providing the best Cars to entertain you and we always want to provide the best service and product with a reliable ensurity and guarantee.Please let us know your requirements</p>
            <button className="btn btn-primary">Explore us !</button>
          </div>
        </div>
       
       
      </div>

  
      <Extrasection1></Extrasection1>
      <Extrasection2></Extrasection2>
      <Cards></Cards>
      </div>
     
     
    );
};

export default Banner;