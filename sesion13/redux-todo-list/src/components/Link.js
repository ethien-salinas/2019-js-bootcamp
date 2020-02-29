import React from 'react'

const Link = ({ active, children, onClick }) => (
  <button
    class="button is-link"
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '6px'
    }}
  >
    {children}
  </button>
)

export default Link