import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, done, editDataSave, recdelete, undone } from "./reduxtoolkit/Todoslice";
import Table from 'react-bootstrap/Table';



const App = ()=>{

  const work = useSelector((state)=>state.Task.task)
  const [txtval , settxtval] = useState("");
  const [edbtn , setedbtn] = useState(true);
  const [eid , seteid] = useState("");
  const dispatch = useDispatch();
  console.log(work)
  let sno = 0;
  
  const deltask = (id)=>{
  dispatch(recdelete(id))
  }

  const tskcomp = (id)=>{
    dispatch(done(id))
  }
  const tskuncomp = (id)=>{
    dispatch(undone(id))
  }

  const datasend = (id , tsk)=>{
    seteid(id)
    setedbtn(false)
    settxtval(tsk)   
  }

  const editSave=()=>{
    dispatch(editDataSave({id:eid, tsk:txtval}))
    setedbtn(true)
    settxtval("");
   
 }
  
  const ans = work.map((key)=>{
    sno++;
    return(
    <>
     <tr>
      <td>{key.status? <span style={{color:"red" ,textDecoration:"line-through" }}>{key.tsk}</span> : key.tsk}</td>
        <td>{sno}</td>
        <td>{key.tsk}</td>
        <td><button onClick={()=>{deltask(key.id)}}>Delete</button></td>
        <td>
        {key.status? 
        (<button onClick={()=>{tskuncomp(key.id)}}>Uncomp</button>)
        : 
        (<button onClick={()=>{tskcomp(key.id)}}>Comp</button>)}
        </td>
      <td><button onClick={()=>{datasend(key.id , key.tsk)}}>Edit</button></td>
        </tr>
    </>
    );
  })
  
  return(
  <>
  Enter Txt:<input type="text" value={txtval} onChange={(e)=>{settxtval(e.target.value)}}/>
  
  {edbtn? (<button onClick={()=>{dispatch(addtask({id:Date.now() , tsk:txtval, status:false}))}}>send</button>)
  :
  (<button onClick={editSave}>Edit save</button>)}


  <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>First Name</th>
        </tr>
      </thead>
      {ans}
      </Table>
  </>
  );
}
export default App;