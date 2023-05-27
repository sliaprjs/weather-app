import React from 'react'

const Search = ({place, onSearch}) => {
  return (
    <form className='search-container' onSubmit={onSearch}>
      <input className="place-input" placeholder='Another location'/>
      <button className="btn" type='submit'>Find</button>
    </form>
  )
}

export default Search