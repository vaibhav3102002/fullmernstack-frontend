import React,{useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context';

const Logout = () => {
    const nevigator=useNavigate()
    const {dispatch}=useGlobalContext()

  



    useEffect(() => {
        fetch('http://localhost:8000/logout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            nevigator('/')
            dispatch({type:"LoggedIn",payload:false})
            if(res.status !==200){
                const error=new Error(res.error)
                throw error
            }
        }).catch((err)=>{
            console.log(err);
        })
      
    }, []);

    return <>
   

    <section className="section">


    </section>
    </>
};

export default Logout;
