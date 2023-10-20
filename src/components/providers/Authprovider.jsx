import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.init";

export const Authcontext =createContext(null);

const Authprovider = ({children}) => {

    
  const [loading ,setloading]=useState(true)
    const [user,setuser]=useState(null)

    const createuser =(email,password)=>{
         setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        return signOut(auth)

    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentuser=>{
            console.log('user in the on auth state changed',currentuser);
            setuser(currentuser)
        });
        return ()=>{
            unsubscribe()
        }

    },[])
  

     const userinfo ={
              user,createuser,loading,logout
     }

     
    return (
       <Authcontext.Provider value={userinfo} >
        {children}
        
       </Authcontext.Provider>
    );
};

export default Authprovider;