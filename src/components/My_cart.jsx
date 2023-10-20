import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const My_cart = () => {
  const addedcart = useLoaderData();
  const [users, setusers] = useState(addedcart);

  const handledelete = (_id) => {
    fetch(`https://car-server-site-nine.vercel.app/carts/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remainingdata = users.filter((cart) => cart._id !== _id);
            setusers(remainingdata);
          });
        }
      });
  };

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5">
      {users?.map((cart) => (
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="h-[300px]" src={cart.carpicture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{cart.brandname}</h2>
            <p className="text-xl font-mono font-bold">
              {" "}
              price :{cart.price} ${" "}
            </p>
            <h2 className="card-title"> Type : {cart.name}</h2>
            <p>{cart.description}</p>
            <div className="card-actions justify-end">
              <Link to={`/updattedcart/${cart._id}`}>
                {" "}
                <button className="btn btn-primary">update</button>
              </Link>
              <button
                onClick={() => handledelete(cart._id)}
                className="btn btn-primary"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default My_cart;
