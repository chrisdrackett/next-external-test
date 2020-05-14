import React from 'react'

import { Wrapper } from 'external'

export const CommonWrap: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}