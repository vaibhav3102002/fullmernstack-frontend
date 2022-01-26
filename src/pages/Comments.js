import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Comments = () => {
    const [messageInfo, setMessageInfo] = useState({ name: '', email: '', phone: '', message: '' });
    const nevigator = useNavigate()

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setMessageInfo({ ...messageInfo, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/comment', {
                method: 'POST',
                headers: {
                    Accept:"application/json",
                    "Content-Type": "application/json"
                },
                credentials:'include',
                body:JSON.stringify(messageInfo)

            })
            const data = await response.json()
            if(data.status===404 || !data){
                window.alert("Message not sent")
            
            }else{
                window.alert("Message sent succcesfully")
                setMessageInfo({...messageInfo,message:""})
            }


        } catch (error) {
            console.log(error);

        }


    }
    const populateData = async () => {
        try {
            const populateResponse = await fetch('http://localhost:8000/comment', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    
                },
                credentials:'include'
            })
            const populateData = await populateResponse.json()
            const {name,email,phone}=populateData
            
            if (populateResponse.status === 404) {
                window.alert("Please login to continue")
                nevigator('/login')

            } else {
                setMessageInfo({name,email,phone})
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateData()
    }, []);





    return (
        <div>
            <section className="section">
                <form method='POST'>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" value={messageInfo.name} onChange={handleInput} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={messageInfo.email} onChange={handleInput} />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="phone" name='phone' aria-describedby="emailHelp" value={messageInfo.phone} onChange={handleInput} />

                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="message" name='message' value={messageInfo.message} onChange={handleInput}></textarea>
                        <label htmlFor="message">Comments</label>
                    </div>


                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>


            </section>
        </div>
    )
}

export default Comments
