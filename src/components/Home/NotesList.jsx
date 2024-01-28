import React from "react";
import ArrowDisabled from "../../assets/diable arrow.png";
import arrow from "../../assets/arrow.png";
import backArrow from "../../assets/back.png";
import NotesItems from "./NotesItems";
import { firstInitials } from "../../utils/initialsUtils";
import styles from "../../pages/Home/styles.module.css";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorageUtils";

const NotesList = ({
  selectedGroupItem,
  notes,
  handleChange,
  handleSubmit,
  selectedGroup,
  isMobile,
  setSelectedGroup,
}) => {
  let notesData = [];
  const localStorageData = getFromLocalStorage("notes");
  if (localStorageData && selectedGroup) {
    notesData = localStorageData[selectedGroup] || [];
  }

  return (
    <div className={styles.groupContent}>
      <div className={styles.NotesHeader}>
        {isMobile ? (
          <div
            className={styles.backArrow}
            onClick={() => setSelectedGroup("")}
          >
            <img src={backArrow} alt="backarrow" />
          </div>
        ) : (
          ""
        )}
        <figure
          className={styles.groupItemFigure}
          style={{
            borderRadius: "3rem",
            backgroundColor: selectedGroupItem.selectedColor,
            padding: "1.1rem 1rem",
            
            color: "#fff",
          }}
        >
          {firstInitials(selectedGroupItem.groupName)}
        </figure>
        <div
          style={{
            fontSize: "1.3rem",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          {selectedGroupItem.groupName}
        </div>
      </div>
      <div className={styles.areaWrapper}>
        <div className={styles.NotesArea}>
          {notesData?.data?.map((item, index) => (
            <NotesItems item={item} />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.NotesInput}>
          <textarea rows={5} value={notes} onChange={handleChange} placeholder="Enter your notes here......"/>
          <button type="submit" className={styles.notesSubmit}>
            {notes ? (
              <img src={arrow} alt="active" />
            ) : (
              <img src={ArrowDisabled} alt="inactive" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotesList;
