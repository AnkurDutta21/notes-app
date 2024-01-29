import React, { useState } from "react";
import GroupContentDefault from "./GroupContentDefault";

import { saveToLocalStorageForGroups } from "../../utils/localStorageUtils";
import { formatDateTime } from "../../utils/timeStampUtils";
import NotesList from "./NotesList";

const GroupContent = ({
  groupList,
  selectedGroup,
  isMobile,
  setSelectedGroup,
}) => {
  const [notes, setNotes] = useState("");

  const selectedGroupItem = groupList?.find(
    (group) => group?.groupName === selectedGroup
  );

  const handleChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const { formattedDate, formattedTime } = formatDateTime(date);
    saveToLocalStorageForGroups("notes", {
      group: selectedGroup,
      data: {
        notes: notes,
        date: formattedDate,
        time: formattedTime,
      },
    });
    setNotes("");
  };

  return (
    <>
      {selectedGroup ? (
        <NotesList
          selectedGroupItem={selectedGroupItem}
          notes={notes}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          selectedGroup={selectedGroup}
          isMobile={isMobile}
          setSelectedGroup={setSelectedGroup}
        />
      ) : (
        <GroupContentDefault />
      )}
    </>
  );
};

export default GroupContent;
