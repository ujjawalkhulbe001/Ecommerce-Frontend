 

 const Footer=()=>{
    return(
        <>
        <div className="bg-black lg:my-8 pb-8 lg:mx-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-3 ml-20 pt-10 text-white">
      
          <div className="grid grid-rows-4 gap-2">
            <div>
              <a href="#" className="hover:text-orange-500">Shop All</a>
            </div>
        
            <div>
              <a href="#" className="hover:text-orange-500">About</a>
            </div>
        
            <div>
              <a href="#" className="hover:text-orange-500">Contact</a>
            </div>
        
            <div>
              <a href="#" className="hover:text-orange-500">StockList</a>
            </div>
          </div>
      
          <div className="grid grid-rows-4 gap-2">
            <div>
              <a href="#" className="hover:text-orange-500">FAQ</a>
            </div>
        
            <div>
              <a href="#" className="hover:text-orange-500">Shipping & Return</a>
            </div>
        
            <div>
              <a href="#" className="hover:text-orange-500">Store Policy</a>
            </div>
        
            <div>
              <a href="#" className="hover:text-orange-500">Payments methods</a>
            </div>
           
          </div>
      
          <div className="grid grid-rows-4 gap-2">
            <div>
              <a href="#" className="hover:text-orange-500">Instagram</a>
            </div>
        
            <div>
              <a href="#" className="hover:text-orange-500">Pinterest</a>
            </div>
        
            <div>
              <a href="#" className="hover:text-orange-500">Twitter</a>
            </div>
        
            <div>
              <a href="#" className="hover:text-orange-500">Facebook</a>
            </div>
          </div>
      
          <div className="grid grid-rows-4 gap-2">
            <div>
              <span className="font-bold">Join our mailing list</span>
            </div>
        
            <div>
              <span>and get 10% off</span>
            </div>
        
            <div>
              <input type="email" className="text-white border-solid border-white border-2 w-48 bg-black" placeholder="Enter a valid email"/>
            </div>
        
            <div>
              <button className="bg-orange-600 text-white text-center hover:bg-white hover:text-orange-600 hover:border-white w-48 h-8">Subscribe Now</button>
            </div>
          </div>
      
        </div>
      </div>
      </>
    )
 }


 export default Footer;