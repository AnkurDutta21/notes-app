import React from "react";
import styles from "../../pages/Home/styles.module.css";
import { firstInitials } from "../../utils/initialsUtils";

const GroupItems = ({ GroupName, selected, onClick, color }) => {
  return (
    <div
      className={`${styles.groupItemContainer} ${
        selected ? styles.selected : ""
      }`}
      onClick={onClick}
    >
      <figure
        className={styles.groupItemFigure}
        style={{
          borderRadius: "50%",
          backgroundColor: color,
          padding:firstInitials(GroupName).length == 2 ? "1rem 1rem" : '1.1rem 1.5rem' ,
          color: "#fff",
          textAlign:'center'
        }}
      >
        {firstInitials(GroupName)}
      </figure>
      <div className={styles.groupItemText}>{GroupName}</div>
    </div>
  );
};

export default GroupItems;
