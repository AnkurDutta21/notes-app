import React from 'react'
import styles from '../../pages/Home/styles.module.css'
import defaultImg from '../../assets/defaultImg.png'
import vector from '../../assets/vector.png'


const GroupContentDefault = () => {
  return (
    <div className={styles.groupContentDefault}>
    <div className={styles.defaultContent}>
    <img src={defaultImg} alt="default" />
    <h2>Pocket Notes</h2>
    <p>Send and receive messages without keeping your phone online.<br />
      Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
   <div className={styles.EndToEnd}>
   <img style={{height:'19px',width:'18px'}} src={vector} alt="lock-icon" /><p>end-to-end encrypted</p>
   </div>
  </div>
  </div>
  )
}

export default GroupContentDefault