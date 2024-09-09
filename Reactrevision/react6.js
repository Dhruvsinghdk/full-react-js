////////////////////////////////////////////////////
question 1 :
react stylliing using css:
inline css :
const App = ()=>{
    return(
      <>
      <h1 style={{color:"blue", fontFamily:"fantasy",backgroundColor:"green"}}>Display Students name :</h1>
      <h1 style={{color:"blueviolet", textDecoration:"underline",backgroundColor:"yellow"}}>Display students backgroun</h1>
      </>
    );
  }
  
  export default App;
////////////////////////////////////////////////////////////////////
question 2 :

css on constant objects :
const box = {
  width : "300px",
  height : "300px",
  backgroundColor : "green",
  broderRadius : "3px"
}


const App = ()=>{
  return(
    <>
    <div style={box}> 
      <h1>welcome to bhopal</h1>
    </div>
    </>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////

question 3 :



const App = ()=>{
  return(
    <center>
    <div  style={{width:"500px" , height:"300px",backgroundColor:"yellow", border:"4px solid aqua", padding:"20px",marginTop:"100px", borderRadius:"20px"}}> 
      <div style={{width:"300px",height:"200px",backgroundColor:"green", margin:"20px", border:"4px solid white",padding:"20px",borderRadius:"30px"}}>
        <div style={{width:"200px", height:"80px",backgroundColor:"blue", margin:"10px", border: "4px solid red",textAlign:"center",padding:"20px",borderRadius:"20px"}}>
          <h1 style={{color:"red" }}>Welcome</h1>
        </div>
      </div>
    </div>
    </center>
  );
}

export default App;






  
  
  