import React from 'react'

const Button = ({isShowing, onShow}) => {
  return (
    <button className='btn btn-hero' onClick={onShow}>
      Show {isShowing ? 'Less' : 'More'} <span className="material-symbols-outlined arrow">
        expand_{isShowing ? 'less' : 'more'}
      </span>
    </button>
  )
}

export default Button