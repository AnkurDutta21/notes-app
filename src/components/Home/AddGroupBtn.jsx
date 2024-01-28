import React from 'react'
import styles from '../../pages/Home/styles.module.css'

const AddGroupBtn = ({onClick}) => {
    return (
        <div className={styles.StickyButton} onClick={onClick}>
            +
        </div >
    )
}

export default AddGroupBtn