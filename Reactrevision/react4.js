question 1 :

import Cybrom from "./Cybrom";

const App = ()=>{
  return(
    <>

    <h1 align = "center">Welcome to cybrom !!!!</h1>
   <Cybrom nm = "rohan" fs = "2300000" add = "Bhopal"/>

    </>
  );
}
export default App;

const Cybrom = (props)=>{          // Cybrom C always be capital letter
    return (
        <>
       <h1>Name : {props.nm}</h1>
       <h1>Address : {props.add}</h1>
       <h1>Total fees : {props.fs}</h1>

        </>
    );
}
export default Cybrom;
////////////////////////////////////////////////////////////////
qustion 2 :
import Cybrom from "./Cybrom";

const name = "rohan";
const rollno = "123";
const Address = "Bhopal";
const Fees = 250000;


const App = ()=>{
  return(
    <>

  <h1 align = "center">Welcome to cybrom !!!!</h1>
  <Cybrom nm = {name} rno = {rollno} add = {Address} fs = {Fees} />

    </>
  );
}
export default App;




const Cybrom = (props)=>{          // Cybrom C always be capital letter
  return (
      <>
     <h1>Name : {props.nm}</h1>
     <h1>Rollno : {props.rno}</h1>
     <h1>Address : {props.add}</h1>
     <h1>Total feees : {props.fs}</h1>

      </>
  );
}
export default Cybrom;

///////////////////////////////////////////////////////////////
question 3 :
import Stu from "./Stu";

const info = {
  name : "rohan",
  rollo : 1240,
  fees : 250000,
  City : "bhopal"
}

const App = ()=>{
  return(
    <>
    <h1 align = "center">Welcome to sub : </h1>
    <Stu nm = {info.name} rno = {info.rollo} fs = {info.fees} ct = {info.City} />

    </>
  );
}
export default App;




const Stu = (props)=>{
  return(
      <>
      <h1>Name : {props.nm}</h1>
      <h1>Student rollno : {props.rno}</h1>
      <h1>Total fess : {props.fs}</h1>
      <h1>City : {props.ct}</h1>
      </>
  );
}
export default Stu;
/////////////////////////////////////////////////////////////
Array mapping :
question 4 ;


const name = ["rohan","soham","mohan","ram","manju"];

const nm = name.map((key)=>{
  return(
    <>
    <h1>{key}</h1>
    </>
  );
});



const App = ()=>{
  return(
    <>
    <h1 align = "center">Welcome to sub : </h1>
    {nm}

    </>
  );
}
export default App;

/////////////////////////////////////////////////////////////////

question 5 :

const name = [1,2,3,4,5,6];

const mydata = name.map(key => <h1>{key*3}</h1>);



const App = ()=>{
  return(
    <>
    <h1 align = "center">Welcome to sub : </h1>
    {mydata}

    </>
  );
}
export default App;


