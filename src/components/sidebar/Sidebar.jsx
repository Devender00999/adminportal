import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";

import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
   const { dispatch } = useContext(DarkModeContext);

   return (
      <div className="sidebar">
         <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
               <span className="logo">Admin Portal</span>
            </Link>
         </div>
         <hr />
         <div className="center">
            <ul>
               <p className="title">MAIN</p>
               <li>
                  <DashboardIcon className="icon" />
                  <span>Dashboard</span>
               </li>
               <p className="title">LISTS</p>
               <Link to="/users" style={{ textDecoration: "none" }}>
                  <li>
                     <PersonOutlineOutlinedIcon className="icon" />
                     <span>Users</span>
                  </li>
               </Link>

               <Link to="/products" style={{ textDecoration: "none" }}>
                  <li>
                     <StoreOutlinedIcon className="icon" />
                     <span>Products</span>
                  </li>
               </Link>
               <li>
                  <CreditCardOutlinedIcon className="icon" />
                  <span>Orders</span>
               </li>
               <li>
                  <LocalShippingOutlinedIcon className="icon" />
                  <span>Delivery</span>
               </li>
               <p className="title">USEFUL</p>
               <li>
                  <AssessmentIcon className="icon" />
                  <span>Stats</span>
               </li>
               <li>
                  <NotificationsIcon className="icon" />
                  <span>Notifications</span>
               </li>
               <p className="title">SERVICE</p>
               <li>
                  <SettingsSystemDaydreamIcon className="icon" />
                  <span>System Health</span>
               </li>
               <li>
                  <PsychologyIcon className="icon" />
                  <span>Logs</span>
               </li>
               <li>
                  <SettingsApplicationsOutlinedIcon className="icon" />
                  <span>Settings</span>
               </li>
               <p className="title">USER</p>
               <li>
                  <AccountCircleOutlinedIcon className="icon" />
                  <span>Profile</span>
               </li>
               <li>
                  <LogoutOutlinedIcon className="icon" />
                  <span>Logout</span>
               </li>
            </ul>
         </div>
         <div className="bottom">
            <div
               className="colorOption"
               onClick={() => dispatch({ type: "LIGHT" })}
            ></div>
            <div
               className="colorOption"
               onClick={() => dispatch({ type: "DARK" })}
            ></div>
         </div>
      </div>
   );
};

export default Sidebar;
