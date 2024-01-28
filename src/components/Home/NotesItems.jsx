import React from "react";
import dot from "../../assets/Ellipse 23.png";
import styles from "../../pages/Home/styles.module.css";

const NotesItems = ({ item }) => {
  return (
    <div key={item.name} className={styles.NotesContainer}>
      <p>{item?.notes}</p>
      <div className={styles.TimeDisplay}>
        <span className={styles.Date}>{item?.date}</span>
        <img src={dot} alt="ellipse" />
        <span className={styles.Time}>{item?.time}</span>
      </div>
    </div>
  );
};

export default NotesItems;
