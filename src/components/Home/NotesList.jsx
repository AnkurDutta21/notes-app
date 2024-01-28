import React from "react";
import ArrowDisabled from "../../assets/diable arrow.png";
import arrow from "../../assets/arrow.png";
import NotesItems from "./NotesItems";
import { firstInitials } from "../../utils/initialsUtils";
import styles from "../../pages/Home/styles.module.css";
import { getFromLocalStorage } from "../../utils/localStorageUtils";

const NotesList = ({
  selectedGroupItem,
  notes,
  handleChange,
  handleSubmit,
  selectedGroup,
}) => {
  console.log(selectedGroup,'from notrs')
  const localStorageData = getFromLocalStorage("notes");
  let notesData = [];
  if (localStorageData && selectedGroup) {
    notesData = localStorageData[selectedGroup] || [];
  }
  console.log(notesData?.data, "dfghjkl");


  return (
    <div className={styles.groupContent}>
      <div className={styles.NotesHeader}>
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
              {
                notesData?.data?.map((item,index)=>(
        <NotesItems item={item} />
        ))
      }
     </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.NotesInput}>
          <textarea rows={5} value={notes} onChange={handleChange} />
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
