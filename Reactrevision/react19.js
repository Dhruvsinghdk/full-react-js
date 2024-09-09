question 1 :

import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
// ?name=thatname // same as that of 

const Search = ()=>{
    const [roll, setroll] = useState("");
    const [data, setdata] = useState([]);
    
    const handlesearch = ()=>{
        let url = `http://localhost:3000/Info?Name=${roll}`;
        axios.get(url).then((res)=>{
           setdata(res.data)
        })
    }
    const ans = data.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.Name}</td>
                <td>{key.City}</td>
                <td>{key.ID}</td>
            </tr>
            </>
        );
    })
  

    return(
        <>
        <h1>Search here</h1>
        Enter RollNo. : <input type="text" value={roll} onChange={(e)=>{setroll(e.target.value)}} />

        <Button variant="success" onClick={handlesearch}>Search</Button>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>ID</th>
        </tr>
      </thead>
      {ans}
      </Table>
        </>
    );
}
export default  Search;
/////////////////////////////////////////////////////////////////////////////////////////////////////////