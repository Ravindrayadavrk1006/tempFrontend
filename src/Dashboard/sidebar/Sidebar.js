import React,{useState,useEffect} from 'react'
import './sidebar.css';
import {Container,Row,Col} from 'react-bootstrap';

function Sidebar() {
 useEffect(()=>{
    const script = document.createElement("script");
    script.src = "../../../public/javascripts/sidebar.js";
    script.async = true;
    document.body.appendChild(script);
 },[])
 return (
  <>  
       <div className="sidebar">
      <div className="thumbnailMain">
        <img className="thumbnailImage thumbnail " src="/logo192.png" alt="thumbnail"/>
        <h3>   MyShopName</h3>
        <h5>owner: Ravindra</h5>
        <h6>7719283847</h6>
      </div>
      <div className="options">
        <ul>
          <a href="*">
             <li> <img src="/images/pinfo.svg" alt=""/>   PersonalInfo</li>
          </a>
         
          <br/>
          <a href="*">
            <li> <img src="/images/myproducts.svg" alt=""/> MyProducts</li>
          </a>
          
          <br/>
          <a href="*">
             <li> <img src="/images/addproduct.svg" alt=""/>AddProducts</li>
          </a>
         
        </ul>
      </div>
    </div>
   
  </>
 )
}

export default Sidebar
