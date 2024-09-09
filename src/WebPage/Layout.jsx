import { Link, Outlet } from "react-router-dom";



const Layout = ()=>{
    return(
        <>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
        
        <hr size="4" color="orange"/>


        <Outlet/>


        <hr size="4" color="blue"/>

        </>
    );
}
export default Layout;
