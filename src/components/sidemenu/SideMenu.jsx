import React, { useState } from "react";
import styles from "./SideMenu.module.css";
import logoo from "../../assets/street suite logo-04.png";
import alertsIcon from "../../assets/sidemenu/alerts.svg";
import automationIcon from "../../assets/sidemenu/automation.svg";
import portfolioIcon from "../../assets/sidemenu/portfolio.svg";
import tradingIcon from "../../assets/sidemenu/trading.svg";
import trainingIcon from "../../assets/sidemenu/training.svg";
import userImg from "../../assets/sidemenu/user.png";

const menuItems = [
  { icon: alertsIcon, title: "Alerts" , status: "available"},
  { icon: trainingIcon, title: "Training" , status: "available"},
  { icon: automationIcon, title: "Automation" , status: "comming soon"},
  { icon: portfolioIcon, title: "Portfolio" , status: "comming soon"},
  { icon: tradingIcon, title: "Trading" , status: "comming soon"}
];

function SideMenu() {

  const [isOpen, setisOpen] = useState(false);
  const OpenSideMenu = ()=>{
    setisOpen(true)
  }
  const closeSideMenu = ()=>{
    setisOpen(false)
  }

  return (
    <div className={isOpen? styles.sideMenu : styles.sideMenu + " " + styles.onClose} onMouseEnter={OpenSideMenu} onMouseLeave={closeSideMenu}>
      <div className={styles.sideMenuContent}>
        <div className={styles.logo}>
          <img src={logoo} alt="" />
        </div>

        <ul className={styles.menu}>
          {menuItems.map((ele, idx) => (
            <li key={idx} className={ele.status === "comming soon"? styles.comingSoon : ""}>
              <a href="">
                <img src={ele.icon} alt="" />
                <p>{ele.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.userInfo}>
        <div className={styles.userInfoContent}>
          <img src={userImg} alt="" />
          <div>
            <h6>Mostafa Sakr</h6>
            <p>frontend developer</p>
          </div>
        </div>
        <p>Street suit .22</p>
      </div>
    </div>
  );
}

export default SideMenu;
