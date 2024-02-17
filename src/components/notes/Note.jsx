import React, { useState } from 'react';
import styles from './note.module.css';
import Settings from '../../assets/settings.svg';

function Note() {
  const [showEditNote, setShowEditNote] = useState(false);

  return (
    <div className={styles.note}>
      <h1>Title</h1>
      <p>textcontent...</p>
      <img
        src={Settings} onClick={() => setShowEditNote(!showEditNote)}/>

      <div className={`${styles.editNote} ${showEditNote ? styles.active : ''}`}>
        <div className={styles.action}>
          <img src="#" alt="" />
          delete
        </div>

        <div className={styles.action}>
          <img src="#" alt="" />
          edit
        </div>

        <div className={styles.action}>
          <img src="#" alt="" />
          information
        </div>
        
      </div>
    </div>
  );
}

export default Note;
