import React from 'react'
import styles from './addnote.module.css'
import Close from '../../assets/close.svg'

function AddNote() {

  function hideAddNote(){
    document.querySelector(`.${styles.addnote}`).style.display = 'none';
  }

  return (
    <div className={styles.addnote}>
        <h1>Add note</h1>
        <img src={Close} alt="" onClick={hideAddNote}/>
        <input type="text" placeholder='title...' className={styles.title_input}/>
        <input type="text" placeholder='text...'  className={styles.text_input}/>
        <div className={styles.create}>
            <div className={styles.color} style={{backgroundColor: '#466FFF'}}></div>
            <div className={styles.color} style={{backgroundColor: '#E74343'}}></div>
            <div className={styles.create_btn}>create</div>
            <div className={styles.color} style={{backgroundColor: '#48E958'}}></div>
            <div className={styles.color} style={{backgroundColor: '#F5C05F'}}></div>
        </div>
    </div>
  )
}

export default AddNote