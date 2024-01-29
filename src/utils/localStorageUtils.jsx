import { toast } from "react-toastify";

export const saveToLocalStorage = (key, data) => {
  try {
    const isDataAvailable = localStorage.getItem(key);
    const newData = isDataAvailable ? JSON.parse(isDataAvailable) : [];
    
    if (newData.find((item) => item.groupName === data.groupName)) {
      throw new Error("Group name already exist");
    }
    else{
      newData.push(data);
      localStorage.setItem(key, JSON.stringify(newData));
    }

   
    
  } catch (err) {
    console.log(err.message, "++-------------------");
   toast(err.message)
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.log(err, "+++-------------------");
  }
};

export const clearLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log(err, "+++-------------------");
  }
};

export const saveToLocalStorageForGroups = (key, Userdata) => {
  try {
    let data = JSON.parse(localStorage.getItem(key)) || {};
    if (!data[Userdata.group]) {
      data[Userdata.group] = { data: [] };
    }
    data[Userdata.group].data.push(Userdata.data);
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err, "++-------------------");
  }
};
