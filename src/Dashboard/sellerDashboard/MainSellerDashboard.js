import React,{useState,useEffect} from 'react'
import Sidebar from '../sidebar/Sidebar';
import './mainSellerDashboard.css';
function MainSellerDashboard() {
  const [pinfo,setpinfo]=useState(false);
 return (
  <>
  {/* <Sidebar></Sidebar> */}
      <div className="row">
        <div className="col-sm-3">
            <Sidebar></Sidebar>
        </div>
        <div className=" mainContentSeller col-sm-9">
          <div className="summarySeller">
            <div className="products"><h1>50</h1><br/><p>products</p></div>
            <div className="totalSale"><h1>&#x20B9; 45000   </h1>
            <br/><p>total Sale</p></div>
            <div className="shopRating"><h1>4.6</h1><br/><p>shop Rating</p></div>
          </div>
          {/* //optional on link press */}
          <div className="personalInfo">
              <div>
                <img src="/images/pi.png" alt=""/>
              </div>
              <div>
                <h2>ShopName</h2>
              </div>
              <div>
                phone: 7719591562
              </div>
              <div>
                owner: Ravindra Yadav
              </div>
              <div id="address">
                <h4>pinCode : 229307</h4>
                <h6>address: 12/lane/sb block/patiala punjab</h6>
              </div>
          </div>
          <div className="myproducts">
            
            <ul className="list-group">
                  {/* <li className="product list-group-item">
                        <h1>MY PRODUCTS</h1>
                  </li> */}
                  <a href="*"><li className="list-group-item"> <h1>
                    MY PRODUCTS</h1> </li></a>
                 <a href="*">
                   <li   className="productHeading product list-group-item">
                  <b><p>IMAGE</p></b>
                  <b><p>PRODUCT</p></b>
                  <b><p>RATING</p></b>
                  <b><p>&#x20B9; PRICE</p></b>
                </li>
                 </a>
                <a href="*">
                  <li  className=" product list-group-item">
                  <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                  <h6>shiva painting</h6>
                  <p>4.5</p>
                  <p>&#x20B9; 500</p>
                </li>
                </a>
                  <a href="*">
                  <li  className=" product list-group-item">
                  <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                  <h6>shiva painting</h6>
                  <p>4.5</p>
                  <p>&#x20B9; 500</p>
                </li>
                </a>
                
                <a href="*">
                  <li  className=" product list-group-item">
                  <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                  <h6>shiva painting</h6>
                  <p>4.5</p>
                  <p>&#x20B9; 500</p>
                </li>
                </a>
                <a href="*">
                  <li  className=" product list-group-item">
                  <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                  <h6>shiva painting</h6>
                  <p>4.5</p>
                  <p>&#x20B9; 500</p>
                </li>
                </a>
                
                <a href="*">
                  <li  className=" product list-group-item">
                  <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                  <h6>shiva painting</h6>
                  <p>4.5</p>
                  <p>&#x20B9; 500</p>
                </li>
                </a>
                <a href="*">
                  <li  className=" product list-group-item">
                  <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                  <h6>shiva painting</h6>
                  <p>4.5</p>
                  <p>&#x20B9; 500</p>
                </li>
                </a>
                
                <a href="*">
                  <li  className=" product list-group-item">
                  <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                  <h6>shiva painting</h6>
                  <p>4.5</p>
                  <p>&#x20B9; 500</p>
                </li>
                </a>
                
                <a href="*">
                  <li  className=" product list-group-item">
                  <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                  <h6>shiva painting</h6>
                  <p>4.5</p>
                  <p>&#x20B9; 500</p>
                </li>
                </a>
                
                <a href="*">
                  <li  className=" product list-group-item">
                  <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                  <h6>shiva painting</h6>
                  <p>4.5</p>
                  <p>&#x20B9; 500</p>
                </li>
                </a>
                
            </ul>
          </div>
          <div className="myproducts sales">
                 <ul className="list-group">
                   <a href="*">
                     <li className="product list-group-item">
                        <h1>SALES</h1>
                       </li>
                   </a>
                  <a href="*">
                    <li   className="productHeading product list-group-item">
                  <b><p>Product</p></b>
                  <b><p>sales count</p></b>
                  <b><p>&#x20B9; collection</p></b>
                </li>
                  </a>
                 <a href="*">
                     <li  className=" product list-group-item">
                  <div>
                      <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                      <h6>shiva painting</h6>
                  </div>
                  
                  <p>3</p>
                  <p>&#x20B9; 1500</p>
                </li>
                 </a>
                      <a href="*">
                     <li  className=" product list-group-item">
                  <div>
                      <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                      <h6>shiva painting</h6>
                  </div>
                  
                  <p>3</p>
                  <p>&#x20B9; 1500</p>
                </li>
                 </a>
          
                     <a href="*">
                     <li  className=" product list-group-item">
                  <div>
                      <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                      <h6>shiva painting</h6>
                  </div>
                  
                  <p>3</p>
                  <p>&#x20B9; 1500</p>
                </li>
                 </a>
          
                     <a href="*">
                     <li  className=" product list-group-item">
                  <div>
                      <img className="thumbnail" src="/images/pinfo.svg" alt=""/>
                      <h6>shiva painting</h6>
                  </div>
                  
                  <p>3</p>
                  <p>&#x20B9; 1500</p>
                </li>
                 </a>
          
            </ul>
         
          </div>
        </div>
      </div>
  </>
 )
}
export default MainSellerDashboard;
