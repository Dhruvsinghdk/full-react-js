

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

export default function Contact() {
  const [mydata, setmydata] = useState([]);

 const loaddata = ()=>{
    let url = "http://localhost:3000/Info"

    axios.get(url).then((res)=>{
      console.log(res.data)
      setmydata(res.data)
    })
  }

 useEffect(()=>{
    loaddata();
  },[])

  
  const ans = mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.name}</td>
        <td>{key.id}</td>
        <td>{key.city}</td>
      </tr>
      </>
    );
  })

  return (
    <>
      <table>
      <th>Name</th>
      <th>Id</th>
      {ans}
      </table>
    </>
  )
}
