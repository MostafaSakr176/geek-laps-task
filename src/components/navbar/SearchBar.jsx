import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/search.svg";
import notifIcon from "../../assets/notif.svg";

function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <h2>Alerts</h2>
      <div className={styles.notification_searchInput}>
        <div className={styles.searchInput}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search By.."
          />
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <button className={styles.notificationBtn} type="button">
          <img src={notifIcon} alt="" />
          <span>6</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
