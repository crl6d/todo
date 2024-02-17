import React from 'react'
import styles from './searchBar.module.css'
import SearchImg from '../../assets/search.svg'

function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder='search...'/>
      <img src={SearchImg} alt="" />
    </div>
  )
}

export default SearchBar
