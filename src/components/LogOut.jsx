import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogOut() {
    let navigate = useNavigate();
    
    useEffect(() => {

       navigate("/login")

       
    }, []);


  return (
    <div>
      
    </div>
  )
}
