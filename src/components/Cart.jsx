import Swal from "sweetalert2";

const Cart = ({ cart }) => {
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
          });
        }
      });
  };

  const { name, brandname, type, price, carpicture, description, _id } = cart;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className="h-[300px]" src={carpicture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brandname}</h2>
        <p className="text-xl font-mono font-bold"> price :{price} $ </p>
        <h2 className="card-title"> Type : {name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">update</button>
          <button onClick={() => handledelete(_id)} className="btn btn-primary">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
