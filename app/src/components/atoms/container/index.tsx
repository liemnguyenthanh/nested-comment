import React, { PropsWithChildren } from 'react'

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='max-w-4xl w-full px-2 mx-auto'>
      {children}
    </div>
  )
}
