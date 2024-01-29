import React, { useEffect, useState } from "react";
import MainContainer from "../../layout/MainContainer";
import HomeModal from "../../components/Modal/HomeModal/HomeModal";
import GroupList from "../../components/Home/GroupList";
import { colours } from "../../Constants/constants";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorageUtils";
import GroupContent from "../../components/Home/GroupContent";
import { modalValidations } from "../../utils/validations";

const Home = () => {
  const groupList = getFromLocalStorage("group");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [errMessage,setErrMessage]=useState('')

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleColorSelect = (colorId) => {
    setSelectedColor(colorId);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const {validation} = modalValidations(groupName,selectedColor)
      if(!validation?.name && !validation?.color){
        saveToLocalStorage("group", { groupName, selectedColor });
        setIsModalOpen(false);
        setGroupName('')
        setSelectedColor('')
      }
      else{
        setErrMessage(validation)
      }
  
  };


  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <MainContainer>
      {isModalOpen ? (
        <HomeModal
          colours={colours}
          setIsModalOpen={setIsModalOpen}
          onChangeInput={handleInputChange}
          onChangeColor={handleColorSelect}
          onSubmit={handleSubmit}
          groupName={groupName}
          errMessage={errMessage}
        />
      ) : (
        ""
      )}
      {selectedGroup && isMobile ? (
        <GroupContent
          groupList={groupList}
          selectedGroup={selectedGroup}
          isMobile={isMobile}
          setSelectedGroup={setSelectedGroup}
        />
      ) : (
        <>
          <GroupList
            setSelectedGroup={setSelectedGroup}
            selectedGroup={selectedGroup}
            setIsModalOpen={setIsModalOpen}
          />
          <GroupContent
            groupList={groupList}
            selectedGroup={selectedGroup}
            isMobile={isMobile}
          />
        </>
      )}
    </MainContainer>
  );
};

export default Home;
