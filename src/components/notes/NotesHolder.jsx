import React from 'react'
import styles from './note.module.css'
import Note from './Note'


function NotesHolder() {
  return (
    <div>
        <p style={{marginTop: '46px', fontSize: '20px', fontWeight: 'bold'}}>All Notes</p>
        <div className={styles.notesHolder}>
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    </div>
  )
}

export default NotesHolder