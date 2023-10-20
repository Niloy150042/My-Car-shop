import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updattedcart = () => {
  const carts = useLoaderData();

  const handleupdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const brandname = e.target.brandname.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const carpicture = e.target.picture.value;

    const brand = { name, brandname, type, price, description, carpicture };
    fetch(`https://car-server-site-nine.vercel.app/brand/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brand),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "user updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  const { name, brandname, price, type, description, carpicture, _id } = carts;
  return (
    <div className="hero min-h-screen bg-gray-300">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0  max-w-sm   shadow-2xl bg-base-200">
          <form onSubmit={handleupdate} className="card-body">
            <div className="flex gap-4">
              <label className="label">
                <span className="label-text">Name : </span>
              </label>
              <input
                type="name"
                defaultValue={name}
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Brand-name : </span>
              </label>
              <input
                type="text"
                defaultValue={brandname}
                placeholder=" brand-name"
                name="brandname"
                className="input input-bordered"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Type : </span>
              </label>
              <input
                type="text"
                defaultValue={type}
                placeholder="Type"
                name="type"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price </span>
              </label>
              <input
                type="text"
                defaultValue={price}
                placeholder="price"
                name="price"
                className="input input-bordered"
              />

              <label className="label">
                <span className="label-text">Description </span>
              </label>
              <input
                type="text"
                defaultValue={description}
                placeholder="Description"
                name="description"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Car picture </span>
              </label>
              <input
                type="text"
                defaultValue={carpicture}
                name="picture"
                placeholder=" please ! put a car pic url link "
                className="input  input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">
                <input type="submit" value="update information" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updattedcart;
