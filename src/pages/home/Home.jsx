import React from "react";

import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Home(props) {
   return (
      <div className="home">
         <Sidebar />
         <div className="homeContainer">
            <Navbar /> Home
         </div>
      </div>
   );
}

export default Home;
