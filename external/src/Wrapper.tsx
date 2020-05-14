import React from 'react'

export const Wrapper: React.FC = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'blue'}}>
      {children}
    </div>
  )
}