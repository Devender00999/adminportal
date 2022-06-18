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

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="top">
            <span className="logo">Admin Portal</span>
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
               <li>
                  <PersonOutlineOutlinedIcon className="icon" />
                  <span>Users</span>
               </li>
               <li>
                  <StoreOutlinedIcon className="icon" />
                  <span>Products</span>
               </li>
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
            <div className="colorOption"></div>
            <div className="colorOption"></div>
         </div>
      </div>
   );
};

export default Sidebar;
