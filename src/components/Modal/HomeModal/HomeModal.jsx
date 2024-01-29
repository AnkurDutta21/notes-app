import React, { useState } from "react";
import styles from "./modal.module.css";

const HomeModal = ({
  colours,
  setIsModalOpen,
  onChangeInput,
  onSubmit,
  onChangeColor,
  groupName,
  errMessage,
}) => {


  const [selected, setSelected] = useState("");

  const handleModalClose = () => {
    setIsModalOpen(false);
    console.log(click);
  };
  console.log(errMessage?.color,'[[[[[[[[[[[[[[[[[[[[[[')

  return (
    <div className={styles.ModalOverlay}>
      <div className={styles.ModalContainer}>
        <h2 className={styles.ModalHeading} onClick={() => handleModalClose()}>
          Create new group
        </h2>
        <form className={styles.ModalForm} onSubmit={onSubmit}>
          <div className={styles.ModalGroup}>
            <p>Group Name</p>
            <input
              type="text"
              value={groupName}
              onChange={onChangeInput}
              placeholder="Enter group name"
            />
          </div>
          {errMessage?.name ? (
            <p className={styles.err}>{errMessage?.name}</p>
          ) : (
            ""
          )}
          <div className={styles.ChooseColors}>
            <p>Choose Colour</p>
            <div className={styles.ColourPalette}>
              {colours.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    height: "1.2rem",
                    width: "1.2rem",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    cursor: "pointer",
                    boxShadow:
                      selected === item.color
                        ? "0px 0px 0px 2px rgba(0, 0, 0, 0.3)"
                        : "",
                  }}
                  onClick={() => {
                    onChangeColor(item.color);
                    setSelected(item.color);
                  }}
                ></div>
              ))}
            </div>
          </div>
            {errMessage?.color ? <p className={styles.err}>{errMessage?.color}</p>:''}
          <button className={styles.ModalSubmitBtn} type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeModal;
