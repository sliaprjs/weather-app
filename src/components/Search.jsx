import React from 'react'

const Search = ({place, onSearch}) => {
  return (
    <form className='search-container' onSubmit={onSearch}>
      <input className="place-input"/>
      <button className="btn" type='submit'>Go!</button>
    </form>
  )
}

export default Search