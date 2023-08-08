import { Avatar, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useLocation, useParams} from 'react-router-dom'

const Login = () => {
  const params=useParams()
  const{id}=params
  // let [rows,setRows]=useState('aa')
  // let [token,setToken]=useState(1)
  const location= useLocation()


  // let aaa=async()=>{
  //     let data=await fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${id}`)
  //     data =await data.json()
  //     // console.log(data)
  //     if(token)
  //   {setRows(data)
  //     console.log(rows)
  //     setToken(0)
  //   }
  // }
  
  
  //  useEffect(()=>{
  // aaa();
  //  })
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'black',color:'white',minHeight:'100vh'}}>
 
      <Avatar alt='hero.jpg' src={location.state.obj.show.image?location.state.obj.show.image.original:require('./logo192.png')} sx={{width:'300px',height:'300px',border:'2px solid white'}}/>
      <Typography variant='h5'm={0}>Name: {location.state.obj.show.name}</Typography>
      <Typography variant='h6'm={3}>Rating: {location.state.obj.show.rating.average?location.state.obj.show.rating.average:'null'}</Typography>
      <Typography variant='h6'm={0}>Runtime: {location.state.obj.show.runtime} mins</Typography>
      <Typography variant='h6'm={0}>Official Site: {location.state.obj.show.officialSite?location.state.obj.show.officialSite:'null'}</Typography>
      <Typography variant='h6'm={0}>About</Typography>
      <Typography variant='body1'm={0}> {location.state.obj.show.summary}</Typography>
    </Box>
  )
}

export default (Login)
