import React from 'react'

export const Wrapper: React.FC = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'red'}}>
      {children}
    </div>
  )
}