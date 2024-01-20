import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Account from "./components/Account";
import Forget from "./components/Forget";

const App =()=>{
    return (
        <div className="main-div">
            <Login />
            <Forget />
            <Account />
            {/* <Profile /> */}
        </div>
    )
   
}
export default App;