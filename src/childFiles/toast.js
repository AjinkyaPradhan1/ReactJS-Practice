import React from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ToastFile = () =>{

   const toast1 = () => toast.dark('Hello Buddy');

    return(
        <div className="toastClass">
            <button className="btn btn-success" onClick={toast1}>Toast</button>
            
        </div>

        
    )
}

export default ToastFile;