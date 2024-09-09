import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

const About = ()=>{

    const [mydata , setmydata] = useState([]);

    const loaddata = ()=>{
        let url = "http://localhost:3000/Info";
        axios.get(url).then((e)=>{
            setmydata(e.data)
            console.log(e.data)
        })
    }

    useEffect(()=>{ 
        loaddata();
    },[])

    const ans = mydata.map((key)=>{
        return(
           <>
        <tbody>
           <tr>
            <td>{key.id}</td>
          <td style={{backgroundColor:"GrayText",color:"whitesmoke"}}>{key.Name}</td>
          <td style={{backgroundColor:"chocolate",color:"aqua"}}>{key.City}</td>
          <td style={{backgroundColor:"bisque",color:"blue"}} >{key.ID}</td>
         <a href="#">
          <img src="./image/deleteimage.jpg" width="30" height="30" onClick={()=>{mydel(key.id)}} />
        </a>
        </tr>
        </tbody>
           </>
        );
    });

    const mydel = (myid)=>{
      let url = `http://localhost:3000/Info/${myid}`;
      axios.delete(url).then((res)=>{
        alert("Record Deleted!!")
        loaddata();
      })
    }

    return(
        <>
        
        <Table striped="columns">
      <thead>
        <tr>
          <th style={{color:"blue", backgroundColor:"purple"}}><Badge bg="primary"><h5>NAME</h5></Badge></th>
          <th style={{backgroundColor:"greenyellow"}}><Badge bg="danger"><h5>CITY</h5></Badge></th>
          <th style={{backgroundColor:"aqua"}}><Badge bg="success"><h5>USERID</h5></Badge></th>
        </tr>
      </thead>
      {ans}
      </Table>
        </>
    );
}
export default About;