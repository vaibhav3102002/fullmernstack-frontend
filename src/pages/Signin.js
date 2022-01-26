import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signin = () => {

    const [user, setUser] = useState({ name: "", email: "", phone: "", password: "", cpassword: "" })
    const navigate = useNavigate()

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({ ...user, [name]: value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            

            const response = await fetch("https://my-mern-web.herokuapp.com/register", {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",

                },

                body: JSON.stringify(user)

            })

            const res = await response.json()

            if (res.status === 500 || !res) {
                window.alert("Signin not successfully")
                console.log("Signin not successfully")



            } else {
                window.alert("Signin successfully")
                console.log("Signin successfully")
                setUser({ name: '', email: "", phone: "", password: '', cpassword: '' })
                navigate('/login')

            }
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <section className="section ">
            <form method='POST' className='container my-5'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label"><b>Name</b></label>
                    <input type="text" className="form-control" id="name" name='name' value={user.name} onChange={handleInput} autoComplete='off' />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><b>Email address </b></label>
                    <input type="email" className="form-control" id="email" name='email' value={user.email} onChange={handleInput} autoComplete='off' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label"><b>Phone </b></label>
                    <input type="number" className="form-control" id="phone" name='phone' value={user.phone} onChange={handleInput} autoComplete='off' />

                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><b> Password</b></label>
                    <input type="password" className="form-control" id="password" name='password' value={user.password} onChange={handleInput} autoComplete='off' />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label"><b>Confirm password </b></label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' value={user.cpassword} onChange={handleInput} autoComplete='off' />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default Signin
