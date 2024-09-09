question 1 :

const students = [
    {
      name:"rohan",
      rollno : 123,
      city : "bhopal"
    },
    {
      name:"soham",
      rollno : 124,
      city : "bhopal"
    },
    {
      name:"ram",
      rollno : 125,
      city : "bhopal"
    },
    {
      name:"raju",
      rollno : 126,
      city : "bhopal"
    },
  ]
  
  const ans = students.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
      </tr>
      </>
    );
  });
  
  
  const App = ()=>{
    return(
      <>
      <h1>Student data</h1>
      <table border="2" width="100px">
        <th>Roll No.</th>
        <th>Name</th>
        <th>City</th>
        {ans}
      </table>
      </>
    );
  }
  export default App;
/////////////////////////////////////////////////////////////
question 2 :
import Empdata from "./Empdata";


const ans = Empdata.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.city}</td>
      <td>{key.empno}</td>
      <td>{key.name}</td>
      <td>{key.sal}</td>
    </tr>
    </>
  );
});

const App = ()=>{
  return(
    <>
    <table border="2px" width= "500px"bgcolor="" >
      <th bgcolor = "">City</th>
      <th bgcolor = "">EmpNO.</th>
      <th>Name</th>
      <th>Salary</th>
      {ans}
    </table>
    </>
  );
}
export default App;'




const Empdata = [
  {
      name:"ramit",
      empno : 1001,
      city : "mumbai",
      sal : 44000
  },
  {
      name:"sanksar",
      empno : 1002,
      city : "jabalpur",
      sal : 44000
  },
  {
      name:"hemesh",
      empno : 1003,
      city : "indore",
      sal : 44000
  },
  {
      name:"soham",
      empno : 1004,
      city : "chennai",
      sal : 44000
  },
  {
      name:"rohan",
      empno : 1005,
      city : "bhopal",
      sal : 44000
  }
]

export default Empdata;
////////////////////////////////////////////////////////////
question 3 :
import Empdata from "./Empdata";
import Empdesign from "./Empdesign"

const ans = Empdata.map((key)=> <Empdesign eno = {key.empno} nm = {key.name} />);


const App = ()=>{
  return(
    <>
    <h1>Employee data</h1>
    <table border="2px" width= "500px" bgcolor="yellow" align="center">
      <th bgcolor = "red">City</th>
      <th bgcolor = "green">EmpNO.</th>
      <th bgcolor="violet">Name</th>
      <th bgcolor = "aqua">Salary</th>
      {ans}
    </table>
    </>
  );
}
export default App;





const Empdata = [
  {
      name:"ramit",
      empno : 1001,
      city : "mumbai",
      sal : 44000
  },
  {
      name:"sanksar",
      empno : 1002,
      city : "jabalpur",
      sal : 44000
  },
  {
      name:"hemesh",
      empno : 1003,
      city : "indore",
      sal : 44000
  },
  {
      name:"soham",
      empno : 1004,
      city : "chennai",
      sal : 44000
  },
  {
      name:"rohan",
      empno : 1005,
      city : "bhopal",
      sal : 44000
  }
]

export default Empdata;
///////////



const Empdata = (props)=>{

  return(
      <>
      <tr>
          <td>{props.nm}</td>
          <td>{props.ct}</td>
          <td>{props.fs}</td>
      </tr>
      </>
  );
}
export default Empdata;



  