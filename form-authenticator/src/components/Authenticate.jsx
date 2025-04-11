import React, {useState} from  "react";



const Authenticate = ({token}) => {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const requestToken =  (async ()=>{

        console.log("fired");
        try {
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`,{
                method: "GET",
                headers: {
                    'Content-Type' : "application/json",
                    Authorization : `Bearer:${token}`,
                }
            })
            const data = await response.json();
            console.log(data);
            setSuccessMessage(()=>{
                if(data.message === "jwt malformed"){
                    return "Authentication Failed"
                }
                else{
                return data.message;
                }
            })
            
        } catch (error) {
            setError(()=>{error});
        }
        

    })

          return(
                             <div className="authenticateDiv">
                             <h2>Authenticate</h2>
                             <div className="authenticateBox">
                             <button className="authenticateButton" onClick={()=>{
                                requestToken();
                             }}>Authenticate Token</button>
                             {successMessage && successMessage}
                             </div>

                             </div>
          );

}



export default Authenticate;