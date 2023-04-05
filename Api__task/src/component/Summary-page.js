import React from "react"
import { useLocation } from "react-router-dom";
import './style.css'

const Summary = () => {
    const location = useLocation();
    const summary=location.state;
    
    return (
        <div className="main-smry">
           
          <div className="smry-data" dangerouslySetInnerHTML={{__html: summary}} />
          <p>{summary.textContent}</p>
        </div>
    )
}

export default Summary
