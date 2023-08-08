import React, { useEffect,useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const User = () => {
  
  let [rows,setRows]=useState([])


  let aaa=async()=>{
    try{
      let data=await fetch('https://api.tvmaze.com/search/shows?q=all')
      data =await data.json()
      // console.log(data)
      if(data.length!=rows.length)
    {setRows(data)
    }
    }
    catch{
      return(<h1>no internet connection</h1>)
    }
  }
  
  
   useEffect(()=>{
  aaa();
   })
  return (
    <div>
     
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow sx={{position:'sticky',width:'100vw',top:0,left:0,bgcolor:'white'}}>
            <TableCell>Shows Name</TableCell>
            <TableCell align="right">Language</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">View&nbsp;(g)</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.show.id}
              sx={{ '&:nth-of-type(even)': { textDecoration:'stroke',color:'yellow' } }}
            >
              <TableCell component="th" scope="row">
                {row.show.name}
              </TableCell>
              <TableCell align="right">{row.show.language}</TableCell>
              <TableCell align="right">{row.show.rating.average?row.show.rating.average:'null'}</TableCell>
              <TableCell align="right" ><Link to={'/user/'+row.show.id} state={{obj:row}}><Button variant='outlined'>See More</Button></Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
  )
}

export default User
