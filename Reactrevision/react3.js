// Fucntional component////////////////////////?

Qestion 1 :

const Cybrom = ()=>{
    return (
        <>
        <h1>This is component!</h1>
        </>
    );
}
export default Cybrom;

import Cybrom from "./Cybrom";



const App = ()=>{
  return(
    <>

    <h1>Welcome to cybrom !!!!</h1>
    <Cybrom/>
    
    </>
  );
}
export default App;
///////////////////////////////////////////////////////
Question 2 :
import Data from "./components/Data";
import Footer from "./components/Footer";
import Header from "./components/Header";



const App = ()=>{
  return(
    <>

    <h1>Welcome to cybrom !!!!</h1>
    <Header/>
    <Data/>
    <Footer/>

    </>
  );
}
export default App;
///////////////////////////////////////////////////////////



const Header = ()=>{
  return(
      <>
      <h1>This is my Header part</h1>
      </>
  );
}
export default Header;
///////////////////////////////////////////////////



const Footer = ()=>{
  return(
      <>
      <h1>This is my Footer part</h1>
      </>
  );
}
export default Footer;
///////////////////////////////////////////////////





const Data = ()=>{
  return(
      <>
      <h1>this is Data Part</h1>
      </>
  );
}
export default Data;
/////////////////////////////////////////////////////
Question 4 : 
import Cybrom from "./Cybrom";




const App = ()=>{
  return(
    <>

    <h1>Welcome to cybrom !!!!</h1>
    <Cybrom rno = "122" name = "Rohan" />

    </>
  );
}
export default App;
///////////////////////////////////////////////////





const Cybrom = (props)=>{          // Cybrom C always be capital letter
  return (
      <>
      <h1>This is component! </h1>
      <h1>Name : {props.name}</h1>
      <h1>Roll no . : {props.rno}</h1>
      </>
  );
}
export default Cybrom;

/////////////////////////////////////////

