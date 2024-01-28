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
          borderRadius: "3rem",
          backgroundColor: color,
          padding: "1.1rem 1rem",
          color: "#fff",
        }}
      >
        {firstInitials(GroupName)}
      </figure>
      <div className={styles.groupItemText}>{GroupName}</div>
    </div>
  );
};

export default GroupItems;
