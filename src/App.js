import React, { useState } from 'react';
import './App.css';
import AddNote from './components/addNote/AddNote';
import NotesHolder from './components/notes/NotesHolder';
import SearchBar from './components/search/SearchBar';
import SideBar from './components/sidebar/Sidebar';
import Error from './components/error/Error'

function App() {
  const [showAddNote, setShowAddNote] = useState(false);
  const toggleAddNote = () => {
    setShowAddNote(!showAddNote);
  };

  const [showError, setShowError] = useState(false);
  const handleShowBtn = () => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 2000);
  }
  return (
    <div className="App" style={{ backgroundColor: "#F5F5F5" }}>

      <SideBar onAddNote={toggleAddNote} />
      {showAddNote && <AddNote />}

      <div className="holder">
        <SearchBar />
        <NotesHolder />

      {showError && <Error />}
      <button onClick={handleShowBtn}>ERROR TEST</button>
      </div>
    </div>
  );
}

export default App;
