import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Component/login'
import useToken from './Component/useToken'
import 'bootstrap/dist/css/bootstrap.min.css';
import ManagerMenuOverview from './Component/Chain_Manager/ManagerMenu_Overview'
import ManagerMenuRetailer from './Component/Chain_Manager/ManagerMenu_Retailer'
import ManagerMenuRegister from './Component/Chain_Manager/ManagerMenu_Register'
import RetailerMenuEmployee from './Component/Retailer/RetailerMenu_Employee'
import RetailerMenuReport from './Component/Retailer/RetailerMenu_ReportForm'
import RetailerMenuOverview from './Component/Retailer/RetailerMenu_Overview'
// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
 

  return (
    <div className="wrapper">
    <h1>Application</h1>
    <BrowserRouter>
      <Switch>
        <Route path="/ManagerMenu_Overview">
          <ManagerMenuOverview /> 
        </Route>
        <Route path="/ManagerMenu_Retailer">
          <ManagerMenuRetailer />
        </Route>
        <Route path="/ManagerMenu_Register">
          <ManagerMenuRegister />
        </Route>
        <Route path="/RetailerMenu_Employee">
          <RetailerMenuEmployee />
        </Route>
        <Route path="/RetailerMenu_ReportForm">
          <RetailerMenuReport />
        </Route>
        <Route path="/RetailerMenu_Overview">
          <RetailerMenuOverview />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
