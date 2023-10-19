import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="flex justify-center gap-1">
      <div>
        <img
          className="mb-10"
          src="https://i.ibb.co/JqtCxwL/404-error-h-half-column-mobile.png"
          alt=""
        />
 
        <Link to={'/'}><button className="btn btn-primary mb-3 flex justify-center"> go to home page </button></Link>
      </div>
    </div>
  );
};

export default Errorpage;
