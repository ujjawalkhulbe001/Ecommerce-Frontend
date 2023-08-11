
import Navbar from "./Navbar";
import Upperbody from "./upperbody";
import Main from "./body";
import Footer from "./Footer";
import Mainbody from "./body";


const Homepage = () =>{
    return (
        <>
            <div  className="m-10">
            <Navbar></Navbar>
            <Upperbody></Upperbody>
             <Main></Main>
             <Footer></Footer>  
            </div>
        </>
    )
}

export default Homepage;