

const Addtoproduct = () => {
   
    const handlesubmit =e=>{
        e.preventDefault()
        const name =e.target.name.value
        const brandname =e.target.brandname.value
        const type =e.target.type.value
        const price =e.target.price.value
        const description =e.target.description.value
        const carpicture =e.target.picture.value

        console.log(name,brandname,type,price,description,carpicture);
       
    }


    return (
        <div className="hero min-h-screen bg-gray-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0  max-w-sm   shadow-2xl bg-base-200">
            <form onSubmit={handlesubmit} className="card-body">
              <div className="flex gap-4">
                <label className="label">
                  <span className="label-text">Name : </span>
                </label>
                <input type="name" placeholder="name" name="name" className="input input-bordered"  />


                
              </div>

              <div>
                
              <label className="label">
                  <span className="label-text">Brand-name : </span>
                </label>
                <input type="text" placeholder= " brand-name" name="brandname" className="input input-bordered"  />
              </div>

              <div>

                 <label className="label">
                  <span className="label-text">Type : </span>
                </label>
                <input type="text" placeholder= "Type" name="type" className="input input-bordered"  />

              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price </span>
                </label>
                <input type="text" placeholder="price" name="price"  className="input input-bordered" />

                <label className="label">
                  <span className="label-text">Description </span>
                </label>
                <input type="text" placeholder="Description" name="description" className="input input-bordered"  />
                  
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Car picture </span>
                </label>
                <input type="text" name="picture"  placeholder=" please ! put a car pic url link "className="input  input-bordered"  />

               
              </div>



              <div className="form-control mt-6">
                <button   className="btn btn-primary"><input type="submit" value="Add to Curt" /></button>
              </div>
             
              

            </form>
          </div>
        </div>
      </div>
    );
};

export default Addtoproduct;