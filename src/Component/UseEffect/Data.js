import React from 'react'
import { useParams } from "react-router-dom";
import { useState,useEffect} from 'react'

function Data() {
  
  let params = useParams();
  

  return (
    <div>
      
      
      
   <h2>Invoice: {params.id}</h2>
    </div>
  )
}

export default Data