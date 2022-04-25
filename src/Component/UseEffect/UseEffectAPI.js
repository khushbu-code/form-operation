
import React, { useState,useEffect} from 'react'
import { Routes, Route, Link, Router } from "react-router-dom";
import Data from './Data';
import Data1 from './Data1';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';   
import Collapse from '@mui/material/Collapse';



export const UseEffectAPI = () => {
    const [user,setUsers]=useState([])
    const [search,setSearch]=useState('')
    

const getUsers=async()=>{
const response= await fetch("https://jsonplaceholder.typicode.com/posts");

setUsers(await response.json());

}
    useEffect(()=>{
        getUsers();
    },[])

    function datapass(id)
    {
        return <Data  id="id"/>
    }
 
    
    return (
        <>
        
            <h1>List of User</h1><br></br>
            <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search..."></input>
            
            

            <div className='container-fluid mt-5'>
                <div className='row text-center'>
{
    user.filter((value)=>{
        if(search==="")
        {
            return value;
        }else if(value.title.toLowerCase().includes(search.toLowerCase())){
            return value;
        }
    }).map((ele)=>{
        return(

            <div onClick={()=>datapass(ele.id)}><Link to={`/useeffect/${ele.id}`}>
            {/* <div className='mid'>
              <div className='col-10 col-md-4 mt-5'>
                        <div className='card p-2'>
                            <div className='d-flex align-item-center'>
                                <div className='mi-3 w-100'>
                                    <h4 className='mb-0 mt-0 textLeft'><span className='textLeft'>{ele.title}</span></h4>
                                    <div className='p-2 mt-2 bg-primary  round text-white stats'>
                                        <div>UserId-{ele.userId}</div>
                                        <div>Id-{ele.id}</div>
                                        <div>{ele.body}</div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>      
                
            </div> */}

<Card sx={{ maxWidth: 345 }}>
<React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {ele.title}
      </Typography>
      <Typography variant="h5" component="div">
        Id :{ele.id}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {ele.userId}
      </Typography>
      <Typography variant="body2">
        {ele.body}
        <br />
        
      </Typography>
    </CardContent>
    
  </React.Fragment>
  </Card>
            </Link></div>
        
        )
    })
}


                    
                </div>
            </div>

            
          
        </>
    )
}
