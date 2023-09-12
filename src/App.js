import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import LoginAs from "./pages/LoginAs"
import LoginUser from "./pages/LoginUser";
import LoginTg from "./pages/LoginTg";
import LoginAdm from "./pages/LoginAdm";
import RegisterUser from "./pages/RegisterUser";
import RegisterTg from "./pages/RegisterTg";
import Cart from "./pages/Cart";
import Mencari from "./pages/Mencari"
import Guide from "./pages/Guide";
import Wisata from "./pages/Wisata";

import Dashboard from "./Dashboard"
import ListUser from "./user/ListUser";
import EditUser from "./user/EditUser";
import CreatUser from "./user/CreatUser";

import ListTg from "./tourguide/ListTg";
import EditTg from "./tourguide/EditTg";
import CreateTg from "./tourguide/CreateTg";

import HomeWs from "./wisatawan/Homews";
import GuideWs from "./wisatawan/Guidews";

import DetailGuide from "./wisatawan/dataws/DetailGuide";
import Cartws from "./wisatawan/Cartws";
import Order from "./wisatawan/Order";
import DetailOrder from "./wisatawan/DetailOrder";

import Wisataws from "./wisatawan/Wisataws";
import ListWisata from "./wisata/WisataList";
import EditWisata from "./wisata/WisataEdit";
import CreateWisata from "./wisata/WisataCreate";

import PrivateRoute from './PrivateRoute';
import DataOrder from "./wisatawan/DataOrder";

import DataOrderTg from "./tourguide/dataorder/OrderTg";
import ProfileTg from "./tourguide/ProfileTg";

import OrderAll from "./tourguide/dataorder/OrderAll";

const App = () => {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/loginas' element={<LoginAs/>} />
      <Route path='/loginuser' element={<LoginUser/>} />
      <Route path='/logintg' element={<LoginTg/>} />
      <Route path='/loginadm' element={<LoginAdm/>} />
      <Route path='/registeruser' element={<RegisterUser/>} />
      <Route path='/registertg' element={<RegisterTg/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/mencari' element={<Mencari/>} />
      <Route path='/guide' element={<Guide/>} />
      <Route path='/wisata' element={<Wisata/>} />

      

      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      {/* Data Master */}
      <Route path="/listuser" element={<PrivateRoute><ListUser/></PrivateRoute>} />
      <Route path="/edituser/:id" element={<PrivateRoute><EditUser/></PrivateRoute>} />
      <Route path="/creatuser" element={<PrivateRoute><CreatUser/></PrivateRoute>} />

     <Route path="/listwisata" element={<PrivateRoute><ListWisata/></PrivateRoute>} />
      <Route path="/editwisata/:id" element={<PrivateRoute><EditWisata/></PrivateRoute>} />
      <Route path="/createwisata" element={<PrivateRoute><CreateWisata/></PrivateRoute>} /> 

      <Route path="/homews" element={
                    <PrivateRoute>
                      <HomeWs/>
                    </PrivateRoute>} />
      <Route path="/guidews" element={<PrivateRoute><GuideWs/></PrivateRoute>} />
      <Route path="/cartws" element={<PrivateRoute><Cartws/></PrivateRoute>} />

      <Route path="/products/:id_tourguide" element={<PrivateRoute><DetailGuide/></PrivateRoute>} />

      <Route path="/editproducts/:id_tourguide" element={<PrivateRoute><EditTg/></PrivateRoute>} />
      <Route path="/productslist" element={<PrivateRoute><ListTg/></PrivateRoute>} />
      <Route path="/productscreate" element={<PrivateRoute><CreateTg/></PrivateRoute>} />

      <Route path="/cart/:id" element={<PrivateRoute><Order/></PrivateRoute>} />
      <Route path="/order/:id" element={<PrivateRoute><DetailOrder/></PrivateRoute>} />

      <Route path='/dataorder' element={
                  <PrivateRoute>
                    <DataOrder/>
                  </PrivateRoute>} />

      <Route path='/allorder' element={
                  <PrivateRoute>
                    <OrderAll/>
                  </PrivateRoute>} />

      <Route path='/wisataws' element={
                  <PrivateRoute><Wisataws/></PrivateRoute>} />

      <Route path='/dataordertg' element={
                  <PrivateRoute><DataOrderTg/></PrivateRoute>} />
      
      <Route path='/profiletg' element={
                  <PrivateRoute><ProfileTg/></PrivateRoute>} />


      

    </Routes>
    
   </BrowserRouter>
    
    
   
  );
}


export default App;