import React,{useState,useEffect} from 'react';


const Home = () => {
    const [loggedIN, setLoggedIN] = useState(false);
    const [name, setName] = useState('');



    const fetchDataHome=async()=>{
        try {
            const response=await fetch('http://localhost:8000/',{
                method:'GET',
                headers:{
                    ACCEPT:"application/json",
                    'Content-Type':'application/json'
                },
                credentials:'include'
            })
            const data=await response.json()
            if(response.status===404){
                setLoggedIN(false)
            }else{
                setLoggedIN(true);
                setName(data.name)
            }



        } catch (error) {
            console.log(error);

            
        }
    }

    useEffect(() => {
        fetchDataHome()
    }, []);
    

    return (
        <section className='section home-section'>
            <div className="main">
                <h1  >Welcome</h1>
                <h2>{loggedIN?`Thank you ${name} for visiting our site ` :'Thank you for visiting our site first time'} </h2>
            </div>

        </section>
    )
}

export default Home
