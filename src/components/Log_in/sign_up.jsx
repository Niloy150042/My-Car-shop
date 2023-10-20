import { useContext } from "react";
import { Authcontext } from "../providers/Authprovider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/Firebase.init";


const sign_up = () => {

    const {createuser}=useContext(Authcontext)

    const  provider = new  GoogleAuthProvider() 
    const handleclickongoogle =() =>{
  
      signInWithPopup(auth, provider)
      .then(result=>{
         console.log(result.user);
         Swal.fire(
          'success !',
          'sign in with google successful',
          'success'
        )
        
      })
      .catch(error=>{
        console.log(error);
        
      })
  
     }
     
   
    
   
    const handlesubmit =e =>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value
        if(password.length>6){
          Swal.fire(
            'wrong !',
            'password should be less then 6 character',
            'error'
          )
          return;
        
        }
    
        if (/[A-Z]/.test(password)) {
          Swal.fire(
            'wrong !',
            'password should not be uppercase  character',
            'error'
          )
          return ;
        }
        if (/[!@#\$%^&*]/.test(password)) {
          Swal.fire(
            'wrong !',
            'password should not be special  character',
            'error'
          )
          return ;
        }


        
        console.log(email,password);
     
         createuser(email,password)
         .then(result=>{
            console.log(result.user);
            Swal.fire(
                'Good job!',
                'user added successfully!',
                'success'
              )
         })
         .catch(error=>{
            console.log(error);
         })
        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlesubmit} className="card-body">
        <p className="text-xl flex justify-center font-bold">please log-in</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        
               </div>
      </form>

      <div className="flex  items-center justify-center gap-4 mt-2">
              <p className="text-xl font-bold">also sign in with  </p>
              <button onClick={handleclickongoogle} className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
          </button>
            </div>

    </div>
  </div>
</div>
    );
};

export default sign_up;