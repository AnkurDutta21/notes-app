import React from "react";
import styles from "../../pages/Home/styles.module.css";
import GroupItems from "./GroupItems";
import AddGroupBtn from "./AddGroupBtn";
import { getFromLocalStorage } from "../../utils/localStorageUtils";

const GroupList = ({ setSelectedGroup, selectedGroup, setIsModalOpen }) => {
  const groupList = getFromLocalStorage("group");
  const handlegroupClick = (groupName) => {
    setSelectedGroup(groupName);
  };
  return (
    <div className={styles.groupList}>
      <h2 className={styles.GroupListHeading}>Pocket Notes</h2>
      <div style={{ height: "69vh" }}>
        {groupList?.map((group, index) => (
          <GroupItems
            key={index}
            GroupName={group.groupName}
            selected={selectedGroup === group.groupName}
            onClick={() => handlegroupClick(group.groupName)}
            color={group.selectedColor}
          />
        ))}
      </div>
      <AddGroupBtn onClick={() => setIsModalOpen(true)} />
    </div>
  );
};

export default GroupList;
