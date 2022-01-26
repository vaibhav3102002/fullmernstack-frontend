import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../context';

const Login = () => {
    const [logUser, setLogUser] = useState({logEmail:"",logPassword:""})
    const nevigator=useNavigate()
   const{dispatch} =useGlobalContext()


    const handleLogInput=(e)=>{
        const name=e.target.name
        const value=e.target.value

        setLogUser({...logUser,[name]:value})

        
    }
    const handleLogSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response=await fetch('https://my-mern-web.herokuapp.com/login',{
                method:'POST',
                withCredentials: true,
                credentials: 'include',
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(logUser)
            })
            const res=await response.json()
            if(res.status===404 || !res){
                window.alert("Login Failed")
                console.log("Login Failed")
            }else{
                dispatch({type:"LoggedIn",payload:true})
                window.alert("Login succesfully")
                console.log("Login succesfully")
                nevigator('/')
            }

        } catch (error) {

            console.log(error);
            
        }
    }

    return (
        <section className="section">
            <form className='container my-5 ' method='POST'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b> </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='logEmail' value={logUser.logEmail} onChange={handleLogInput} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"> <b>Password</b></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='logPassword' value={logUser.logPassword} onChange={handleLogInput} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleLogSubmit} >Submit</button>
            </form>

        </section>

    )
}

export default Login
