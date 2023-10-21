import React from 'react';
import'./loading.css';
function Loading({loading ,error ,children}) {
  if(loading)
  {
    return ( 
       <div className="container py-5 text-center vh-100 d-flex justify-content-center align-items-center">
       <span className="loader"></span>
       </div>)
  }
    if(error){
    return <p>{error.message}</p>
    }
    return  <div>{children}</div> ;
}
export default Loading;