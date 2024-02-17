import React from 'react'
import styles from './sidebar.module.css'
import AddNoteImg from '../../assets/addNote.svg'

function Sidebar({onAddNote}) {

  return (
    <div className={styles.sidebar}>
      <p>Note</p>
      <img src={AddNoteImg} alt="" onClick={onAddNote}/>
    </div>
  )
}

export default Sidebar