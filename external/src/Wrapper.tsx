import React from 'react'

export const Wrapper: React.FC = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'green'}}>
      {children}
    </div>
  )
}