import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

const About = () => {
    const nevigator=useNavigate()
    const [userInfo, setUserInfo] = useState({})
    const fetchData=async()=>{
        try {
            const response=await fetch('https://my-mern-web.herokuapp.com/about',{
                method:'GET',
                headers:{
                    ACCEPT:"application/json",
                    'Content-Type':"application/json"
                },
                credentials:'include'
            })
            const data=await response.json()
           
            
          if(response.status===404){
              const error=new Error(response.error)
              throw error;
          }else{
              setUserInfo(data)
          }


        } catch (error) {
            console.log(error);
            window.alert("Please login first")
            nevigator('/login')

        }

    }


    useEffect(() => {
        fetchData()
       
    }, [])

    const {name,email,phone}=userInfo
    return (
        <section className="section about-section">
            <div className="about-lines">
                <h3>Name :</h3>
                <h4>{name}</h4>

            </div>
            <div className="about-lines">
                <h3>Email :</h3>
                <h4>{email}</h4>

            </div>
            <div className="about-lines">
                <h3>Phone :</h3>
                <h4>{phone}</h4>

            </div>
           
            
        </section>
    )
}

export default About
