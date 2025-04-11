import React , { useState }from  "react";



const SignUpForm = ({setToken, setDisplayUser}) => {
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null);


    const handleSubmit = async (e)=>{
        
        e.preventDefault();

        if(userName === ""){
           alert( "Please enter a username");
            return;
        }
        if( password === ""){
            alert("Please enter a password");
             return;
         }
        
       
        try{
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,
                {
                    method: 'POST',
                    headers: {                        
                        'Content-Type' : 'application/json',
                    },
                    body:  JSON.stringify({
                        username: userName,
                        password: password,
                    }),        
         })
         const data = await response.json();
        setToken(prev => data.token)
        setDisplayUser(prev =>{
            if(data.success){
                return userName;
            }
            else{
                return prev;
            }

           
        }
            
            )
         console.log(data);
        }catch(e){
            setError(e);
        }
    }
    

          return(
                             <>
                                <h2>Sign Up</h2>{error ? <p>error</p>: null}
                                <form action=""   onSubmit={handleSubmit
                                    }>
                                    <label htmlFor=""><div>USER: </div><input type="text" value={userName} onChange={(e)=>{
                                        setUserName(e.target.value)
                                    }} /></label><br/>
                                    <label htmlFor=""><div>PASSWORD: </div> <input type="password" value={password}  onChange={ (e)=>{
                                        setPassword(e.target.value)

                                    }}/></label><br/>
                                
                                
                                <button className="submitButton" >Submit</button>

                                </form>
                             </>
          );

}



export default SignUpForm;