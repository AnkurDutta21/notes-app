import React from 'react'
import styles from './modal.module.css'

const HomeModal = (props) => {
   const { colours,setIsModalOpen,onChangeInput,onSubmit,onChangeColor,groupName } = props
    const handleModalClose = () => {
        setIsModalOpen(false)
        console.log(click)
    }
    return (
        <div className={styles.ModalOverlay}>
            <div className={styles.ModalContainer} >
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
                            placeholder='Enter group name' />
                    </div>
                    <div className={styles.ChooseColors}>
                        <p>Choose Colour</p>
                        <div className={styles.ColourPalette}>
                            {colours.map((item, index) => (
                                <div
                                    key={item.id}
                                    style={{
                                        height: '1.2rem',
                                        width: '1.2rem',
                                        borderRadius: '50%',
                                        backgroundColor: item.color,
                                        cursor:'pointer',
                                    }}
                                    onClick={() => onChangeColor(item.color)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <button className={styles.ModalSubmitBtn} type='submit'>
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default HomeModal
