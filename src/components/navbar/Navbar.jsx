import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./navbar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
   const { dispatch, darkMode } = useContext(DarkModeContext);

   return (
      <div className="navbar">
         <div className="wrapper">
            <div className="search">
               <input type="text" placeholder="Search..." />
               <SearchOutlinedIcon />
            </div>
            <div className="items">
               <div className="item">
                  <LanguageOutlinedIcon className="icon" />
                  English
               </div>
               <div className="item">
                  <FullscreenExitOutlinedIcon className="icon" />
               </div>
               <div className="item">
                  <NotificationsNoneOutlinedIcon className="icon" />
                  <div className="counter">1</div>
               </div>
               <div className="item">
                  {!darkMode ? (
                     <DarkModeOutlinedIcon
                        className="icon"
                        onClick={() => dispatch({ type: "TOGGLE" })}
                     />
                  ) : (
                     <LightModeIcon
                        className="icon"
                        onClick={() => dispatch({ type: "TOGGLE" })}
                     />
                  )}
               </div>
               <div className="item">
                  <ChatBubbleOutlineOutlinedIcon className="icon" />
                  <div className="counter">1</div>
               </div>
               <div className="item">
                  <ListOutlinedIcon className="icon" />
               </div>
               <div className="item">
                  <img
                     src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                     alt="image1"
                     className="avatar"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
