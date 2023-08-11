import Navbar from "./Navbar";
import Productlisting from "./Productlisting";
import Footer from "./Footer";

const Listingpage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <p className="text-black text-5xl text-center  bg-blend-color relative top-3 font-bold">
          WOMEN
        </p>
      </div>
      <Productlisting></Productlisting>
      <Footer></Footer>
    </>
  );
};

export default Listingpage;
