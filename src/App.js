import React from 'react'
import MainSellerDashboard from './Dashboard/sellerDashboard/MainSellerDashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddProduct from './addProduct/AddProduct';
import BuyerDashboard from './Dashboard/buyerDashboard/BuyerDashboard';
import EducatorDashboard from './Dashboard/educatorDashboard/EducatorDashboard';
function App() {
  return (
    <div className="App">
      {/* <MainSellerDashboard></MainSellerDashboard> */}
    {/* <AddProduct></AddProduct> */}
    <EducatorDashboard></EducatorDashboard>
    </div>
  )
}
export default App;